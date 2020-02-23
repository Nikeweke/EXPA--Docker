# Docker: Mongo + Node

* [StackOverflow](https://stackoverflow.com/questions/37423659/how-to-create-user-in-mongodb-with-docker-compose)
* [Medium](https://dev.to/sonyarianto/how-to-spin-mongodb-server-with-docker-and-docker-compose-2lef)
* [Medium 2](https://medium.com/faun/managing-mongodb-on-docker-with-docker-compose-26bf8a0bbae3)




### Start instruction
1. Запускаем Монго с volumes
2. `ADD` иструкция закинула в контейнер наш скрипт по созданию пользователя через которого мы подключимся к нашей бд
2. Там уже установлен пользователь root - 12345
3. Пользователь root дает доступ только чтобы войти в БД через терминал
4. Создаем пользователя чтобы подключиться к нашей бд
```sh
# находим свой контейнер
docker ps 

# заходим в контейнер
docker exec -it <container-name> sh

# выполняем script по отношению к нашей БД
mongo -u root -p 12345 /tmp/init-mongo.js

# [опционалльно] проверяем создался ли пользователь
use admin;
db.system.users.find({}, {_id:1, user: 1, db: 1, roles: 1});

# Finish
# Пытаемся подключиться через что нужно
# URI: mongodb://admin:12345@localhost:27017/mongo-test
```

### [another variant] Use `load()`
Также можно скрипт загрузить через функцию `load` в mongo shell

```sh
# заходим в монго под рутом 
mongo -u root -p 12345

# переключаемся на нашу БД(если даже её нет) и загрузит файл для создания пользователя 
use mongo-test;
load('/tmp/init-mongo.js');
```