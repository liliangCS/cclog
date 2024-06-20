### 概述

QVariant 是 Qt 框架中一个非常有用的类，它可以存储多种类型的数据，使得在不同类型的数据之间传递和处理变得更加方便。以下是关于 QVariant 的一些常见操作示例，包括创建、访问、转换和使用 QVariant。

### 一. 创建和初始化 QVariant

```cpp
#include <QCoreApplication>
#include <QVariant>
#include <QDebug>

int main(int argc, char *argv[]) {
    QCoreApplication a(argc, argv);

    // 使用不同类型的数据初始化 QVariant
    QVariant intVar(42);
    QVariant doubleVar(3.14);
    QVariant stringVar("Hello, QVariant!");
    QVariant boolVar(true);

    // 输出 QVariant 内容
    qDebug() << "Integer QVariant:" << intVar;
    qDebug() << "Double QVariant:" << doubleVar;
    qDebug() << "String QVariant:" << stringVar;
    qDebug() << "Boolean QVariant:" << boolVar;

    return a.exec();
}
```

### 二. 访问 QVariant 数据

```cpp
#include <QCoreApplication>
#include <QVariant>
#include <QDebug>

int main(int argc, char *argv[]) {
    QCoreApplication a(argc, argv);

    QVariant var(42);

    // 检查 QVariant 的类型
    if (var.type() == QVariant::Int) {
        qDebug() << "QVariant contains an int:" << var.toInt();
    }

    // 使用 toX() 方法转换 QVariant 数据类型
    int intValue = var.toInt();
    QString stringValue = var.toString();
    double doubleValue = var.toDouble();
    bool boolValue = var.toBool();

    qDebug() << "Integer value:" << intValue;
    qDebug() << "String value:" << stringValue;
    qDebug() << "Double value:" << doubleValue;
    qDebug() << "Boolean value:" << boolValue;

    return a.exec();
}
```

### 三. QVariant 和复杂数据类型

你可以将复杂的数据类型存储在 QVariant 中，例如 QList、QMap 或用户自定义类型。

**存储和访问 QList**

```cpp
#include <QCoreApplication>
#include <QVariant>
#include <QList>
#include <QDebug>

int main(int argc, char *argv[]) {
    QCoreApplication a(argc, argv);

    QList<QVariant> list;
    list << 1 << 2 << 3 << "four";

    QVariant var(list);

    // 获取 QList<QVariant> 数据
    QList<QVariant> retrievedList = var.toList();

    for (const QVariant &item : retrievedList) {
        qDebug() << item;
    }

    return a.exec();
}
```

**存储和访问 QMap**

```cpp
#include <QCoreApplication>
#include <QVariant>
#include <QMap>
#include <QDebug>

int main(int argc, char *argv[]) {
    QCoreApplication a(argc, argv);

    QMap<QString, QVariant> map;
    map["name"] = "John";
    map["age"] = 30;

    QVariant var(map);

    // 获取 QMap<QString, QVariant> 数据
    QMap<QString, QVariant> retrievedMap = var.toMap();

    for (auto it = retrievedMap.begin(); it != retrievedMap.end(); ++it) {
        qDebug() << it.key() << ":" << it.value();
    }

    return a.exec();
}
```

### 四. 自定义类型的 QVariant 支持

你可以将用户自定义类型存储在 QVariant 中，但需要先注册该类型。

```cpp
#include <QCoreApplication>
#include <QVariant>
#include <QMetaType>
#include <QDebug>

// 自定义类型
struct MyType {
    int id;
    QString name;
};

Q_DECLARE_METATYPE(MyType)

int main(int argc, char *argv[]) {
    QCoreApplication a(argc, argv);

    // 注册自定义类型
    qRegisterMetaType<MyType>("MyType");

    // 使用 QVariant 存储自定义类型
    MyType myType = {1, "Custom Type"};
    QVariant var;
    var.setValue(myType);

    // 从 QVariant 获取自定义类型数据
    if (var.canConvert<MyType>()) {
        MyType retrievedType = var.value<MyType>();
        qDebug() << "ID:" << retrievedType.id << ", Name:" << retrievedType.name;
    }

    return a.exec();
}
```
