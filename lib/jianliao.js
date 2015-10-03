var request = require('request');

var jianliao = function (webHookUrl) {
  if (!(this instanceof jianliao)) {
    return new jianliao(webHookUrl);
  }
  this.webHookUrl = webHookUrl;
}

jianliao.prototype.send = function (message, callback) {
  var opts = {
    url: this.webHookUrl,
    method: 'POST',
    json: true,
    body: message
  };
  request(opts, function (err, res, result) {
    callback(err, result, res);
  });
};
