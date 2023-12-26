import json

def getDictionary(filename:str)-> dict:
    """
    This function reads a json file and returns a dictionary
    :param filename: the name of the file to be read
    """
    with open(filename) as f:
        data = json.load(f)

    return data

 
def getTable(dictionary: dict,length:int, height:int)-> list:
    """
    This function reads a json file and returns the table
    :param filename: the name of the file to be read
    """
    try:
        for item in dictionary["Blocks"]:
            if item["BlockType"] == "TABLE":
                tableDim = {}
                tableDim["x_min"] = item["Geometry"]["BoundingBox"]["Left"]*length
                tableDim["x_max"] = (item["Geometry"]["BoundingBox"]["Left"] + item["Geometry"]["BoundingBox"]["Width"])*length
                tableDim["y_min"] = item["Geometry"]["BoundingBox"]["Top"]*height
                tableDim["y_max"] = (item["Geometry"]["BoundingBox"]["Top"] + item["Geometry"]["BoundingBox"]["Height"])*height
                return [tableDim]
            
    except Exception as e:
        raise Exception("The file does not contain a table")

def getRowsAndColumns(data: dict,length:int,height:int)-> tuple:
    """
    This function reads a table and returns the number of rows and columns and their dimensions
    :param table: the table to be read
    """

    # first get the total amount of rows and cols
    rows = 0
    columns = 0
    for item in data["Blocks"]:
        if item["BlockType"] == "CELL":
            if item["RowIndex"] > rows:
                rows = item["RowIndex"]
            if item["ColumnIndex"] > columns:
                columns = item["ColumnIndex"]
    
    print("[INFO] The table has {} rows and {} columns".format(rows,columns) )
    # we create a list of dictionaries for the rows
    rows = {}
    cols = {}
    rowCount = 1
    colCount = 1
    for item in data["Blocks"]:
        if item["BlockType"] == "CELL":
            
            if rowCount == item["RowIndex"]:
                # dictionary for row dimensions
                rowDim = {}
                rowDim["x_min"] = item["Geometry"]["BoundingBox"]["Left"]*length
                rowDim["x_max"] = (item["Geometry"]["BoundingBox"]["Left"] + item["Geometry"]["BoundingBox"]["Width"])*length
                rowDim["y_min"] = item["Geometry"]["BoundingBox"]["Top"]*height
                rowDim["y_max"] = (item["Geometry"]["BoundingBox"]["Top"] + item["Geometry"]["BoundingBox"]["Height"])*height
                
                rows[rowCount]=(rowDim)
                rowCount += 1
            
            if colCount == item["ColumnIndex"]:
            # dictionary for column dimensions
                colDim = {}
                colDim["x_min"] = item["Geometry"]["BoundingBox"]["Left"]*length
                colDim["x_max"] = (item["Geometry"]["BoundingBox"]["Left"] + item["Geometry"]["BoundingBox"]["Width"])*length
                colDim["y_min"] = item["Geometry"]["BoundingBox"]["Top"]*height
                colDim["y_max"] = (item["Geometry"]["BoundingBox"]["Top"] + item["Geometry"]["BoundingBox"]["Height"])*height

                cols[colCount]=(colDim)
                colCount += 1

    return rows, cols

def getCells(data: dict,length:int, height:int)-> list:
    """
    This function reads a table and returns the cell dimensions
    :param data: the dictionary of values
    """

    # first get the total amount of rows and cols
    listOfCells = []
    for item in data["Blocks"]:
        if item["BlockType"] == "CELL":
            # dictionary for row dimensions
            cell = {}
            cell["x_min"] = item["Geometry"]["BoundingBox"]["Left"]*length
            cell["x_max"] = (item["Geometry"]["BoundingBox"]["Left"] + item["Geometry"]["BoundingBox"]["Width"])*length
            cell["y_min"] = item["Geometry"]["BoundingBox"]["Top"]*height
            cell["y_max"] = (item["Geometry"]["BoundingBox"]["Top"] + item["Geometry"]["BoundingBox"]["Height"])*height

            # acquire the text
            text = ""
            try:
                for textItem in item["Relationships"][0]["Ids"]:

                    for word in data["Blocks"]:
                        if word["Id"] == textItem:
                            text += word["Text"]
            except:
                pass
            cell["text"] = text
            listOfCells.append(cell)
    
    return listOfCells

def getSpanningCells(data: dict,length:int, height:int)-> list:
    """
    This function reads a table and returns the cell dimensions
    :param data: the dictionary of values
    """

    # first get the total amount of rows and cols
    listOfCells = []

    for item in data["Blocks"]:
        if item["BlockType"] == "MERGED_CELL":
            # dictionary for row dimensions
            cell = {}
            cell["x_min"] =item["Geometry"]["BoundingBox"]["Left"]*length
            cell["x_max"] =(item["Geometry"]["BoundingBox"]["Left"] + item["Geometry"]["BoundingBox"]["Width"])*length
            cell["y_min"] =item["Geometry"]["BoundingBox"]["Top"]*height
            cell["y_max"] =(item["Geometry"]["BoundingBox"]["Top"] + item["Geometry"]["BoundingBox"]["Height"])*height
            listOfCells.append(cell)
    
    return listOfCells

def mainSequence(filename: str,length: int,height: int) -> None:
    """
    This function reads a json file and returns a dictionary
    :param filename: the name of the file to be read
    :param length: the length of the image
    :param height: the height of the image
    """
    # first we read the file and generate a dictionary
    data = getDictionary(filename)

    # we get the table dimensions
    table = getTable(data,length,height)

    # we get the rows and columns items
    rows, columns = getRowsAndColumns(data,length,height)

    # we get the cells
    cells = getCells(data,length,height)

    # we get spanning cells
    spanningCells = getSpanningCells(data,length,height)

    # we output the results to a json file
    file = open("output.json", "w")

    file.write("[\n")
    for bbox in table: 
        file.write("\t{\n\t\t\"Object_Type\": \"table\",\n")
        file.write("\t\t\"bbox\": [{},{},{},{}]\n".format(bbox["x_min"],bbox["y_min"],bbox["x_max"],bbox["y_max"]))
        file.write("\t},\n")

    # rows
    for bbox in rows:
        file.write("\t{\n\t\t\"Object_Type\": \"row\",\n")
        file.write("\t\t\"bbox\": [{},{},{},{}]\n".format(rows[bbox]["x_min"],rows[bbox]["y_min"],rows[bbox]["x_max"],rows[bbox]["y_max"]))
        file.write("\t},\n")
    
    # columns
    for bbox in columns:
        file.write("\t{\n\t\t\"Object_Type\": \"column\",\n")
        file.write("\t\t\"bbox\": [{},{},{},{}]\n".format(columns[bbox]["x_min"],columns[bbox]["y_min"],columns[bbox]["x_max"],columns[bbox]["y_max"]))
        file.write("\t},\n")
    
    # cells
    for bbox in cells:
        file.write("\t{\n\t\t\"Object_Type\": \"cell\",\n")
        file.write("\t\t\"bbox\": [{},{},{},{}],\n".format(bbox["x_min"],bbox["y_min"],bbox["x_max"],bbox["y_max"]))
        file.write("\t\t\"text\": \"{}\"\n".format(bbox["text"]))
        file.write("\t},\n")

    # spanning cells
    for i in range(len(spanningCells)-1):
        bbox = spanningCells[i]
        file.write("\t{\n\t\t\"Object_Type\": \"spanningCell\",\n")
        file.write("\t\t\"bbox\": [{},{},{},{}],\n".format(bbox["x_min"],bbox["y_min"],bbox["x_max"],bbox["y_max"]))
        file.write("\t\t\"text\": \"{}\"\n".format(cells[i]["text"]))
        file.write("\t},\n")
    
    # last one doesn't have comma
    bbox = spanningCells[-1]
    file.write("\t{\n\t\t\"Object_Type\": \"spanningCell\",\n")
    file.write("\t\t\"bbox\": [{},{},{},{}],\n".format(bbox["x_min"],bbox["y_min"],bbox["x_max"],bbox["y_max"]))
    file.write("\t\t\"text\": \"{}\"\n".format(cells[i]["text"]))
    file.write("\t}\n")
    
    file.write("]")

    file.close()




### Testing only
if __name__ == "__main__":
    mainSequence("analyzeDocresponse.json", 1000, 1000)
