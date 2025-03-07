# 自定义解码服务接口

::: warning
请在`设置-解码-自定义解码`中添加你的 `api 地址`
:::

## 接口规范

### wave请求方式

- 统一使用`POST`请求

> 请注意：`Content-Type` 为 `application/json`

#### cf5秒盾参数

| 参数名     | 类型   | 必填 | 说明     |
| ---------- | ------ | ---- | -------- |
| type       | string | 是   | `cf5s`   |
| websiteUrl | string | 是   | 目标网站 |
| proxy      | string | 是   | 代理     |

#### cftoken参数

| 参数名     | 类型   | 必填 | 说明                          |
| ---------- | ------ | ---- | ----------------------------- |
| type       | string | 是   | `cftoken`                     |
| websiteUrl | string | 是   | 目标网站                      |
| websiteKey | string | 是   | 目标网站的 `cf turnstile key` |

#### recaptchaV2参数

| 参数名     | 类型   | 必填 | 说明                       |
| ---------- | ------ | ---- | -------------------------- |
| type       | string | 是   | `recaptchaV2`              |
| websiteUrl | string | 是   | 目标网站                   |
| websiteKey | string | 是   | 目标网站的 `recaptcha key` |

#### recaptchaV3参数

| 参数名     | 类型   | 必填 | 说明                          |
| ---------- | ------ | ---- | ----------------------------- |
| type       | string | 是   | `recaptchaV3`                 |
| websiteUrl | string | 是   | 目标网站                      |
| websiteKey | string | 是   | 目标网站的 `recaptcha key`    |
| pageAction | string | 是   | 目标网站的 `recaptcha action` |

#### hcaptcha参数

| 参数名     | 类型   | 必填 | 说明                      |
| ---------- | ------ | ---- | ------------------------- |
| type       | string | 是   | `hcaptcha`                |
| websiteUrl | string | 是   | 目标网站                  |
| websiteKey | string | 是   | 目标网站的 `hcaptcha key` |
| proxy      | string | 否   | 代理                      |

#### vercel盾参数

| 参数名     | 类型   | 必填 | 说明     |
| ---------- | ------ | ---- | -------- |
| type       | string | 是   | `vercel`   |
| websiteUrl | string | 是   | 目标网站 |
| proxy      | string | 是   | 代理     |

### 接口返回格式

> 请注意：`code` 为 `200` 时表示解码成功，其他情况均为失败

#### 5 秒盾返回格式

```json
{
  "code": 200,
  "message": "xxx",
  "headers": {
    "cookie": "xxx",
    "user-agent": "xxx"
    // 其他需要返回的 header字段
  }
}
```

#### 非5秒盾返回格式

```json
{
  "code": 200,
  "message": "xxx",
  "token": "xxx"
}
```
