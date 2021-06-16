leChange API(ES6版)
===========
大华·乐橙平台API。

## 模块状态


## 功能列表

## Installation

```sh
$ npm install co-lechange-api
```

## Usage

```js
var LeChangeAPI = require('co-lechange-api');

async function() {
  var api = new LeChangeAPI(appid, appsecret);
  var result = await api.getAccessToken();
}
```

### 多进程
当多进程时，token需要全局维护，以下为保存token的接口：

```js
var api = new API('appid', 'secret', async function () {
  // 传入一个获取全局token的方法
  var txt = await fs.readFile('access_token.txt', 'utf8');
  return JSON.parse(txt);
}, async function (token) {
  // 请将token存储到全局，跨进程、跨机器级别的全局，比如写到数据库、redis等
  // 这样才能在cluster模式及多机情况下使用，以下为写入到文件的示例
  await fs.writeFile('access_token.txt', JSON.stringify(token));
});
```
