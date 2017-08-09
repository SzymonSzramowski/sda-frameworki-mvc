var app = require('express')();
var server = require('http').createServer(app);
var cors = require('cors');
var fs = require('fs');
var bodyParser = require('body-parser');

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
        try {
            model = JSON.parse(data);
        } catch (err) {
            model = {};
            model.posts = [];
            console.log("new model created");
        }

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

    server.listen(3000);

    app.use(cors());
    app.options('*', cors());
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

}

start();

app.get('/', function (req, res) {
    res.send('Server is runing')
});

// == post


app.post('/wall', function (req, res) {
    model.posts.push(req.body);
    console.log('Added post', req.body)
    res.send({ success: true});
    saveModel();
});

app.get('/wall', function (req, res) {
    res.send(model.posts);
});


app.post('/login', function (req, res) {
    var authorized = false;
    if (req.body.login && req.body.login == 'Szymon') {
        authorized = true;
    }
    res.send({ auhorized: authorized });
});