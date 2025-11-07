// make a function that returns a function that increments and returns a counter from n
var createCounter = function (n) {
  return function () {
    return n++;
  };
};
var counterFrom0 = createCounter(0);
console.log(counterFrom0()); // 0
console.log(counterFrom0()); // 1
console.log(counterFrom0()); // 2

// make a simple expect function for testing
var expect = function (val) {
  return {
    toBe: function (val2) {
      if (val === val2) return true;
      else throw new Error("Not Equal");
    },
    notToBe: function (val2) {
      if (val !== val2) return true;
      else throw new Error("Equal");
    },
  };
};

// test cases
var counterFrom5 = createCounter(5);
expect(counterFrom5()).toBe(5);
expect(counterFrom5()).toBe(6);
expect(counterFrom5()).toBe(7);

// make a function that returns an object with increment, decrement and reset methods for a counter from init
var createCounter = function (init) {
  let n = init;
  return {
    increment: function () {
      return ++n;
    },
    decrement: function () {
      return --n;
    },
    reset: function () {
      n = init;
      return n;
    },
  };
};

createCounter(10);
var counterObj = createCounter(10);
console.log(counterObj.increment()); // 11
console.log(counterObj.increment()); // 12
console.log(counterObj.decrement()); // 11
console.log(counterObj.reset()); // 10
console.log(counterObj.decrement()); // 9
console.log(counterObj.reset()); // 10
console.log(counterObj.increment()); // 11
