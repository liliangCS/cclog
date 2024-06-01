### 概括

系统编程中的文件IO（输入/输出）是指在操作系统级别进行文件操作的过程，包括打开、读取、写入、关闭文件等。以下简要介绍各种操作的流程。



### 1. 打开文件

打开一个文件并返回文件描述符。如果成功，返回一个文件描述符；如果失败，返回-1。

```c
#include <fcntl.h>

int open(const char *pathname, int flags);
int open(const char *pathname, int flags, mode_t mode);
```

参数：
- pathname: 文件路径。
- flags: 文件打开模式，例如只读、只写、读写、创建等。
- mode: 当创建文件时，指定文件权限。



### 2. 读取文件

从文件中读取数据。如果成功，返回读取的字节数；如果到达文件结尾，返回0；如果失败，返回-1。

```c
#include <unistd.h>

ssize_t read(int fd, void *buf, size_t count);
```

参数:
- fd: 文件描述符。
- buf: 存储读取数据的缓冲区。
- count: 要读取的字节数。



### 3. 写入文件

将数据写入文件。如果成功，返回写入的字节数；如果失败，返回-1。

```c
#include <unistd.h>

ssize_t write(int fd, const void *buf, size_t count);
```

参数:
- fd: 文件描述符。
- buf: 要写入的数据。
- count: 要写入的字节数。



### 4. 关闭文件

关闭一个打开的文件描述符。如果成功，返回0；如果失败，返回-1。

```c
#include <unistd.h>

int close(int fd);
```

参数:
- fd: 文件描述符。



### 5. 文件定位

设置文件偏移量，用于随机访问文件中的某个位置。返回新的文件偏移量，如果失败，返回-1。

```c
#include <unistd.h>

off_t lseek(int fd, off_t offset, int whence);
```

参数:
- fd: 文件描述符。
- offset: 偏移量。
- whence: 定位方式，从文件头、当前位置或文件尾。



### 6. 获取文件状态

获取文件的状态信息。如果成功，返回0；如果失败，返回-1。

```c
#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>

int fstat(int fd, struct stat *statbuf);
```

参数:
- fd: 文件描述符。
- statbuf: 用于存储文件状态信息的结构体指针。



### 7. 文件同步

将文件缓冲区的数据同步到存储设备，确保数据持久化。如果成功，返回0；如果失败，返回-1。

```c
#include <unistd.h>

int fsync(int fd);
```

参数:
- fd: 文件描述符。