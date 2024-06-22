### 概述

MVC 是一种软件架构模式，用于实现用户界面、业务逻辑和数据模型的分离。

### 组成部分

**Model（模型）**：负责应用程序的数据和业务逻辑。它直接管理数据、逻辑和规则。

**View（视图）**：负责显示数据（模型）并接收用户输入。视图从模型获取数据并显示出来。

**Controller（控制器）**：负责将用户输入转化为模型的操作。控制器接收用户输入，处理用户请求，然后更新模型和视图。

### 工作流程

1. 用户通过视图发送请求（例如点击按钮）。
2. 控制器接收请求，处理业务逻辑。
3. 控制器更新模型。
4. 模型改变通知视图，视图更新显示。

### 示例代码

以下是一个简单的 MVC 模式示例：

```cpp
// Model
class Model {
public:
    int data;
    int getData() const { return data; }
    void setData(int value) { data = value; }
};

// View
class View {
public:
    void displayData(int data) {
        std::cout << "Data: " << data << std::endl;
    }
};

// Controller
class Controller {
private:
    Model& model;
    View& view;
public:
    Controller(Model& m, View& v) : model(m), view(v) {}
    void setData(int value) {
        model.setData(value);
        view.displayData(model.getData());
    }
};

int main() {
    Model model;
    View view;
    Controller controller(model, view);

    controller.setData(42);

    return 0;
}
```
