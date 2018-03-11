const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33,11);
  if (res !== 44) {
    throw new Error(`Exprected 44, but got ${res}`);
  }
});

it('should square two numbers', () => {
  var res = utils.square(2,2);
  if (res !== 4) {
    throw new Error(`Expected 4, but got ${res}`);
  }
});