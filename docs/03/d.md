### 概述

Qt 提供了多种文件对话框，用于在应用程序中打开、保存文件或选择目录。这些对话框主要通过 QFileDialog 类实现。以下是一些常用的示例和基本用法。



### 打开文件对话框

要创建一个打开文件对话框，可以使用 QFileDialog::getOpenFileName 方法。这是一个静态方法，不需要创建 QFileDialog 对象即可使用。

```cpp
#include <QApplication>
#include <QFileDialog>
#include <QMessageBox>

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    QString fileName = QFileDialog::getOpenFileName(nullptr, "Open File", "", "All Files (*);;Text Files (*.txt)");
    if (!fileName.isEmpty()) {
        QMessageBox::information(nullptr, "File Name", "You selected: " + fileName);
    }

    return app.exec();
}
```



### 保存文件对话框

要创建一个保存文件对话框，可以使用 QFileDialog::getSaveFileName 方法。

```cpp
#include <QApplication>
#include <QFileDialog>
#include <QMessageBox>

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    QString fileName = QFileDialog::getSaveFileName(nullptr, "Save File", "", "All Files (*);;Text Files (*.txt)");
    if (!fileName.isEmpty()) {
        QMessageBox::information(nullptr, "File Name", "You saved to: " + fileName);
    }

    return app.exec();
}
```



### 选择目录对话框

要创建一个选择目录对话框，可以使用 QFileDialog::getExistingDirectory 方法。

```cpp
#include <QApplication>
#include <QFileDialog>
#include <QMessageBox>

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    QString dirName = QFileDialog::getExistingDirectory(nullptr, "Select Directory", "");
    if (!dirName.isEmpty()) {
        QMessageBox::information(nullptr, "Directory Name", "You selected: " + dirName);
    }

    return app.exec();
}
```



### 自定义文件对话框

除了上述静态方法，你还可以创建一个 QFileDialog 对象，并通过设置其属性来自定义对话框的行为。例如，设置多个文件选择、过滤文件类型等。

```cpp
#include <QApplication>
#include <QFileDialog>
#include <QMessageBox>

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    QFileDialog dialog;
    dialog.setFileMode(QFileDialog::ExistingFiles);
    dialog.setNameFilter("Images (*.png *.xpm *.jpg)");
    dialog.setViewMode(QFileDialog::Detail);

    if (dialog.exec()) {
        QStringList fileNames = dialog.selectedFiles();
        QString message = "You selected:\n";
        for (const QString &fileName : fileNames) {
            message += fileName + "\n";
        }
        QMessageBox::information(nullptr, "File Names", message);
    }

    return app.exec();
}
```