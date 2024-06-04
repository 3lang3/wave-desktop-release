# Fuel 测试网交互

![Fuel](/project/fuel/fuel.png)

## 交互说明

### 创建钱包

右侧设置区域底部可以批量创建钱包, 一次最多创建`1000`个

### 领水(FuelEth)

设置`noCaptchaKey`或者`yesCaptchaKey`(领水接口打码服务), 单次`0.002eth`, 每`24`小时可以领取一次

> 建议参数: 并发数: 10, 报错重试: 2, 队列重复: 3

### 跨链

需要在模版文件中配置`evmPrivateKey`, 将`eth`跨链到 `Fuel`链(20 分钟左右到达), 高并发场景建议使用`付费RPC节点`

支持区间随机输入, 例如: `0.05-0.1`

> 建议参数: 并发数: 5, 报错重试: 2, 队列重复: 2

## 嫌领水太少可以使用空投方案

### 空投方案

大号钱包在`Sepolia`上空投`eth`到各个小号, 空投完成后, 小号再跨链到`Fule`

### 操作步骤

进入 `实用工具` -> `代币分发` 页面, 一次建议不超过`500`个账号, 同个`rpc`下面只会部署一次空投合约

### 按需配置参数

- `代币地址`: 此处需要分发的是`Gas`币,不需要填写
- `分发金额`: 默认分发金额, 如果模版文件内填写了`amount`, 则使用模版文件内的金额

![airdrop_config](/project/morphl2/airdrop_config.png)

成功输出日志, 参考下图
![airdrop_console](/project/morphl2/airdrop_console.png)
