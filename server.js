var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var cors = require('cors');

// socket
io.on('connection', function (client) {
  console.log('client added:', client.id);
  client.on('sendChatMessage', function (data) {
    io.emit("reciveChatMessage", data);
  });
  client.on('disconnect', function () {
    console.log('client removed:', client.id);
  });
});
server.listen(3000);

// rest

app.use(cors());
app.options('*', cors());

app.get('/', function (req, res) {
  res.send('Server is runing')
})

app.post('/authorize', function (req, res) {
  var authorized = false;
  if (req.params.login && req.params.login == 'Szymon') {
    authorized = true;
  }
  res.send({ auhorized: true });
})