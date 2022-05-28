### Installation
```bash
$ docker build -t my-node-image .
$ docker run -d -p 4000:4000 --name my-node-app my-node-image
$ docker run -dt --name my-node-app my-node-image
```

- Chui vào bên trong
```bash
$ docker exec -it my-node-app bash
$ exit
```


- Thay đổi nội dung chạy trên docker-compose
```bash
$ docker-compose up -d
$ docker-compose build
$ docker-compose down
```

-d is meaning detach
