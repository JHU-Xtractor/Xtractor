
# DATABSE NAMES
XTRACTOR_USERS_TABLE = "xtractor_users"

BUCKET_NAME = "xtractor-main"

# COMMON UTILITIES
def formatError(error: str) -> str:
    return "[ERROR]: " + error.strip().replace("\n", " ")

# HEADERS
HEADERS = {
    "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*"
}