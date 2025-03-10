# 常见问题

## 任务缓存

`wave`会在本地保存任务交互成功的数据, 同一个任务默认不会再次执行, 这是为了避免批量执行任务时重复执行的问题, 可以通过设置`缓存超时`字段, 来强制执行任务。

### 缓存超时说明

`缓存超时`代表在`X`小时后可忽略缓存再次执行任务。

场景说明:

- 在`2024年1月1日8点30分`成功执行了`A`任务, 想要再次执行`A`任务,会输出`已完成,忽略`
- 在`2024年1月1日18点30分`设置`缓存超时`为`8`后可再次执行`A`任务，因为`2024年1月1日8点30分`+`8`小时 = `2024年1月1日16点30分`，缓存已过期。

> 日常任务中, 第一天执行成功后, 第二天想要再次执行, 可以通过设置适当的`缓存超时`来再次执行。

## 代理问题

### 代理管理模块

::: tip
一定不要填错代理格式，错误的代理格式将导致后续所有请求都无法正常访问
:::

支持的导入格式是`地址:端口`或者`地址:端口:用户名:密码`和`地址:端口:用户名:密码:协议`, 协议类型`http`、`socks`、`socks5`，默认为`http`

#### 白名单

代理无法连通的情况下检查是否在服务商后台开启白名单, **建议不开**, 降低问题排查难度

#### 动态代理

支持动态代理, 同样确保格式正确(同上), 暂不支持链接！

> 目前测试通过的有`ipidea.net`, 其他的自己先试试, 不行的话在群里反馈

#### 并发太高导致请求大面积失效

- 请降低并发数, 一般建议`10`以下

###

## 网络问题

::: tip
绝大部分网络问题都是代理和本机梯子软件设置问题，请仔细检查[本机代理 🪜 软件设置](#本机代理-🪜-软件设置)和[代理管理模块](#代理管理模块)
:::

### socket hang up 错误

`socket hang up`请求耗时过长而导致的, 一般是代理网络不稳定导致的

<img src="./assets/faq/socket_hangup.png" width="400" />

### request timeout xxxxms 错误

`timeout`请求超时, 一般是目标网站响应慢、代理网络不稳定等原因

<img src="./assets/faq/request_timeout.png" width="400" />

<img src="./assets/faq/timeout_2.png" width="400" />

### Unexpected xxxx 错误

`Unexpected xxxx is not vail JSON`请求结果格式不正确, 有可能是项目方在中途换了接口, 如果**大面积出现请联系管理员**排查

<img src="./assets/faq/unexpected_json.png" width="400" />

### Read ECONNRESET 错误

`Read ECONNRESET`请求被目标服务器重置或者客户端超时断开, 一般是网络不稳定导致的, 也有可能是代理`IP`中断链接

<img src="./assets/faq/request_read.png" width="400" />

### TLS connection 错误

`TLS connection`请确保代理软件已经开启`TUN Mode`或`增强模式`, 也可以尝试切换网络环境或者重启代理软件

<img src="./assets/faq/tls_error.png" width="400" />

### Request faild with status code 429

`429`是请求频率过高导致的, 多切换几次`IP`, 降低并发数后再试, 建议`10`以下

<img src="./assets/faq/r_429.png" width="400" />

### Request faild with status code 403

`403`是请求被拒绝, 一般是代理`IP`被封, 请更换`IP`后再试, 多尝试几次

<img src="./assets/faq/r_403.png" width="400" />

### Parse Error: Invalid header toker

代理拒绝访问, 请检查代理是否正确, 一般是代理格式错误，或者代理服务那边白名单没正确配置

<img src="./assets/faq/proxy_invalid_header.png" width="400" />

## 本机代理 🪜 软件设置

::: warning
对`Clash`不熟悉的建议直接使用`快连VPN`
:::

### `Mac`用户请确保`ClashX`已经启动, 并且开启增强模式

<img src="./assets/faq/mac_clash_enhance.png" width="300" />

### `Clash for Windows`需要打开`TUN Mode`

> 启用`TUN Mode`需要先安装`Service Mode`, 如开启后依然无法使用, 请尝试去设置中开启`Lightweight Mode`

`Service Mode`旁边地球标志为绿色即为开启成功

<img src="./assets/other/clash_1.png" width="450" />

`Lightweight Mode`开启示意图

<img src="./assets/other/clash_2.png" width="450" />

## 推特 Discord 风控问题

- 代理质量: 一些代理商的`ip`已经烂完了，点名`webshare`, 推特相关协议操作时千万不要用这个代理，秒封(上一秒关注,下一秒封口)，想要长期养好的朋友一定要找到`高质量的代理`商
- 账号行为可能也会导致风控，比如推特只关注,点赞,转发等, Dc 短时间加入多个服务器等都会触发风控,导致账号被封或者`token`失效

> 推特风控很严, 新号老号都有可能被封, dc 新号一定不要随意变换代理`IP`不然`token`铁定失效, 一句话, 高质量的代理是稳定不被风控的关键

## 安装问题

### Mac 提示无法打开

- 部分`Mac`用户安装时可能会遇到无法打开的问题, 这是因为`Mac`系统对于未知来源的应用有安全限制, 需要前往设置手动打开

<img src="./assets/faq/mac_install_alert.png" width="200" />

### Windows 用户提示

- `Windows`系统对于装机量少的软件有未知来源的应用有安全限制, 直接点击运行即可

<img src="./assets/faq/win_install_alert.png" width="320" />

## 软件卸载

### Mac 卸载

直接删除`应用程序`目录下的`wave`即可

### Windows 卸载

右键图标, 选择打开文件所在位置, 双击`Uninstall.exe`即可卸载

## 软件异常导致的关闭问题

`windows`下软件关闭异常, 请尝试打开任务管理器, 结束`wave`进程, 不然会导致软件无法正常使用

> 也可以尝试使用管理员权限运行软件

异常关闭:

- 在运行任务的时候, 直接关闭软件窗口, 正确操作应该点击`终止队列`按钮后再关闭
- 插件热更新失败
- 软件更新下载失败

## 设置页、代理管理中的数据消失

一般发生在`windows`下, 非正常关闭软件, 导致`wave`进程无法正常关闭, 再次打开软件会出现数据消失的情况.

> 解决办法: 打开进程管理器，把`wave`进程杀掉，再次打开软件即可

## 插件更新失败提示

由于网络波动等原因导致插件更新失败, 会弹窗提示重启软件, 重启后再次尝试即可, `windows`可能出现进程关闭失败的情况, 可以参考上面的解决办法

## 任务队列异常

队列无法中断, 异常结束等情况可以尝试重启软件再试, 依然不行的话, 群里联系`Dev`

## 登陆设备限制

::: warning
WAVE 任务数据和设置数据都是保存在设备本地的, 解绑后登陆新设备不会同步数据
:::

目前只支持单设备使用, 需要更换登录设备的, 请联系管理员

## discord 加群失败

出现大面积`Unknow Message`时, 请检查以下几点:

- `hcapcha`更新了验证图片`noCaptcha`还未及时更新导致的, 只能等待`noCaptcha`更新或者去它官网找客服
- `IP代理`质量太差，短时间大量账号加群被`discord`标记，换个`IP`稍等后再试

## 项目领水

- 一般领水都需要打码服务, 在设置页填好对应打码服务的`ApiKey`
- 有的领水还会限制`IP`，短时间内一个`IP`领水只能领一次, 建议购买`代理IP`,在代理管理页中导入, 代码会随机选择`IP`领水
- 大部分项目领完水需要等待一段时间才会发放到账，请耐心等待
