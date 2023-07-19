# lambda base image for Docker from AWS
FROM public.ecr.aws/lambda/python:latest
# copy all code and lambda handler
COPY src ./src
COPY lambda_function.py ./
COPY requirements.txt ./
# install packages
RUN python3 -m pip install -r requirements.txt
# run lambda handler
CMD ["lambda_function.handler"]