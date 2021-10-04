# Docker EXPA

## https://nikeweke.github.io/EXPA--Docker/

* [Docker complete guide](https://rutracker.org/forum/viewtopic.php?t=5608449)
* [Kubernets in nutshell](https://medium.com/google-cloud/kubernetes-101-pods-nodes-containers-and-clusters-c1509e409e16)
* [12 tools for Docker](https://proglib.io/p/12-docker-tools/)
* [FromLatest](https://www.fromlatest.io/#/) - для оптимизации `Dockerfile`
* [MySQL Basics in Docker](https://severalnines.com/database-blog/mysql-docker-containers-understanding-basics)

--- 

### Intro
* **Образ** - это набор файлов, необходимых для работы приложения на голой машине с установленным Docker.
* **Контейнер** - это запущенный образ. Из образов создаються и запускаютьс контейнеры.
* **Dockerfile** -  инструкции для построения образа. Это простой способ автоматизировать процесс создания образа.
* **docker-compose.yml** - инструкции для сборки нескольких контейнеров и их взаимодействия

### ВАЖНО!
* **0.0.0.0** - таким должем быть host в приложении вместо `127.0.0.1`
* **192.168.99.100** - порт на Windows 7 чтобы доступититься к порту контейнера (на Linux & Win10 - `127.0.0.1` OR `localhost`)
* `docker build -t [image-name] .` - в конце - Не забудьте точку !
* `CMD`  может быть только одно в Dockerfile
* Hot reload будет работать только на Win10 и Linux


### `docker run`
* **docker run -d -P [image-name]** - запустить образ, тем самым создаеться контейнер, если образ не находитьс локально тогда исчет на докер хабе и скачиваеться, запускаеться. `-d` -  открепить процес от консоли,  `-P` - призначить рандомный порт к порту приложения внутри Docker
* **docker run -it [image-name] sh** - запустить образ и зайти внутрь контейнера 
* **docker run -it --rm [image-name] sh** - запустить образ и зайти внутрь контейнера + удалить контейнер после закрытия
* **docker run [image-name] [command]** - запустить образ и выполнить внутри команду
* **docker run -it [image-name] sh** - зайти внутрь контейнера и открыть консоль контейнера. Команда run с флагом -it подключает интерактивный tty в контейнер.
* **docker run -d -P --name [your-name-to-container] [image-name]** - Флаг `-d` открепит (detach) терминал, флаг `-P` сделает все открытые порты публичными и случайными, и, наконец, флаг `--name` это имя, которое мы хотим дать контейнеру.
* **docker run -p 8000:3000 [image-name]** - запустить контейнер с перебросом запроса с 0.0.0.0:8000 -> 3000. Слева порт локальный - справа порт Докера, указанный в `Dockerfile (expose)` на который будет переброс запросов

### `docker build`
* **docker build -t [image-name] .** - забилдить образ на основе `Dockerfile`

 ### `docker images` & `docker ps` 
* **docker images** - покажет сколько образов есть локально
* **docker ps** - покажет контейнеры
* **docker ps -a** - покажет контейнеры + которые были запущены

### `docker exec`, `docker port`, `docker pull`, `docker commit`, `docker logs`
* **docker exec -it [container-id] /bin/bash** - войти в контейнер 
* **docker port [container-name]** - просмотреть порты контейнера
* **docker push [nickname]/[image-name]** - запушить свой образ на свой репозиторий 
* **docker commit [container-id] [image-name:tag]** - сделать из контейнера образ
* **docker logs [container-id]** - получить логи с контейнера
* **docker pull [image-name]** - Скачать образ с docker hub

### `docker rmi`, `docker rm`, `docker kill` 
* **docker rmi [image-name] [image-name] -f** - удалить  или образы
* **sudo docker kill $(sudo docker ps -q)** - убить все контейнеры. `-q` - показать только ID 
* **sudo docker rm $(sudo docker ps -q -a)** - удалить все контейнеры
* **sudo docker rmi $(sudo docker images -q)** - удалить все образы
* **docker rm $(docker ps -a -q -f status=exited)** - удалить все контейнеры с статусом exited

### `docker prune`
* **docker volume prune** - удалить все volumes
* **docker system prune -a** - удалить все контейнеры, образы и т.д.

### `docker-compose`
* **docker-compose down** - удаляет контейнеры и выключает их
* **docker-compose build** - строит новые образы
* **docker-compose up** - поднимает контейнеры


### Docker push and pull image
```bash
# Enter your credentials
docker login

# Rename your image if it is not like: nickanme/image-name
docker tag my_image nickname/my_image

# Push your image to your repositories
docker push nickname/my_image

# Pull this image
docker pull nickname/my_image
```

### Вопросы и Ответы
**1)** Как уменьшить размер образа? допустим nodejs official весит 400 мб в свернутом состоянии. 
> * Использовать еще меньший отцовский образ, например: `ubuntu - 43mb` или `alpine - 5mb`
> * Попробовать найти уже нужный образ с наименьшим размером, например: `alpine-node - 67mb`
> * Не устанавливать отладочные иструменты, например: `vim` или `curl`
> * Больше здесь: https://hackernoon.com/tips-to-reduce-docker-image-sizes-876095da3b34

**2)** Можно ли из контейнера сделать образ?
> Да можно: `docker commit [container-id] [image-name:tag]`

**3)** Если не удаеться скачать репозиторий, а сеть все таки есть, тогда что?
```
docker-machine restart default 
docker login
```

**4)** Под Windows установил Docker-Toolbox. Но подключиться могу только через PS в окне Toolbox. Как подключиться через cmd или cmder.exe?
```
docker-machine env --shell cmd default 
@FOR /f "tokens=*" %i IN ('docker-machine env --shell cmd default') DO @%i
```

**5)** Как проверить что докер запущен на Windows?
```
docker-machine active
```



