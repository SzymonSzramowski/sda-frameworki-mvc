var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client){
  console.log('client added:', client.id);
  client.on('sendChatMessage', function(data){
        io.emit("reciveChatMessage", data);
  });
  client.on('disconnect', function(){
    console.log('client removed:', client.id);
  });
});
server.listen(3000);

app.get('/', function (req, res) {
  res.send('Server is runing')
})
