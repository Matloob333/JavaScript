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
reduce(
  [2, 3, 4, 5],
  function min(acc, curr) {
    return Math.min(acc, curr);
  },
  1
); // return 2

// implement function composition
var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
};

const add1 = function (x) {
  return x + 1;
};
const mul2 = function (x) {
  return x * 2;
};
const add3 = function (x) {
  return x + 3;
};
const composedFunction = compose([add1, mul2, add3]);
console.log(composedFunction(5)); // Output: 19
// Explanation: add3(5) = 8, mul2(8) = 16, add1(16) = 17
const composedFunction2 = compose([mul2, add1, add3]);
console.log(composedFunction2(5)); // Output: 15
// Explanation: add3(5) = 8, add1(8) = 9, mul2(9) = 18
const composedFunction3 = compose([]);
console.log(composedFunction3(5)); // Output: 5
// Explanation: No functions to apply, so the input is returned as is
// implement function piping
var pipe = function (functions) {
  return function (x) {
    return functions.reduce((acc, fn) => fn(acc), x);
  };
};

const pipedFunction = pipe([add1, mul2, add3]);
console.log(pipedFunction(5)); // Output: 15
// Explanation: add1(5) = 6, mul2(6) = 12, add3(12) = 15
const pipedFunction2 = pipe([mul2, add1, add3]);
console.log(pipedFunction2(5)); // Output: 14

// Explanation: mul2(5) = 10, add1(10) = 11, add3(11) = 14
const pipedFunction3 = pipe([]);
console.log(pipedFunction3(5)); // Output: 5

// day 8
// Explanation: No functions to apply, so the input is returned as is
var argumentsLength = function (...args) {
  console.log(args.length);
  return args.length;
};
argumentsLength(1, 2, 3); // return 3
argumentsLength(); // return 0
argumentsLength(true, false); // return 2
argumentsLength("hello", "world", "!"); // return 3
argumentsLength(42); // return 1

//day 9
var once = function (fn) {
  let called = false;
  let res;

  return function (...args) {
    if (!called) {
      called = true;
      res = fn(...args);
      return res;
    }
    return undefined;
  };
};

//day 10
function memoize(fn) {
  const cache = {};
  let callCount = 0;

  function memoized(...args) {
    const key = JSON.stringify(args);
    if (!(key in cache)) {
      cache[key] = fn(...args);
      callCount++;
    }
    return cache[key];
  }

  memoized.getCallCount = () => callCount;
  return memoized;
}

// day 11
/*Promises in JavaScript are used to handle asynchronous operations.
A Promise is an object that represents the eventual completion (or failure)
of an asynchronous operation and its resulting value.
var addTwoPromises = async function (promise1, promise2) {
  return Promise.all([promise1, promise2]).then(([a, b]) => a + b);
};
*/
var addTwoPromises = async function (promise1, promise2) {
  return Promise.all([promise1, promise2]).then(([a, b]) => a + b);
};
// day 12
/**
 * @param {number} millis
 * @return {Promise<void>}
 */
async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}

// Example usage
(async () => {
  const t = Date.now();
  await sleep(100);
  console.log(Date.now() - t); // ~100
})();

var cancellable = function (fn, args, t) {
  const timerId = setTimeout(() => {
    fn(...args);
  }, t);
  return function cancelFn() {
    clearTimeout(timerId);
  };
};
// Example usage:
const logMessage = (message) => {
  console.log(message);
};
const cancelLog = cancellable(logMessage, ["Hello, World!"], 5000);
// To cancel the scheduled function call before it executes
// cancelLog();
// day 13
// implement bind function
Function.prototype.myBind = function (thisArg, ...args) {
  const fn = this;
  return function (...innerArgs) {
    return fn.apply(thisArg, [...args, ...innerArgs]);
  };
};
// Example usage:
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}
const person = { name: "Alice" };
const greetAlice = greet.myBind(person, "Hello");
console.log(greetAlice("!")); // Output: "Hello, Alice!"
// day 14
// implement call function
Function.prototype.myCall = function (thisArg, ...args) {
  const fn = this;
  return fn.apply(thisArg, args);
};
