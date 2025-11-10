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

// day 4
// implement map function
const map = function (arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
};

map([1, 2, 3], function plusOne(n) {
  return n + 1;
}); // return [2, 3, 4]

map([1, 2, 3], function timesTwo(n) {
  return n * 2;
}); // return [2, 4, 6]

// implement filter function
var filter = function (arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
};
filter([1, 2, 3, 4, 5], function (n) {
  return n % 2 === 1;
}); // return [1, 3, 5]

filter([2, 4, 6, 8], function (n) {
  return n > 5;
});

// implement reduce function
var reduce = function (nums, fn, init) {
  let res = init;
  for (let i = 0; i < nums.length; i++) {
    res = fn(res, nums[i]);
  }
  return res;
};
reduce(
  [1, 2, 3, 4],
  function sum(acc, curr) {
    return acc + curr;
  },
  0
); // return 10
reduce(
  [1, 2, 3, 4],
  function product(acc, curr) {
    return acc * curr;
  },
  1
); // return 24
reduce(
  [2, 3, 4, 5],
  function max(acc, curr) {
    return Math.max(acc, curr);
  },
  1
); // return 5
