### Docker
<p align = "center">
  <a href="https://www.jenkins.io" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" width="200" alt="Docker" /></a>
</p>

### NOTE

- A way to package application with all the necessary
dependencies and configuration  <-> (Một cách để đóng gói ứng dụng với tất cả những thứ cần thiết
sự phụ thuộc và cấu hình)

- ***CONTAINER*** is a running environment for ***IMAGE***

###

<img src = "https://i.imgur.com/8rIgy8U.png"/>

### Basics Commands
```bash
$ docker pull redis
$ docker run redis
$ docker ps
$ docker run -d redis
$ docker stop <id>
$ docker run redis
$ docker run -p 6000:6379 redis
$ docker run -d -p 6000:6379 --name redis-other redis

```
### Debugging Container
```bash
$ docker logs <Container ID>
$ docker exec -it <Container ID> /bin/bash
```
### Development Docker
```bash
$ docker network ls
$ docker network create mongo-network
$ docker run -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodb --net mongo-network mongo    
$ docker logs 29192b39d3d0e15a7739f33a2f92b91c173023aabfc22137a5fa27ce20ba8130
$ docker run -d -p 8081:8081 -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password --net mongo-network --name mongo-express -e ME_CONFIG_MONGODB_SERVER=mongodb mongo-express  

$ docker exec -it <id container mongo-express>
$ docker run -d \
$ -p 8081:8081 \
$ -e MONGO_INITDB_ROOT_USERNAME=mongodamin \
$ -e MONGO_INITDB_ROOT_PASSWORD=secret \
$ --netword some-network mongo \
$ --name mongo-express \
$ -e ME_CONFIG_MONGODB_SERVER=mongodb \


```
### Docker compose
```bash
$ docker-compose -f docker-compose.yaml up
$ docker-compose -f docker-compose.yaml down 
```