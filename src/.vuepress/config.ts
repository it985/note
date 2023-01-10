import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog"; //提供自动目录页生成
import { commentPlugin } from "vuepress-plugin-comment2";//评论与阅读量插件
export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "云少的私人笔记",
      description: "云少的私人笔记",
    },
  },

  theme,

  shouldPrefetch: false,

  plugins: [

    //https://vuepress-theme-hope.github.io/v2/auto-catalog/zh/
    autoCatalogPlugin({
      //插件选项
    }),

    //https://vuepress-theme-hope.github.io/v2/comment/zh/
    commentPlugin({
      // 插件选项
    }),
  ],
});
