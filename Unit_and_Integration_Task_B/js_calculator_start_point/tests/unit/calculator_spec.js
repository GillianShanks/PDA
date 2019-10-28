var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add numbers', function(){
    calculator.previousTotal='4';
    calculator.add('1');

    assert.deepEqual(calculator.runningTotal, '5');
  })

  it('should subtract numbers', function(){
    calculator.previousTotal='7';
    calculator.subtract('4');

    assert.deepEqual(calculator.runningTotal, '3');
  })

  it('should multiply numbers', function(){
    calculator.previousTotal='3';
    calculator.multiply('5');

    assert.deepEqual(calculator.runningTotal, '15');
  })

  it('should divide numbers', function(){
    calculator.previousTotal='21';
    calculator.divide('7');

    assert.deepEqual(calculator.runningTotal, '3');
  })

  it('should concatenate numbers', function(){
    calculator.numberClick('7');
    calculator.numberClick('2');
    calculator.numberClick('5');

    assert.deepEqual(calculator.runningTotal, '725');
  })

  it('should chain multiple operations', function(){
    calculator.numberClick('1');
    calculator.numberClick('0');
    calculator.operatorClick('+');
    calculator.numberClick('5');
    calculator.operatorClick('/');

    assert.deepEqual(calculator.runningTotal, '15');

    calculator.numberClick('3');
    calculator.operatorClick('=');

    assert.deepEqual(calculator.runningTotal, '5');
  })

  it('should clear the running total without changing the operation', function(){
    calculator.numberClick('1');
    calculator.operatorClick('+');
    calculator.numberClick('2');
    calculator.operatorClick('*');

    assert.deepEqual(calculator.previousTotal, '3');

    calculator.numberClick('3');
    calculator.clearClick();

    assert.deepEqual(calculator.previousTotal, '3');

    calculator.numberClick('4');
    calculator.operatorClick('=');

    assert.deepEqual(calculator.runningTotal, '12');

  })

});
