const utils = require('./utils');
const expect = require('expect');


describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33,11);
      expect(res).toBe(44).toBeA('number');
    });

    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  });

  it('should square two numbers', () => {
    var res = utils.square(2,2);
    expect(res).toBe(4).toBeA('number');
  });

  it('should async square two numbers', (done) => {
    utils.asyncSquare(4, (squared) => {
      expect(squared).toBe(16).toBeA('number');
      done();
    });
  });
  
});



// it('should expect some values', () => {
//   // expect(11).toNotBe(12);
//   // expect({name: 'Vlad'}).toNotEqual({name: 'vlad'});
//   // expect([2,3,4]).toExclude(1);
//   // expect({
//   //   name: 'Vlad',
//   //   age: 23,
//   //   location: 'Auckland'
//   // }).toExclude({
//   //   age: 25
//   // });
  
// });

it('should verify first and last names are set', () => {
  var res = utils.setName({}, 'Vlad Saraev');
  expect(res).toInclude({
    firstName: 'Vlad',
    lastName: 'Saraev'
  });
});

