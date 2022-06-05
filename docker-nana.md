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
