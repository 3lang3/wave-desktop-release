# Morphl2 测试网交互

![Morphl2测试网](../assets/project/morphl2/morphl2.png)

## 任务说明

### 领水(holeskyEth)

领水要求:

- 1.钱包主网需要有 0.001ETH(QuickNode 要求)
- 2.设置 yesCaptchaKey; (领水接口打码服务)

QuickNode 领水服务不稳定,批量前先单号测试

> 领不到水的话, 也可以用空投代币的形式分发 eth, 这种方式只需要一个钱包有足够余额即可

### 跨链

跨链到 MorphHolesky(20 分钟左右到达), 高并发场景建议使用付费 rpc

支持区间随机输入, 例如: 0.05-0.1

> 建议参数: 并发数: 10, 报错重试: 2, 队列重复: 2

### ✨[无需余额]每日签到

包含签到, 开盲盒, 随机投票给前 5 个项目三个交互

> 建议参数: 并发数: 20, 报错重试: 2, 队列重复: 3, 每 100 个账号大概需要 10 分钟

## 空投 holeskyEth

进入 `实用工具` -> `代币分发` 页面, 一次建议不超过`500`个账号, 同个`rpc`下面只会部署一次空投合约

### 按需配置参数

- `代币地址`: 此处需要分发的是`Gas`币, 
- `分发金额`: 默认分发金额, 如果模版文件内填写了`amount`, 则使用模版文件内的金额

![Initia测试网](../assets/project/morphl2/airdrop_config.png)

成功输出日志, 参考下图
![Initia测试网](../assets/project/morphl2/airdrop_console.png)
