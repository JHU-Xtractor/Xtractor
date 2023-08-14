docker build -t xtractor-pdf-to-image . --network=host
docker tag xtractor-pdf-to-image:latest 214775916492.dkr.ecr.us-east-1.amazonaws.com/xtractor-pdf-to-image:latest
docker push 214775916492.dkr.ecr.us-east-1.amazonaws.com/xtractor-pdf-to-image:latest