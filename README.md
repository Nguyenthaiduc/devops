### Linux, Unix Basics
<p align="center">
  <a href="https://www.linux.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Logo_c%E1%BB%A7a_H%C4%90H_VNux_GNU-Linux.svg" width="320" alt="Linux Logo" /></a>
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

Hard links Vs Symbolic links

Trong hệ thống file Linux, một liên kết (link) là một kết nối giữa file name và dữ liệu thực tế trên disk.
Có hai loại liên kết chính có thể được tạo: "hard" links, và "soft" hay symbolic links. Trước khi tìm hiểu về hard links và symbolic links, có một khái niệm khác cần hiểu rõ là “inode” - một khái niệm cơ bản trong Linux filesystem. Mỗi đối tượng của filesystem được đại diện bởi một inode.

What is inode ?

Trong Linux, dữ liệu của các file được chia thành các block. Có nhiều cách tổ chức để liên kết các khối dữ liệu trong một file với nhau, một trong các cách đó là dùng chỉ mục (indexed allocation).
<img src = "https://images.viblo.asia/bed26257-9800-43b5-871f-acda88c5658d.gif"/>