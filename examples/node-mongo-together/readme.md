## Создание своего образа: Node + Mongo

### Quick Start
```bash
# Copy all files from this folder

# Install dependencies for node app
npm i 

# Make build 
docker build -t myimage .

# Run it
docker run -d -P --name mycontainer myimage

# Check logs 
docker logs mycontainer
# can be error something: about notfoundline

# Check if all instances running
docker exec -it mycontainer
> top
> mongo

```
