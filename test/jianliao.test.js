var jianliao = require('../lib/jianliao');

var robot = jianliao('https://your.webhook.url');

var message = {
  content: 'Hello',
  _roomId: '559b7f7a57c4d18ad796e1df',
  authorName: 'Stack',
  title: 'Winter is coming',
  text: '',
  redirectUrl: 'https://talk.ai/site'
}
robot.send(message, function (err, result) {
  console.log(err, result);
});
