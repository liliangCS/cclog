import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "编程猫の学習日志",
  themeConfig: {
    sidebar: [
      {
        text: "01 系统编程",
        items: [{ text: "a. 文件IO", link: "/01/a" }]
      },
      {
        text: "02 网络编程",
        items: [{ text: "a. socket套接字", link: "/02/a" }]
      }
    ]
  }
});
