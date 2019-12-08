FROM node:8.9.4-alpine
WORKDIR . /app

# Install bash for running script (exactly "wait-for-it.sh")
RUN apk add --no-cache bash

COPY package*.json ./

RUN npm install

COPY . .
COPY wait-for-it.sh /

EXPOSE 8000
# CMD [ "node", "app" ] 

# Why wait but not node app? Cuz Mysql running in parallel with app even if it "depends on"
CMD /wait-for-it.sh db:3306 -- node app