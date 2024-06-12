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
        items: [{ text: "a. QString类", link: "/03/a" }]
      }
    ]
  }
});
