import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  title: "Wave",
  description: "简单易用的自动化桌面软件",
  head: [
    ["link", { rel: "icon", href: "/icon.ico" }],
    ["meta", { name: "author", content: "0x3lang" }],
    [
      "meta",
      {
        name: "keywords",
        content: "web3, 撸毛, 自动化交互, galxe交互, 指纹浏览器自动化",
      },
    ],
  ],
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
          { text: "什么是Wave?", link: "/about" },
          { text: "安装", link: "/install" },
          { text: "基础使用", link: "/start" },
          { text: "代理设置", link: "/proxies" },
        ],
      },
      {
        text: "基础模块介绍",
        items: [
          { text: "银河模块", link: "/galxe" },
          { text: "脚本模块", link: "/script" },
          { text: "指纹浏览器模块", link: "/browser" },
          { text: "工具模块", link: "/tool" },
          { text: "zealy模块", link: "/zealy" },
          { text: "discord加群", link: "/discord-join" },
          { text: "设置", link: "/setting" },
        ],
      },
      {
        text: "项目介绍",
        collapsed: false,
        items: [
          { text: "Initia测试网", link: "/project/initia" },
          { text: "MorphL2测试网", link: "/project/morphl2" },
          { text: "Fuel测试网", link: "/project/fuel" },
        ],
      },
      {
        text: "帮助指南",
        items: [
          { text: "常见问题", link: "/help-faq" },
          { text: "软件更新", link: "/help-upgrade" },
          { text: "自定义解码服务", link: "/help-custom-captcha" },
          { text: "运行日志导出", link: "/help-log" },
          { text: "模版文件", link: "/help-template" },
          { text: "代理关联", link: "/help-proxy" },
          { text: "Gas计算", link: "/help-gas" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/3lang3/wave-desktop-release",
      },
      { icon: "twitter", link: "https://x.com/Wave_Tool" },
    ],
  },
});
