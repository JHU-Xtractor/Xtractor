import webbrowser, os
import json
import boto3
import io
from io import BytesIO
import sys


client = boto3.client('textract')
CONFIDENCE_SCORE = "Confidence Scores % (Table Cell)"
BUCKET ="xtractor-main"
TEMP = "/tmp/"
SAMPLE_INPUT = "sample_input.jpg"
SAMPLE_OUTPUT = "sample_output.csv"

class TableGenerator:

    def __init__(self, file_name):
        self.file_name = file_name

        # assuming the file structure is <Job>+<Page>.pdf
        self.output =  file_name.replace(".jpg", ".csv")

    def get_rows_columns_map(self,table_result, blocks_map):
        rows = {}
        scores = []
        for relationship in table_result['Relationships']:
            if relationship['Type'] == 'CHILD':
                for child_id in relationship['Ids']:
                    cell = blocks_map[child_id]
                    if cell['BlockType'] == 'CELL':
                        row_index = cell['RowIndex']
                        col_index = cell['ColumnIndex']
                        if row_index not in rows:
                            # create new row
                            rows[row_index] = {}
                        
                        # get confidence score
                        scores.append(str(cell['Confidence']))
                            
                        # get the text value
                        rows[row_index][col_index] = self.get_text(cell, blocks_map)
        return rows, scores


    def get_text(self,result, blocks_map):
        text = ''
        if 'Relationships' in result:
            for relationship in result['Relationships']:
                if relationship['Type'] == 'CHILD':
                    for child_id in relationship['Ids']:
                        word = blocks_map[child_id]
                        if word['BlockType'] == 'WORD':
                            if "," in word['Text'] and word['Text'].replace(",", "").isnumeric():
                                text += '"' + word['Text'] + '"' + ' '
                            else:
                                text += word['Text'] + ' '
                        if word['BlockType'] == 'SELECTION_ELEMENT':
                            if word['SelectionStatus'] =='SELECTED':
                                text +=  'X '
        return text


    def get_table_csv_results(self,file_name):

        with open(file_name, 'rb') as file:
            img_test = file.read()
            bytes_test = bytearray(img_test)
            # print('Image loaded', file_name)

        # process using image bytes
        # get the results
        response = client.analyze_document(Document={'Bytes': bytes_test}, FeatureTypes=['TABLES'])

        # Get the text blocks
        blocks=response['Blocks']
        # pprint(blocks)

        blocks_map = {}
        table_blocks = []
        for block in blocks:
            blocks_map[block['Id']] = block
            if block['BlockType'] == "TABLE":
                table_blocks.append(block)

        if len(table_blocks) <= 0:
            return "<b> NO Table FOUND </b>"

        csv = ''
        for index, table in enumerate(table_blocks):
            csv += self.generate_table_csv(table, blocks_map, index +1)
            csv += '\n\n'

        return csv

    def generate_table_csv(self,table_result, blocks_map, table_index):
        rows, scores = self.get_rows_columns_map(table_result, blocks_map)

        table_id = 'Table_' + str(table_index)
        
        # get cells.
        csv = 'Table: {0}\n\n'.format(table_id)

        for row_index, cols in rows.items():
            for col_index, text in cols.items():
                col_indices = len(cols.items())
                csv += '{}'.format(text) + ","
            csv += '\n'
            
        csv += '\n\n Confidence Scores % (Table Cell) \n'
        cols_count = 0
        for score in scores:
            cols_count += 1
            csv += score + ","
            if cols_count == col_indices:
                csv += '\n'
                cols_count = 0

        csv += '\n\n\n'
        return csv

    def convertToCSV(self):

        self.downloadFromS3(BUCKET, self.file_name)

        file_name = TEMP + SAMPLE_INPUT
        output_file = TEMP + SAMPLE_OUTPUT
        print(output_file)
        table_csv = self.get_table_csv_results(file_name)

        lines = table_csv.split("\n")
        buffer = ""
        for line in lines:
            if CONFIDENCE_SCORE in line:
                break
            else:
                buffer += line + "\n"

        # replace content
        with open(output_file, "wt") as fout:
            fout.write(buffer)

        self.uploadToS3(BUCKET, self.output)

        return self.output,buffer

    def downloadFromS3(self, bucket, key):
        s3 = boto3.resource('s3')
        s3.Bucket(bucket).download_file(self.file_name, TEMP + SAMPLE_INPUT)

    def uploadToS3(self, bucket, key):
        s3 = boto3.resource('s3')
        s3.Bucket(bucket).upload_file(TEMP + SAMPLE_OUTPUT, key)


if __name__ == "__main__":

    obj = TableGenerator(sys.argv[1])
    obj.convertToCSV()
