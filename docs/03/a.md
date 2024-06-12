### 概述

QString 是 Qt 中用于表示和操作 Unicode 字符串的类。它提供了丰富的方法来处理字符串。以下是一些常用的 QString 方法及其示例。



### 1. 创建和初始化

```cpp
QString str1("Hello, World!");
QString str2 = "Hello, Qt!";
QString str3 = QString::number(1234);
QString str4 = QString("Pi is approximately %1").arg(3.14);
```



### 2. 字符串长度和空检查

```cpp
int len = str1.length();  // 获取字符串长度
bool isEmpty = str1.isEmpty();  // 检查字符串是否为空
```



### 3. 字符访问

```cpp
QChar ch = str1.at(0);  // 获取第一个字符
```



### 4. 拼接字符串

```cpp
QString str5 = str1 + " " + str2;
```



### 5. 查找子字符串

```cpp
int index = str1.indexOf("World");  // 查找子字符串的位置
bool contains = str1.contains("World");  // 检查是否包含子字符串
```



### 6. 提取子字符串

```cpp
QString subStr = str1.mid(7, 5);  // 提取从第7个字符开始的5个字符的子字符串
QString leftStr = str1.left(5);  // 提取左边5个字符
QString rightStr = str1.right(6);  // 提取右边6个字符
```



### 7. 替换子字符串

```cpp
QString str6 = str1.replace("World", "Qt");
```



### 8. 去除空白字符

```cpp
QString str7 = "  Hello, Qt!  ";
QString trimmedStr = str7.trimmed();  // 去除两端的空白字符
QString simplifiedStr = str7.simplified();  // 去除多余的空白字符并将多个空白字符合并为一个空格
```



### 9. 大小写转换

```cpp
QString upperStr = str1.toUpper();  // 转换为大写
QString lowerStr = str1.toLower();  // 转换为小写
```



### 10. 转换为其他类型

```cpp
bool ok;
int num = str3.toInt(&ok);  // 转换为整数
double d = str4.toDouble(&ok);  // 转换为双精度浮点数
```



### 11. 格式化字符串

```cpp
QString formattedStr = QString("Name: %1, Age: %2").arg("John").arg(30);
```



### 12. 分割字符串

```cpp
QStringList list = str1.split(", ");  // 根据指定字符分割字符串
```



### 13. 操作字符数组

```cpp
const QChar *data = str1.constData();  // 获取指向字符数组的指针
```
