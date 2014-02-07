'use strict'; 

process.env.NODE_ENV = 'test';//A reference to your environment

var should      = require('chai').should();
var supertest   = require('supertest');

//Start test (remembering tests structure)
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    })
  })
})


