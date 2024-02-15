import boto3

sqs = boto3.client('sqs')

def sendMessage(queueUrl, message):
    """
    This function sends messages to an SQS queue
    :param queueUrl: the URL of the queue
    :param messages: the messages to be sent
    """
    # Send the messages
    response = sqs.send_message(
        QueueUrl=queueUrl,
        MessageBody=message,
        MessageGroupId="xtractor_group",
        MessageDeduplicationId=message
    )

    print(response)

def receiveMessages(queueUrl):
    """
    This function receives messages from an SQS queue
    :param queueUrl: the URL of the queue
    :param maxNumberOfMessages: the maximum number of messages to be received
    """
    # Receive the messages
    response = sqs.receive_message(
        QueueUrl=queueUrl
    )
    
    # Return the messages
    try:
        return response
    except:
        return None
    
def deleteMessage(queueUrl, receiptHandle):
    """
    This function deletes a message from an SQS queue
    :param queueUrl: the URL of the queue
    :param receiptHandle: the receipt handle of the message
    """
    # Delete the message
    sqs.delete_message(
        QueueUrl=queueUrl,
        ReceiptHandle=receiptHandle
    )


if __name__ == "__main__":
    queueUrl = "xtractor_process_table.fifo"
    messages = ["message1", "message2", "message3"]
    for message in messages:
        sendMessage(queueUrl, message)
        print("Sent message: " + message)
  
    count = 0
    length = len(messages)
    while count < length:
        print("Count is: " + str(count))
        messages = receiveMessages(queueUrl)
        if "Messages" in messages:
            for message in messages["Messages"]:
                print("Received message: " + message["Body"])
                deleteMessage(queueUrl, message["ReceiptHandle"])
                print("Deleted message: " + message["Body"])
                count += 1

    print("Done, Count: " + str(count))