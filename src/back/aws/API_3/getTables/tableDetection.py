import boto3
import json

BUCKET = "xtractor-main-v2"

s3 = boto3.resource('s3')

def getTableBoundingBox(response):
    """
    This function gets the bounding box of the tables
    :param response: the response from Textract
    """
    # Get the blocks
    blocks = response['Blocks']
    
    # Get the table blocks
    tableBlocks = [block for block in blocks if block['BlockType'] == 'TABLE']
    
    # Get the bounding boxes
    boundingBoxes = {}
    for table in range(len(tableBlocks)):
        # Get the table block
        tableBlock = tableBlocks[table]
        
        # Get the bounding box
        boundingBox = tableBlock['Geometry']['BoundingBox']
        
        # Get the width and height
        width = boundingBox['Width']
        height = boundingBox['Height']
        
        # Get the left and top
        left = boundingBox['Left']
        top = boundingBox['Top']
        
        # Get the right and bottom
        right = left + width
        bottom = top + height
        
        # Add the bounding box to the dictionary
        boundingBoxes[table] = {
            "left": left,
            "top": top,
            "right": right,
            "bottom": bottom
        }
    
    # Return the bounding boxes
    return boundingBoxes

def writeResultsToS3(file, results):
    """
    This function writes the results to S3
    :param file: the file to be written
    :param results: the results to be written
    """
    # S3 client
    s3 = boto3.client('s3')
    
    # Write the results to S3
    s3.put_object(
        Body=json.dumps(results),
        Bucket=BUCKET,
        Key=file 
    )

def detectTablesTextract(jobID,file):
    """
    This function detects all the tables in an image
    :param file: the file to be processed
    """
    # Textract client
    textract = boto3.client('textract')

    # Get the response
    response = textract.get_document_analysis(
        JobId=jobID
    )

    # Write the results to S3 - Cost saving measure
    fullTextract = file.split(".")
    writeResultsToS3(fullTextract, response)
    
    # Get the bounding boxes
    boundingBoxes = getTableBoundingBox(response)
    boundingBoxesOnly = file.replace(".pdf", "") + "_bounding_boxes.json"
    writeResultsToS3(boundingBoxesOnly, boundingBoxes)

    # Format the CSV Data
    csvData = get_table_csv_results(response)
    csvFile = file.replace(".pdf", "") + "_csv_results.csv"
    writeResultsToS3(csvFile, csvData)

    # Return the bounding boxes
    return boundingBoxes

def get_table_csv_results(response):

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
        csv += generate_table_csv(table, blocks_map, index +1)
        csv += '\n\n'

    return csv


def get_text(result, blocks_map):
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

def get_rows_columns_map(table_result, blocks_map):
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
                        rows[row_index][col_index] = get_text(cell, blocks_map)
        return rows, scores


def generate_table_csv(table_result, blocks_map, table_index):
    rows, scores = get_rows_columns_map(table_result, blocks_map)

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

if __name__ == "__main__":
    print(detectTablesTextract("jyoun127/702825010004/output_1.pdf"))

