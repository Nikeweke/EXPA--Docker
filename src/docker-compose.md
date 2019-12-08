# Docker compose

[[toc]]

---

### docker-compose.yml
```yml
version: '3'

# when starting containers - docker automatically
# makes network for specified services(containers)
# where they can see each other

# service same as container here
services: 
  redis-server:
    image: 'redis'
  
  node-app: 
    build: ./node-app
    ports: 
      - '4001:8081'
```

<br>

### Запуск отдельного сервиса из `docker-compose.yml`
```
docker-compose up [service-name]
```

<br>

### Volumes
Указывает куда сохранять данные из БД из контейнера на локальную машину. 
Данные не храняться в контейнере, там храниться только ссылка 
```yml
services:
  mongodb:
    image: mongo:latest
    container_name: "mongodb_sp_local"
    environment:
      - MONGO_DATA_DIR=/data/db
      - MONGO_LOG_DIR=/dev/null
    volumes:
    # ./data/db - сделает папку там где был запущент контейнер(то есть в проекте), 
    # и данные из контейнера по ссылке буду сохраняться/цепляться при закрытии/запуске контейнера через docker-compose   
      - ./data/db:/data/db  
    ports:
        - 28017:27017
    command: mongod --logpath=/dev/null # --quiet
    networks:
      - localnet
    restart: always
```

<br>

### Dockers commands

#### `docker-compose up --build` - build services and run em 
#### `docker-compose up -d` - launch in background 
#### `docker-compose down` - remove containers, networks and etc.

<br>

### Автоматическая перегрузка контейнеров (restarts)

Коды при которых перегрузиться контейнер
* `0` - ОК, это нормальный код окончания процесса (always)
* `1, ...` - от 1 и дальше, это уже ненормальное окончание процесса (on-failure)

Restart policies:
* `"no"` - never attempt to restart this . container if stops or crashes
* `always` - if this container stops *any reason* always attempt to restart it
* `on-failure` - olny restart if container stops with an error code
* `unless-stopped` - always restart unless we (the developers) forcibly stop it

:::tip
**'no'** - должны быть в кавычках, потому что в `yml` это как **false**
:::

```yml
version: '3'

# when starting containers - docker automatically
# makes network for specified services(containers)
# where they can connect each other

# service same as container here
services: 
  redis-server:
    image: 'redis'
  
  node-app: 
    build: ./node-app
    ports: 
      - '8000:8000'
    depends_on: 
      - redis-server
    restart: always
```

<br>

### Создание дополнительных сервисов (scale, nginx, load-balancer)
Также надо изменить свой docker-compose в соотвествии с [инструкциями](https://pspdfkit.com/blog/2018/how-to-use-docker-compose-to-run-multiple-instances-of-a-service-in-development/)

```
docker-compose up --scale web=3
```