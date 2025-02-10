FROM alpine:3.21.2

RUN apk add --update-cache \
            nodejs \
            npm 
WORKDIR /app   


#docker build -t ts-dev .