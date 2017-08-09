var app = require('express')();
var server = require('http').createServer(app);
var cors = require('cors');
var fs = require('fs');

// rest

var model; 

function loadModel() {
    var file = __dirname + '/server_db.json';

    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            model = {};
            model.posts = [];
            console.log("new model created");
            return;
        } 
        model = JSON.parse(data);
        console.log("model file was loaded!");
    });
}

function saveModel() {
    const fs = require('fs');
    const content = JSON.stringify(model);

    fs.writeFile("server_db.json", content, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("model file was saved!");
    });
}

function start() {
    loadModel();

    io.on('connection', function (client) {
  console.log('client added:', client.id);
  client.on('sendChatMessage', function (data) {
    io.emit("receiveChatMessage", data);
  });
  client.on('disconnect', function () {
    console.log('client removed:', client.id);
  });
});
    server.listen(3000);

    app.use(cors());
    app.options('*', cors());
}

start();

app.get('/', function (req, res) {
    res.send('Server is runing')
});

// == post


app.post('/wall', function (req, res) {
    model.posts.push(req.params);
    console.log('Added post', req.params)
    res.send({ success: true});
    saveModel();
});

app.get('/wall', function (req, res) {
    res.send(model.posts);
});


app.post('/login', function (req, res) {
    var authorized = false;
    if (req.params.login && req.params.login == 'Szymon') {
        authorized = true;
    }
    res.send({ auhorized: authorized });
});