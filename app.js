var express = require('express');
var chalk = require('chalk');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;
var pathRouter = require('./src/routes/pathRouter');

app.use(express.static(__dirname + '/src/assets/'));
app.use('/game', pathRouter); 
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/views/index.html'));
});

app.listen(port, function() {
    console.log(chalk.green('Server is running on port: ' + port));
});