
# DATABSE NAMES
XTRACTOR_USERS_TABLE = "xtractor_users"

BUCKET_NAME = "xtractor-main"

# COMMON UTILITIES
def formatError(error: str) -> str:
    return "[ERROR]: " + error.strip().replace("\n", " ")

# HEADERS
HEADERS = {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "POST, OPTION"
}