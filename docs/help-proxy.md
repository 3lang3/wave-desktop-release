# 代理关联行为

## 代理优先级

1. 如果导入的模版中包含了`proxy`字段, 则会使用该代理
2. 如果导入的模版中没有`proxy`字段, 但是`代理管理`模块中有代理, 则会**随机**使用`代理管理`模块中的代理
3. 如果导入的模版中没有`proxy`字段, 且`代理管理`模块中没有代理, 则不使用代理

## 代理与社交账号关联

> `社交token`字段指: `twitterToken`和`discordToken`

如果导入模版中包含了`社交token`字段, 则保存`代理优先级`规则中的得出的代理与`token`的映射关系

### 具体场景详细说明

- 如果导入模版中包含了`proxy`字段, 则会使用该代理
- 如果导入模版中没有`proxy`字段, 则寻找**映射代理**
