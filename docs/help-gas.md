# Gas 计算

两个相关字段

- Gas Price, 单位: `Gwei`
- 优先费, 单位: `Gwei`

## 支持 eip1159 的链

设置了`Gas Price`和`优先费`的情况

- `maxFeePerGas` 等于设置的`GasPrice`
- `maxPriorityFeePerGas` 等于设置的`优先费`

没设置的情况

- `maxFeePerGas` 等于链上当前默认的`maxFeePerGas`
- `maxPriorityFeePerGas` 等于链上当前默认的`maxPriorityFeePerGas`

## 不支持 eip1159 的链

设置了`Gas Price`和`优先费`的情况

- `gasPrice` 等于设置的`GasPrice` + `优先费`

没设置的情况

- `gasPrice` 等于链上当前默认的`gasPrice`
