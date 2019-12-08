# Use an existiing docker image as a base
FROM node:alpine

# Make directory if not exist and set pwd there for COPY, ADD, etc.
WORKDIR /usr/app
# usr dir is safe dir 

# Download and install deps (Why dont )
COPY ./package*.json ./
RUN npm install

# Copying project
# First path - is path to folder to copy from on relative to build context 
# (docker run build .) - dot is context
COPY ./ ./


# Tell the image what to do when it starts as container
CMD ["node", "app"]


# Commands docker
# docker rm $(docker ps -a -q) -f - remove all containers
# docker system prune -a - remove all docker stuff
# docker run -p 8080:8080 <image-id> - port mapping