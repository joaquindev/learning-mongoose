'use strict';
var tasks     = require('./controllers/task').task;

module.exports = function(app){
  app.get('/', function(req,res){
    res.json({
      salute: "Salute message",
      methods: [
        { 
          name: '/', 
          description: 'Returns available methods'
        }, 
        {
          name: '/user', 
          description: 'Returns user list'
        }
      ]
    });
  });
};
