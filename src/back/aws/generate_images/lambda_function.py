# import module
from pdf2image import convert_from_path

SUBDIRECTORY = 'images/'
FILENAME = './example.pdf'

def lambda_handler(event,context):
    # Store Pdf with convert_from_path function
    images = convert_from_path(FILENAME)
    
    foldername = SUBDIRECTORY + FILENAME.split('.')[0]+"/"

    for i in range(len(images)):
        # Save pages as images in the pdf
        images[i].save(foldername+'page'+ str(i) +'.jpg', 'JPEG')

if __name__ == "__main__":
    lambda_handler(None, None)