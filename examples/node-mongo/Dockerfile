# Это начальный образ на который будет навешывать Node, Mongo
FROM alpine:3.8

# nodejs + npm + mongodb
RUN apk add --update nodejs && \
    apk add --update nodejs-npm && \
    apk add mongodb

VOLUME /data/db
# or
# RUN mkdir -p /data/db

# Mkdir for app
RUN mkdir -p /usr/src/app

# COPY app to folder
COPY . /usr/src/app 

# set current workdir for any commands -  RUN, CMD, ENTRYPOINT, COPY and ADD
# Без этой команды пришлось бы писать - CMD [ "sh", "usr/src/app/runner.sh" ], и так далее, указывать полный путь
WORKDIR /usr/src/app

EXPOSE 8000 27017 28017 

CMD [ "sh", "runner.sh" ]


