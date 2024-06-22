### 概述

QSignalMapper 是 Qt 提供的一个实用工具类，用于将多个信号映射到一个槽中。它在需要处理来自多个发射源的信号时非常有用，尤其是在信号发射源数量动态变化的情况下。QSignalMapper 通过将发射源关联到一个唯一的标识符来实现信号和槽的映射。

### QSignalMapper 的工作原理

1. 创建和设置信号映射器：创建一个 QSignalMapper 对象，并使用 setMapping 方法将发射源（通常是 QObject 类型）与一个标识符（可以是整数、字符串、QWidget\* 等）关联。

2. 连接信号和槽：将信号源的信号连接到 QSignalMapper 的 map 槽上，然后将 QSignalMapper 的 mapped 信号连接到实际的槽函数上。

3. 发射信号：当信号源发射信号时，QSignalMapper 会将信号源映射到相应的标识符，并发射 mapped 信号，同时传递该标识符。

### 示例代码

以下示例展示了如何使用 QSignalMapper 处理多个按钮的点击事件，并通过映射器将它们的点击信号映射到一个槽中：

```cpp
#include <QApplication>
#include <QPushButton>
#include <QSignalMapper>
#include <QVBoxLayout>
#include <QWidget>
#include <QDebug>

class Window : public QWidget {
    Q_OBJECT

public:
    Window(QWidget *parent = nullptr) : QWidget(parent) {
        QVBoxLayout *layout = new QVBoxLayout(this);

        QSignalMapper *signalMapper = new QSignalMapper(this);

        for (int i = 0; i < 5; ++i) {
            QPushButton *button = new QPushButton(QString("Button %1").arg(i), this);
            layout->addWidget(button);

            connect(button, SIGNAL(clicked()), signalMapper, SLOT(map()));
            signalMapper->setMapping(button, i);
        }

        connect(signalMapper, SIGNAL(mapped(int)), this, SLOT(buttonClicked(int)));
    }

public slots:
    void buttonClicked(int id) {
        qDebug() << "Button clicked, id:" << id;
    }
};

int main(int argc, char *argv[]) {
    QApplication app(argc, argv);

    Window window;
    window.show();

    return app.exec();
}
```
