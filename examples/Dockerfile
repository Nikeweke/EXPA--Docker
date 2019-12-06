# Use an existiing docker image as a base
FROM alpine

# Download and install deps
RUN apk add --update redis

# Tell the image what to do when it starts as container
CMD ["redis-server"]