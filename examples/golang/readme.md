# Golang in docker

* https://flaviocopes.com/golang-docker/
* https://tutorialedge.net/golang/go-docker-tutorial/
* https://dev.to/andrioid/slim-docker-images-for-your-go-application-11oo


```sh
# Install deps
./packages.bat

# compile for your platform
./runner.bat
```

```sh
docker-compose up --build

# detach from launch
docker-compose up --build -d

# shut down all services
docker-compose down
```

Check port: 
* http://localhost:8000/ 
* OR windows - http://192.168.99.100:8000/