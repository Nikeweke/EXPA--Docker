FROM node:alpine
WORKDIR /app

COPY package*.json ./
RUN npm install && npm install -g nodemon

COPY ./ ./

CMD [ "nodemon", "app" ] 