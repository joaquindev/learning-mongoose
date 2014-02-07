'use strict'; 

module.exports = function(grunt){
  
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    express: {
      options: {
        port: process.env.PORT || 3000
      }, 
      dev: {
        options: {
          script: '<%= ToDoList.server %>/app.js', 
          debug: true
        }
      }, 
      test: {
        options: {
          script: '<%= ToDoList.server %>/app.js',
          port: 5000,
          debug: true
        } 
      }, 
      prod: {
        options: {
          script: '<%= ToDoList.dist %>/app.js', 
          node_env: 'production'
        }
      }
    }, 
    open:{
      server: {
        url: 'http://localhost:<%= express.options.port %>'
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        }, 
        src: ['test/{,*/}*.spec.js']
      }
    }, 
    mocha_istanbul: {
      coverage: {
        src: 'test', //the folder not the files
        options: {}
      },
      coveralls: {
        src: 'test', //the folder not the files
        options: {
          coverage: true
        }
      }
    }
  });

  grunt.event.on('coverage', require('coveralls').handleInput); // Check below
  grunt.registerTask('coveralls', ['mocha_istanbul:coveralls']);
  grunt.registerTask('coverage', ['mocha_istanbul:coverage']);

  grunt.registerTask('test', ['mochaTest']);
};
