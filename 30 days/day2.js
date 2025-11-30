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

var cancellable = function (fn, args, t) {
  fn(...args); // initial call
  const intervalId = setInterval(() => fn(...args), t);

  const cancelFn = () => {
    clearInterval(intervalId);
  };

  return cancelFn;
};
// Example usage:
const logMessageInterval = (message) => {
  console.log(message);
};
const cancelLogInterval = cancellable(
  logMessageInterval,
  ["Hello every 2 seconds!"],
  2000
);
// To cancel the repeated function calls after some time
setTimeout(() => {
  cancelLogInterval();
}, 10000);

function timeLimit(fn, t) {
  return async function (...args) {
    return Promise.race([
      fn(...args),
      new Promise((_, reject) =>
        setTimeout(() => reject("Time Limit Exceeded"), t)
      ),
    ]);
  };
}
// Core snippet:
var TimeLimitedCache = function () {
  this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const exists = this.cache.has(key);
  if (exists) clearTimeout(this.cache.get(key).timeout);
  const timeout = setTimeout(() => this.cache.delete(key), duration);
  this.cache.set(key, { value, timeout });
  return exists;
};

TimeLimitedCache.prototype.get = function (key) {
  return this.cache.has(key) ? this.cache.get(key).value : -1;
};

TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

// day 17
var debounce = function (fn, t) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId); // Cancel previous scheduled call
    timerId = setTimeout(() => fn(...args), t); // Schedule new call
  };
};

// Example usage:
const logDebounce = (message) => {
  console.log(message);
};
const debouncedLog = debounce(logDebounce, 2000);
debouncedLog("Hello, World!"); // Will log after 2 seconds if not called again within that time
debouncedLog("Hello again!"); // Resets the timer, will log this message after 2 seconds

// day 18var throttle = function (fn, t) {
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const n = functions.length;
    const results = new Array(n);
    let resolvedCount = 0;

    if (n === 0) {
      resolve([]);
      return;
    }

    functions.forEach((fn, index) => {
      fn()
        .then((value) => {
          results[index] = value;
          resolvedCount++;
          if (resolvedCount === n) resolve(results);
        })
        .catch((err) => reject(err));
    });
  });
};
let lastCall = 0;

return function (...args) {
  const now = Date.now();
  if (now - lastCall >= t) {
    lastCall = now;
    fn(...args);
  }
};

// Example usage:
const logThrottle = (message) => {
  console.log(message);
};
const throttledLog = throttle(logThrottle, 2000);
throttledLog("Hello, World!"); // Will log immediately

throttledLog("Hello again!"); // Will be ignored if called within 2 seconds of the previous call

//day19
var isEmpty = function (obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  return Object.keys(obj).length === 0;
};
// Example usage:
console.log(isEmpty({})); // true
console.log(isEmpty({ a: 1 }));

// false
console.log(isEmpty([])); // true
console.log(isEmpty([1, 2, 3])); // false
// false

// day 21
Array.prototype.last = function () {
  if (this.length === 0) return -1;
  return this[this.length - 1];
};
// Example usage:
const arr = [1, 2, 3];
console.log(arr.last()); // Output: 3
const emptyArr = [];
console.log(emptyArr.last()); // Output: -1
// day 22
