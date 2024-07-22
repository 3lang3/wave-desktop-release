# 本地转发服务

## 这是什么

针对`electron`无法集成`cycletls`包的回退方案, 部分`脚本自动化`任务需要用到此服务, 例如[冒险岛](https://msu.io/), 需要用户手动开启服务

> 用来解决 cloudfare`ja3`指纹识别问题，通过`cycletls`包实现转发代理模拟真实指纹变化，从而绕过指纹识别

## 使用

### 安装 node

先安装`node`, 👉[node 官网](https://nodejs.org/zh-cn/)

### 一键开启服务

[下载源码](https://github.com/3lang3/cycletls-server/archive/refs/heads/main.zip)解压，进入项目目录

- `win`系统: 双击`start.bat`即可
- `mac`系统: **项目目录**下执行`sh start.sh`即可

```bash
# 成功启动后，会输出如下信息, 任务结束前, 不要关闭窗口
✨ CycletlsAPIServer running on http://localhost:33333
```

如果一键开启失败，请使用下面手动开启服务 👇

### 手动开启服务

[下载源码](https://github.com/3lang3/cycletls-server/archive/refs/heads/main.zip)解压，进入项目目录，执行如下命令

```bash
npm i -g yarn tyarn
tyarn
npm start
```
