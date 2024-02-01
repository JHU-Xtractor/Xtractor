# lambda base image for Docker from AWS
FROM lambci/lambda:build-python3.8

# Copy files
#COPY src ./src
COPY lambda_function.py ./
COPY requirements.txt ./

# Install Python packages
RUN python3 -m pip install -r requirements.txt 

# Run lambda handler
CMD ["lambda_function.lambda_handler"]