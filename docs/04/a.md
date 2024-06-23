### 概述

单例模式（Singleton Pattern）是一种设计模式，确保一个类只有一个实例，并提供一个全局访问点。在其实现中最常见的是使用懒汉式和饿汉式。

### 饿汉式单例模式

饿汉式单例在类加载时就初始化单例对象，线程安全，且实现简单。缺点是如果单例未使用，会浪费资源。

```cpp
class Singleton {
private:
    static Singleton* instance;

    // 私有构造函数，防止外部实例化
    Singleton() {}

public:
    // 删除拷贝构造函数和赋值操作符，防止拷贝实例
    Singleton(const Singleton&) = delete;
    Singleton& operator=(const Singleton&) = delete;

    static Singleton* getInstance() {
        return instance;
    }
};

// 在类外初始化静态成员变量
Singleton* Singleton::instance = new Singleton();
```

### 懒汉式单例模式

懒汉式单例在第一次调用时才初始化对象，节约资源。需要注意线程安全问题。

**1. 线程不安全版**

```cpp
class Singleton {
private:
    static Singleton* instance;

    // 私有构造函数，防止外部实例化
    Singleton() {}

public:
    // 删除拷贝构造函数和赋值操作符，防止拷贝实例
    Singleton(const Singleton&) = delete;
    Singleton& operator=(const Singleton&) = delete;

    static Singleton* getInstance() {
        if (instance == nullptr) {
            instance = new Singleton();
        }
        return instance;
    }
};

// 在类外初始化静态成员变量
Singleton* Singleton::instance = nullptr;
```

**2. 线程安全版（双重检查锁定）**

```cpp
#include <mutex>

class Singleton {
private:
    static Singleton* instance;
    static std::mutex mutex;

    // 私有构造函数，防止外部实例化
    Singleton() {}

public:
    // 删除拷贝构造函数和赋值操作符，防止拷贝实例
    Singleton(const Singleton&) = delete;
    Singleton& operator=(const Singleton&) = delete;

    static Singleton* getInstance() {
        if (instance == nullptr) {
            std::lock_guard<std::mutex> lock(mutex);
            if (instance == nullptr) {
                instance = new Singleton();
            }
        }
        return instance;
    }
};

// 在类外初始化静态成员变量
Singleton* Singleton::instance = nullptr;
std::mutex Singleton::mutex;
```

**3. 使用 C++11 的线程安全版本**

C++11 引入了线程安全的静态局部变量初始化，可以用来简化单例模式的实现。

```cpp
class Singleton {
private:
    // 私有构造函数，防止外部实例化
    Singleton() {}

public:
    // 删除拷贝构造函数和赋值操作符，防止拷贝实例
    Singleton(const Singleton&) = delete;
    Singleton& operator=(const Singleton&) = delete;

    static Singleton& getInstance() {
        static Singleton instance;
        return instance;
    }
};
```

### 总结

单例模式在 C++中的实现有多种方法，选择哪种方式取决于具体的使用场景和对线程安全的需求。饿汉式实现简单且线程安全，适用于资源消耗不大或确定会使用的单例对象。懒汉式节约资源，但需要处理好线程安全问题。C++11 之后的静态局部变量初始化是推荐的简洁且线程安全的实现方式。
