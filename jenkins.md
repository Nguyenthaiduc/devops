<p align = "center">
  <a href="https://www.jenkins.io" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png" width="200" alt="Linux Logo" /></a>
</p>


***Jenkins*** là một opensource dùng để thực hiện chức năng tích hợp liên tục (gọi là ***CI – Continuous Integration***) và xây dựng các tác vụ tự động hóa.

Nó tích hợp các source code của các members trong team lại nhanh chóng một cách liên tục, theo dõi sự thực thi và trạng thái thông qua các bước kiểm thử (***Integration test, units test***). Tất nhiên là nhằm giúp sản phẩm chạy ổn định.
<p align = "center">
  <a href="https://www.linux.org/" target="blank"><img src="https://topdev.vn/blog/wp-content/uploads/2019/05/jenkins.png"  alt="Jenkins Logo" width="750"/></a>
</p>

<p align = "center">
  <a href="https://www.linux.org/" target="blank"><img src="https://topdev.vn/blog/wp-content/uploads/2019/05/CICD.png"  alt="Jenkins Logo" width="750"/></a>
</p>
<p align = "center">
  <a href="https://www.linux.org/" target="blank"><img src="https://raw.githubusercontent.com/bregman-arie/devops-resources/master/images/jenkins_map.png"  alt="Jenkins Logo" width="750"/></a>
</p>


CI là viết tắt của ***Continuous Integration***
+ Là tích hợp liên tục, nhằm liên tục tích hợp các source code của các thành viên trong team lại một cách nhanh chóng.

***Chu trình làm việc***
- Bước đầu tiên, các thành viên trong team dev sẽ bắt đầu pull code mới nhất từ repo về branch để thực hiện các yêu cầu chức năng nhất định.
- Tiếp đó là quá trình lập trình và test code để đảm bảo chất lượng của chức năng cũng như toàn bộ source code.
- Thành viên code xong thì sẵn sàng cho việc commit vào branch develop của team.
- Thành viên cập nhật code mới từ repo về local repo
- Merge code và giải quyết conflict.
- Build và đảm bảo code pass qua các tests dưới local.
- Commit code lên repo
- Máy chủ CI lắng nghe các thay đổi code từ repository và có thể tự động build/test, sau đó đưa ra các thông báo (pass/failure) cho các thành viên.

CD là viết tắt của ***Continuous Delivery***
+ ***Continuous Delivery*** là chuyển giao liên tục, là 1 tập hợp các kỹ thuật để triển khai tích hợp souce code trên môi trường **staging** ( một môi trường rất giống với môi trường **production**).

### Installation
```bash
$ sudo apt update
$ sudo apt install openjdk-8-jdk openjdk-8-jre
$ sudo vim /etc/environment
$ sudo source /etc/environment
$ wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
$ sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
$ sudo apt update
$ sudo apt install jenkins
$ sudo systemctl start jenkins
$ sudo systemctl status jenkins
```
