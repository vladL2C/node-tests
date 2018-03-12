const request = require('supertest');
var app = require('./server').app
const expect = require('expect');

describe('server', () => {
  describe('#GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .end(done);
    });

  });

  describe('#GET /users', () => {
    it('should pass these tests mate', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Vlad',
            age: 23
          });
        })
        .end(done);
    });
  });

});


