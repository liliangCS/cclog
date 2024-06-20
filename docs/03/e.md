### 概述

在 Qt 中，操作 JSON 数据可以使用 QJsonDocument、QJsonObject 和 QJsonArray 等类。以下是一些常见的操作示例，包括解析、创建、访问和修改 JSON 数据。

### 解析 JSON 数据

假设你有一个包含 JSON 数据的字符串：

```cpp
#include <QCoreApplication>
#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonArray>
#include <QJsonValue>
#include <QDebug>

int main(int argc, char *argv[]) {
    QCoreApplication a(argc, argv);

    // JSON字符串
    QString jsonString = R"({"name": "John", "age": 30, "isStudent": false, "skills": ["C++", "Qt", "JSON"]})";

    // 解析JSON字符串
    QJsonDocument jsonDoc = QJsonDocument::fromJson(jsonString.toUtf8());

    // 检查解析是否成功
    if (jsonDoc.isNull() || !jsonDoc.isObject()) {
        qDebug() << "Failed to parse JSON.";
        return -1;
    }

    // 获取根对象
    QJsonObject jsonObj = jsonDoc.object();

    // 访问数据
    QString name = jsonObj["name"].toString();
    int age = jsonObj["age"].toInt();
    bool isStudent = jsonObj["isStudent"].toBool();
    QJsonArray skills = jsonObj["skills"].toArray();

    // 输出数据
    qDebug() << "Name:" << name;
    qDebug() << "Age:" << age;
    qDebug() << "Is Student:" << isStudent;
    qDebug() << "Skills:";

    for (const QJsonValue &skill : skills) {
        qDebug() << skill.toString();
    }

    return a.exec();
}
```

### 创建 JSON 数据

你可以使用 QJsonObject 和 QJsonArray 来创建 JSON 数据，然后转换为 QJsonDocument：

```cpp
#include <QCoreApplication>
#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonArray>
#include <QJsonValue>
#include <QDebug>

int main(int argc, char *argv[]) {
    QCoreApplication a(argc, argv);

    // 创建JSON对象
    QJsonObject jsonObj;
    jsonObj["name"] = "John";
    jsonObj["age"] = 30;
    jsonObj["isStudent"] = false;

    // 创建JSON数组
    QJsonArray skills;
    skills.append("C++");
    skills.append("Qt");
    skills.append("JSON");

    // 添加数组到对象
    jsonObj["skills"] = skills;

    // 创建JSON文档
    QJsonDocument jsonDoc(jsonObj);

    // 转换为字符串
    QString jsonString = jsonDoc.toJson(QJsonDocument::Compact);

    // 输出JSON字符串
    qDebug() << jsonString;

    return a.exec();
}
```

### 访问和修改 JSON 数据

你可以通过 QJsonObject 和 QJsonArray 访问和修改 JSON 数据：

```cpp
#include <QCoreApplication>
#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonArray>
#include <QJsonValue>
#include <QDebug>

int main(int argc, char *argv[]) {
    QCoreApplication a(argc, argv);

    // JSON字符串
    QString jsonString = R"({"name": "John", "age": 30, "isStudent": false, "skills": ["C++", "Qt", "JSON"]})";

    // 解析JSON字符串
    QJsonDocument jsonDoc = QJsonDocument::fromJson(jsonString.toUtf8());

    // 获取根对象
    QJsonObject jsonObj = jsonDoc.object();

    // 修改数据
    jsonObj["age"] = 31; // 修改年龄
    QJsonArray skills = jsonObj["skills"].toArray();
    skills.append("Python"); // 添加新技能
    jsonObj["skills"] = skills;

    // 创建新的JSON文档
    QJsonDocument newJsonDoc(jsonObj);

    // 转换为字符串
    QString newJsonString = newJsonDoc.toJson(QJsonDocument::Compact);

    // 输出修改后的JSON字符串
    qDebug() << newJsonString;

    return a.exec();
}
```
