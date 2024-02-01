aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 214775916492.dkr.ecr.us-east-1.amazonaws.com

docker build -t xtractor-pdf-to-image .

docker tag xtractor-pdf-to-image:latest 214775916492.dkr.ecr.us-east-1.amazonaws.com/xtractor-pdf-to-image:latest

docker push 214775916492.dkr.ecr.us-east-1.amazonaws.com/xtractor-pdf-to-image:latest