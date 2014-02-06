'use strict'; 

module.exports = function(grunt){
  
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        }, 
        src: ['test/{,*/}*.spec.js']
      }
    }
  });

  grunt.registerTask('test', ['mochaTest']);
};
