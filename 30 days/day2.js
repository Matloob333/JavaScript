// make a function that returns a function that increments and returns a counter from n
var createCounter = function (n) {
  return function () {
    return n++;
  };
};

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
