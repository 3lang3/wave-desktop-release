# Zealy 模块

:::info
zealy 登陆/注册需要解码服务, 请在设置页配置 `capSolverKey` 或 `yesCaptchaKey`, zealy 场景建议使用`capSolver`解码服务,成功率更高
:::

- 支持批量起号
- 自动绑定/更新社交账号
- 自动交互活动任务并领取奖励

![zealy](/zealy/overview.png)

## 模版文件

右侧区域，点击下载模版文件，填入对应字段信息，保存文件

### 导入模版字段说明

- `email` 邮箱, 格式为`邮箱:密码`，必填，注册登陆账号都是用的邮箱
- `address` 小狐狸钱包地址
- `privateKey` 小狐狸钱包私钥
- `twitterToken` 推特`token`，完成推特任务和绑定推特要用到
- `discordToken` `discord token`, 绑定`discord`要用到
- `code` 邀请码, 支持链接形式和值形式
- `proxy` 自定义代理

## 获取任务信息

复制任务链接, 填入顶部输入框, 点击确认按钮,支持输入邀请链接

> 例: https://zealy.io/cw/busai/questboard

> 例: https://zealy.io/cw/mantisbreakfree/questboard

> 例: https://zealy.io/cw/mantisbreakfree/invite/t369XzWPGZuvmqs6h-cez

![zealy detail](/zealy/detail.png)

## 注册账号

程序会尝试使用邮箱登陆账号，如果账号不存在，会自动注册账号，注册成功后会自动绑定社交账号(模版文件中填写了社交账号`token`)

> 设置表单中打开`更新推特`选项, 会强制更新推特绑定

> 设置表单中打开`更新dc`选项, 会强制更新`discord`绑定

## 完成任务

目前除了`discord`相关任务无法自动完成，其他任务都可以自动完成，部分任务需要**手动提供答案**

> zealy 任务是解锁制，需要按顺序完成

## 设置统一答案

左侧详情区域，任务下方可以设置答案，设置后所有账号都会使用这个答案提交

![zealy running](/zealy/custom_anwser.png)

> 任务有多问题时, 答案用`----`分隔(四个横杠), 例如[这个](https://zealy.io/cw/bevm/questboard/5d1f037c-df13-4bfe-93c2-b765f164a33d/00c4ded6-8a92-4c86-a0cb-17d799e554a3)

## 单独设置答案

支持给每个账号单独设置答案, 步骤如下:

- 点击任务名称后面的复制按钮,复制任务名称
- 在模版中新建一列, 填入任务名称, 此列下面填入对应答案即可

![zealy running](/zealy/custom_anwser2.png)

## 一个任务存在多个问题

- 任务有多问题时, 答案用`----`分隔(四个横杠), 例如[这个](https://zealy.io/cw/bevm/questboard/5d1f037c-df13-4bfe-93c2-b765f164a33d/00c4ded6-8a92-4c86-a0cb-17d799e554a3)
- 多问题中有可自动交互的问题可跳过, 只需要填写需要手动交互的问题答案即可, 例如[这个](https://zealy.io/cw/bevm/questboard/5d1f037c-df13-4bfe-93c2-b765f164a33d/08914226-4900-43f1-bfcf-1b7b52afd391)

## 需要上传文件/截图的任务

- 打开浏览器开发者工具, 切换到`network`选项卡
- 在对应任务中上传文件/截图，在`network`中找到对应请求(搜索`files`)
- `Preview`中的`url`内容就是我们需要的内容
- 复制`url`内容, 回到软件界面, 在对应任务下方输入框填入`url`即可,或者在模版中新建一列, 填入任务名称, 此列填入对应`url`即可

![zealy running](/zealy/file.jpg)

## 填写钱包地址

程序会自动判断需要什么类型的地址，根据软件提示在模版文件中新增对应列即可后填入地址即可

> 部分任务提示绑定`other`钱包地址, 模版新增的列就叫`other`, 请去`zealy`任务详情页面手动确定是哪种钱包
