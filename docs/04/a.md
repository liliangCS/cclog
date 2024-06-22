### 概述

单例模式确保一个类只有一个实例，并提供全局访问点。

### 代码示例

```cpp
class Singleton {
public:
    static Singleton& getInstance() {
        static Singleton instance; // Guaranteed to be destroyed and instantiated on first use
        return instance;
    }

private:
    Singleton() {} // Constructor is private

    // C++ 11
    // We can use the better technique of deleting the methods
    // we don't want.
    Singleton(Singleton const&) = delete;
    void operator=(Singleton const&) = delete;
};
```
