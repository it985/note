import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

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
});
