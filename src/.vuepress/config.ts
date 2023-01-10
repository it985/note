import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog"; //提供自动目录页生成
import { commentPlugin } from "vuepress-plugin-comment2";//评论与阅读量插件
import { componentsPlugin } from "vuepress-plugin-components";//面向 VuePress2 的常用组件
import { copyCodePlugin } from "vuepress-plugin-copy-code2";//为 VuePress2 提供代码块一键复制
import { pwaPlugin } from "vuepress-plugin-pwa2";//渐进式网页应用 (Progressive Web App) 支持
import { seoPlugin } from "vuepress-plugin-seo2";//站点的全面 SEO 增强
import { sitemapPlugin } from "vuepress-plugin-sitemap2"; //VuePress2 的 Sitemap 生成
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
    
    // https://vuepress-theme-hope.github.io/v2/components/zh/
    componentsPlugin({
      // 插件选项
    }),

    // https://vuepress-theme-hope.github.io/v2/copy-code/zh/
    copyCodePlugin({
      // 插件选项
    }),

    // https://vuepress-theme-hope.github.io/v2/pwa/zh/
    pwaPlugin({
      // 你的选项
    }),

    //https://vuepress-theme-hope.github.io/v2/seo/zh/
    // seoPlugin({
    //   // 你的选项
    // }),

    // https://vuepress-theme-hope.github.io/v2/sitemap/zh/
    // sitemapPlugin({
    //   // 配置选项
    // }),
  ],
});
