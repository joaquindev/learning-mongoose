var express = require('express');
var app     = express(); 
var http    = require('http'); 

app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

if ('development' === app.get('env')){
  app.use(express.errorHandler());
}
else if('test' === app.get('env')){
  app.use(express.errorHandler());
  database = 'test';
}


http.createServer(app).listen(app.get('port'), function(){
  console.log('Listening on ' + app.get('port'));
});

exports.app = app;
