import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  title: "Wave Docs",
  description: "A VitePress Site",
  head: [['link', { rel: 'icon', href: '/icon.ico' }]],
  themeConfig: {
    logo: "/icon.png",
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: '使用文档', link: '/document' }
    // ],
    sidebar: [
      {
        text: "软件简介",
        items: [
          { text: "关于Wave", link: "/about" },
          { text: "安装使用", link: "/install" },
        ],
      },
      {
        text: "基础模块介绍",
        items: [
          { text: "银河模块", link: "/galxe" },
          { text: "脚本模块", link: "/script" },
          { text: "指纹浏览器模块", link: "/browser" },
          { text: "工具模块", link: "/tool" },
          { text: "代理管理", link: "/proxies" },
          { text: "设置", link: "/setting" },
        ],
      },
      {
        text: "项目说明",
        collapsed: false,
        items: [
          { text: "项目一", link: "/project/demo" }
        ],
      },
      {
        text: "帮助指南",
        items: [
          { text: "运行日志导出", link: "/help-log" },
          { text: "模版文件", link: "/help-template" },
          { text: "代理关联", link: "/help-proxy" },
          { text: "Gas计算", link: "/help-gas" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/3lang3/wave-desktop-release" },
      { icon: "twitter", link: "https://twitter.com/0x3lang" },
    ],
  },
});
