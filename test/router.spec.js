var chai = require('chai');
var should = chai.should();
var sinon = require('sinon');
var request = require('supertest');
var app = require('../app.js');

describe('products', function() {
    request(app)
        .get('/api/products')
        .expect('Content-Type', /json/)
        .expect(200, "ok")
        .end(function(err, res){
           if (err) throw err;
        });
});

describe('products', function() {
    request(app)
        .get('/api/products')
        .expect('Content-Type', /json/)
        .expect(200, "ok")
        .end(function(err, res){
           if (err) throw err;
        });
});