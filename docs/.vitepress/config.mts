import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "编程猫の学習日志",
  themeConfig: {
    sidebar: [
      {
        text: "01 系统编程",
        items: [
          { text: "a. 文件IO", link: "/01/a" },
          { text: "b. 标准IO", link: "/01/b" },
          { text: "c. 文件系统", link: "/01/c" }
        ]
      },
      {
        text: "02 多线程编程",
        items: [
          { text: "a. 进程概述", link: "/02/a" },
          { text: "b. 线程概述", link: "/02/b" }
        ]
      },
      {
        text: "03 Qt基础",
        items: [
          { text: "a. QString类", link: "/03/a" },
          { text: "b. MOC", link: "/03/b" },
          { text: "c. 信号槽两种写法对比", link: "/03/c" },
          { text: "d. 文件对话框用法", link: "/03/d"},
          { text: "e. Qt操作JSON数据", link: "/03/e"},
          { text: "f. QVariant类", link: "/03/f" },
          { text: "g. QList类", link: "03/g" },
          { text: "h. QSignalMapper类", link: "03/h" }
        ]
      }
    ]
  }
});
