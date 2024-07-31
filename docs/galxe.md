# 银河通用模块

Wave 银河模块支持自动完成银河活动任务，自动领取奖励, 关注推特, 加入 Discord, 支持指纹浏览器自动化。

> 支持活动组形式, 例如 https://app.galxe.com/quest/layern/GCNiKth8dZ, 一次完成多个活动

![galxe](/ss/wave-galxe.png)

## 模版文件

右侧区域，点击下载模版文件，填入对应字段信息，保存文件

### 导入模版字段说明

- `address` 钱包地址
- `privateKey` 钱包私钥
- `twitterToken` 推特 token
- `proxy` 代理地址
- `survey` 问卷答案, 一行一个, 多个答案换行分隔
- `bindBitcoin` 绑定btc地址, 支持`私钥`和`助记词`格式, 执行`通过`交互时自动绑定
- `bindBitcoinSignet` 绑定btc测试网地址, 支持`私钥`和`助记词`格式, 执行`通过`交互时自动绑定
- `bindSui` 绑定sui地址, 支持`私钥`和`助记词`格式, 执行`通过`交互时自动绑定
- `bindAptos` 绑定aptos和movementAptos地址, 支持`私钥`和`助记词`格式, 执行`通过`交互时自动绑定

## 获取任务信息

复制银河任务链接, 填入顶部输入框, 点击确认按钮

> 例: https://app.galxe.com/quest/Bitlayer/GCgb9th3NC

## 完成任务

可以自动完成部分类型的任务，例如: 推特任务(弱校验), 浏览页面, 答题, 观看 youtube, 关注 space 等

### 强校验的推特任务

wave 支持以下两种方式完成推特强校验任务

- 在模版文件的 `twitterToken` 字段填入推特的 token(建议同时填入 proxy 字段, 减少推特风控风险)
- 使用指纹浏览器模块自动化完成

#### 步骤

- 加载任务信息后，右侧表单区域选择**通过**类型
- 导入刚刚保存的模版文件
- [可选]设置适当的队列属性
- 点击运行按钮

![查看任务运行状态](/ss/wave-galxe-running.png)

## 验证任务

那些无法自动完成的任务，手动完成后, 需要一个个点击任务验证按钮, 颇为繁琐, 使用 wave 可以一键验证所有任务

- 右侧表单区域选择**验证**类型

## Claim 奖励

- 右侧表单区域选择**领取**类型
- 支持领取积分和 OAT 奖励(链上nft奖励)

> 支持活动组形式, 例如 https://app.galxe.com/quest/layern/GCNiKth8dZ, 一次Claim多个活动
