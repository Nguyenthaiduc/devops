### Docker
<p align = "center">
  <a href="https://www.jenkins.io" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" width="200" alt="Docker" /></a>
</p>

- Download gì đó xuống ở Hub ->  Docker pull <-> Git clone
`docker pull nginx`
***nginx*** download server
- Chạy Docker
`docker run -it -p 8080:80 nginx` 
`docker run -d -p 8080:80 nginx`

***it*** tag is mean **interactive**
***p*** tag is mean ***port***
***d*** tag is mean ***detach*** chạy ngầm background 
- Cái chúng ta down xuống gọi là Image , khi chúng ta run gọi là Container
- Xem Container hoạt động
`docker ps`
- Xem Container tất cả Container đã dùng 
`docker ps -a`
- Xóa Docker
`docker rm <id>`
- Xem Images đã Down về
`docker images`
- Xóa Images 
`docker rmi nginx`
`docker rmi <id Images>`
- Dừng Docker
`docker stop <id>`
- Khởi Động lại Docker
`docker start <Names> `
- Chạy Docker Custom Names
`docker run -d -p 8080:80 --name mynginx nginx`
- Chui vào bên trong Container
`docker exec -it mynginx bash`
`ls -la`
- Muốn nhồi vào bên trong máy chủ ảo thay cho file nào đó Volume
`docker run -d -p 8080:80 --name mynginx -v "<path>":/usr/share/nginx/html nginx`
- In ra Log của Docker
`docker logs mynginx `
`docker run -d -p 8080:80 --name mynginx -v "<path>":/usr/share/nginx/html -v "<path>":/var/log/nginx nginx`


