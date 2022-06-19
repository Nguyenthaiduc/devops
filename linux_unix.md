### Linux, Unix Basics
<p align="center">
  <a href="https://www.jenkins.io" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Logo_c%E1%BB%A7a_H%C4%90H_VNux_GNU-Linux.svg" width="320" alt="Linux Logo" /></a>
</p>

`ls` - List Directories Content (in windows we call these as a folders)

`cd` - Changes the current directories

`pwd` - Displays the present working directory

`cat` - Concatenates and display files

`echo` - Display Arguments to the Screen

`man` - Display the Manual (and this can be used with specific commands to show the manual for them)

`exit` - Exit the shell or your current Session

`which` - locate a command by searching the directories specified by the environmental variable PATH (see Below)

`clear` - Clears the Screen

***What are Environment Variables and what is $PATH?***

`.` - The Current Directory

`..` - The Parent Directory

`/` - The Root Directory

`~` - The Current User's Home Directory


**Directories Commands:**

`cd` - change directory to

`cd ..` - change directory to the parent directory

`cd -` - change directory to the previous Directory (works like back)

`pwd` - Print Working Directory (Full Absolute Path)

`mkdir` - Make a new directory

`mkdir -p` - Make a new directory (with -p parent) as if parent doesn't exist create as well

`rmdir` - remove a directory

`rmdir -p` - remove a directory (with -p parent) as delete with parent as well

`rm -rf` - remove a directory (using the rm command with recursive and force options)

**Listing Commands**

`ls` - list Files

`ls -l` - list Files with Long List Format

`ls -t` - list Files with sorting Last Modified time

`ls -h` - list Files with Human readable format (1000 = 1K)

`ls -a` - list All Files (hidden included) Hidden Files start with Dot (.) --> e.g: .ssh

`ls -laht` - list All Files (hidden included) and sort Last Modified time and with Human readable with Long List Format

`ln` - create a hard link

`ln -s` - create a symbolic (Soft) link (the same as Shortcuts in Windows)

**Vim**

`q` : exit not save
`q!`: exit and save
`:w` - Save fileName,
`:wq` - Save and exit
`:x` - Save and exit


***Cat***
Xem nội dụng của file , và ghép nội dung của file

Ghép file -> cat demo1.html demo2.html > newfile.html

***Echo***
`echo` -> in ra 
- echo "Hello World" -> Hello World
- echo "<h3>Hello Echo</h3>" > echo.html
- echo "<h1>Hello Echo</h1>" >> echo.html -> khong ghi de

***Tail***
- Xem dòng cuối của 1 file
- tail concat.html
- tail -n 10 demo.html
- tail -f demo.html

***Grep***
Lọc và tìm kiếm
- cat concat.html | grep <keyword search>
Hard links Vs Symbolic links

***Copy***
Lệnh cp (copy file):
- cp demo.html new_folder/  -> copy
- cp demo.html new_folder/demo2.html  copy -> doi ten
- cp -r , copy ca thu muc

+ Dể copy file sang một file mới gõ lệnh : cp + file cần copy + tên file mới
+ Copy sang thư mục khác : cp + file cần copy + tên thư mục
+ Copy đổi tên file : cp + file cần copy + tên thư mục/ tên file mới
+ Copy từ root: cp + /tên thư mục/tên file cần copy + /tên thư mục cần di chuyển/tên file (nếu đổi tên)
+ Copy thư mục : cp + -r + thư mục muốn copy + tên thư mục mới
+ Khi đứng ở root copy có thông báo Permission denied ta cần quyền admin lớn nhất hãy thêm lệnh sudo + cp + tên file cần copy + tên file mới
+7:38 Di chuyển file đồng thời đổi tên file cũ thành file mới
file cũ sau khi đổi, tên file cũ sẽ không còn tòn tại.
+ Gõ lệnh : mv + file cần move + tên file mới
+ Chuyển file sang thư mục khác : mv + file cần move + tên thư mục/tên file mới nếu đổi tên
+ Chuyển thư mục sang thư mục khác : mv + tên thư mục cần chuyển + tên thư mục/tên thư mục mới nếu cần đổi tên
+ Lệnh remove có thể xóa bằng cách gõ lệnh : rm + tên file
+ Nếu muốn xóa nhiểu file cũng 1 lúc ta có thể xóa bằng các : rm + tên file + tên file
+ Nếu không muốn gõ tên file ta có thể : ls danh sách các file trong thư mục đó sẽ hiện ra, sau đó gó lệnh rm và bôi đen file cần xóa click chuột phải để copy file cần xóa, sau đó enter.
+ Xóa toàn bộ thư mục cùng file bên trong: rm + -r + tên thư mục
+ Xóa file từ thư mục root nhưng cần quyền admin gõ lệnh: sudo + rm + folder/tên file

+  Gõ lệnh: rmdir + tên thư mục
+ Lệnh này chỉ có thể xóa thư mục rỗng bên trong không có file nếu có file sẽ không xóa được, lệnh này có thể được dùng để xóa thư mục hàng loạt nhưng không xóa thư mục có file
Thu nhỏ

Trong hệ thống file Linux, một liên kết (link) là một kết nối giữa file name và dữ liệu thực tế trên disk.
Có hai loại liên kết chính có thể được tạo: "hard" links, và "soft" hay symbolic links. Trước khi tìm hiểu về hard links và symbolic links, có một khái niệm khác cần hiểu rõ là “inode” - một khái niệm cơ bản trong Linux filesystem. Mỗi đối tượng của filesystem được đại diện bởi một inode.

***Move***
mv , di chuyển và đỏi file 
What is inode ?

***Remove***
`rm` -> xóa file
`rm -r` xóa cả file thu muc
`rmdir` xóa thư mục trống

Trong Linux, dữ liệu của các file được chia thành các block. Có nhiều cách tổ chức để liên kết các khối dữ liệu trong một file với nhau, một trong các cách đó là dùng chỉ mục (indexed allocation).
<img src = "https://images.viblo.asia/bed26257-9800-43b5-871f-acda88c5658d.gif"/>