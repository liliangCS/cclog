### 概述

标准 I/O（Standard I/O，又称为 stdio）是 C 语言中用于进行标准输入输出操作的库。它提供了一套简洁、灵活的函数，用于读取和写入文件、管道和其他 I/O 设备。

标准 I/O 使用文件指针（FILE \*）来表示输入和输出流。C 语言中有三个预定义的标准 I/O 流：

- 标准输入（stdin）：表示标准输入设备，通常是键盘。
- 标准输出（stdout）：表示标准输出设备，通常是屏幕。
- 标准错误（stderr）：表示标准错误输出设备，通常也是屏幕。

这些流在程序启动时自动打开，无需显式打开或关闭。

标准 I/O 提供了一系列函数来进行输入和输出操作，以下简要介绍常用的标准 I/O 函数。

### 文件操作

1. 打开文件：

```c
FILE *fopen(const char *filename, const char *mode);
```

2. 关闭文件：

```c
int fclose(FILE *stream);
```

3. 设置文件位置指针:

```c
int fseek(FILE *stream, long offset, int whence);
```

4. 获取文件位置指针:

```c
long ftell(FILE *stream);
```

5. 重置文件位置指针到文件开头:

```c
void rewind(FILE *stream);
```

### 格式化输入输出

1. 格式化输入从标准输入（stdin）：

```c
int scanf(const char *format, ...);
```

2. 格式化输入从文件流：

```c
int fscanf(FILE *stream, const char *format, ...);
```

3. 格式化输出到标准输出（stdout）：

```c
int printf(const char *format, ...);
```

4. 格式化输出到文件流：

```c
int fprintf(FILE *stream, const char *format, ...);
```

### 字符输入输出

1. 从文件流读取一个字符：

```c
int fgetc(FILE *stream);
```

2. 从标准输入（stdin）读取一个字符：

```c
int getchar(void);
```

3. 将字符写入文件流：

```c
int fputc(int c, FILE *stream);
```

4. 将字符写入标准输出（stdout）：

```c
int putchar(int c);
```

### 字符串输入输出

1. 从文件流读取一行：

```c
char *fgets(char *s, int n, FILE *stream);
```

2. 从标准输入（stdin）读取一行：

```c
char *gets(char *s);
```

3. 将字符串写入文件流：

```c
int fputs(const char *s, FILE *stream);
```

4. 将字符串写入标准输出（stdout）：

```c
int puts(const char *s);
```
