# jianliao
Jianliao robot sdk

## Usage
```js
var jianliao = require('jianliao');
var messenger = jianliao('https://your.webhook.url');

var message = {
  "content": "Hello",                             // 消息正文
  "_roomId": "559b7f7a57c4d18ad796e1df",          // 指定话题 ID，不可与 _toId 同时存在
  "_toId": "559b7f9357c4d18ad796e1e0",            // 指定私聊对象 ID，不可与 _roomId 同时存在。如果 _roomId 和 _toId 都不存在，消息会自动发送到团队公告板中
  "authorName": "Stack",                          // 消息发送者的姓名，如果留空将显示为机器人的名字
  "title": "Winter is coming",                    // 聚合消息标题
  "text": "",                                     // 聚合消息正文
  "redirectUrl": "https://talk.ai/site",          // 跳转链接
  "thumbnailPicUrl": "http://your.image.url"      // 消息中可添加一张预览图片
};

// callback is optional
messenger.send(message, function (err, result, response) {});
```

## License
The MIT license.
