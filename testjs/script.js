//Callstack
//the callstack is a data structure used by js in keep track the function calls,it work like stack of plates -the last plate added and the first plate is removed (LIFO)

//ex
function square(num) {
  var ans = num * num;
  console.log(ans);
}
var squareof2 = square(2);
var squareof4 = square(4);

////undefined- declared but not define value
let a;
console.log(a);
//defined
let b = 10;
console.log(b);

//not defined
// console.log(q)

//scope chaining
/*the  scope chaining in a chain of lexical environment 
(scope) that determines how varribale are accesed
in nested function  */
//ex
let n = 10;
function outer() {
  let m = 20;
  function inner() {
    let o = 30;
    console.log(n, m, o);
  }
  inner();
}
outer();

// Temporal dead zone (undefined to initialized value zone )
/** themporal dead zone is the time between -
 * 1. when a let and const varrible declared and
 * 2. when it is acctualy initialized
 * 3. var is not for temporal dead zone
 *
 */

// hoisting
/**hoisting in js is a defult behavior to moving declaration to top
 * of their scope before ecxecute code
ex */
let i = 50;
console.log(i);
let j = 60;
console.log(j);

//block scope
/** block scope means that a varrible declared in side the
 * a block {......} can only be accesedd inside the block
 * ex
 */
{
  let v = 20;
  const u = 30;
  console.log(v);
}
// console.log(v);
// console.log(u);

//Closure
/** a closure is created when a function remember and access varrible form outer its
 * side or even after the outer funtion finished execution
 * ex
 */

function outer1() {
  let name = "matloob";
  function inner1() {
    console.log("hello" + " " + name);
  }
  return inner1;
}
const greet = outer1();
greet();

// setTimeOut +Closure
// print 1to 5 every 1 second interrval
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
//Asyncronous Operations
/** Asyncronous mean not happening at the same time .
 * in js it allow to the programme to continue running while 
 * waiting for the task to complete
 ex
 */
console.log("Start");
setTimeout(() => {
  console.log("Asyncronous Operation");
}, 2000);
console.log("End");

// Asyncronous Function
/**Asyncronous functon return a promise you can
 * await it to prove execution untill the pomise is reolve
 * ex
 */

async function getData() {
  let response = await fetch("https://api.github.com/users/Matloob333/repos");
  let data = await response.json();
  console.log(data);
}
getData();

// with error handler async functiom
async function getData() {
  try {
    let response = await fetch("https://api.github.com/users/Matloob333/repos");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
getData();

// Callback Funtion
/**Callback funtion is that funtion that giving a
 * function as an argument  */
// Callback hell
/** when we write nested callback one iside another
 * it become more defficult to
 *  understand,read, debug and maintain this is called callback hell
 * ex
 */

function doTask1(callback) {
  setTimeout(() => {
    console.log("Task 1 done");
    callback();
  }, 1000);
}

function doTask2(callback) {
  setTimeout(() => {
    console.log("Task 2 done");
    callback();
  }, 1000);
}

// Callback hell:
doTask1(() => {
  doTask2(() => {
    console.log("All tasks completed");
  });
});

// Promise - Clear way to handle ansyncronous programme
/**a promise is an object that represent the eventual result
 * (succcess or failure) in asyncronous programming
 * there are the three state
 * pending-(not resolved)
 * resolve-(task sucessfull)
 * reject-(task fail)
 * ex
 */
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userFound = true;
      if (userFound) {
        resolve({ name: "Matloob", age: 22, Role: "Frontend Developer" });
      } else {
        reject("User not Found");
      }
    }, 10000);
  });
}

fetchUserData()
  .then((user) => {
    console.log("user Data", user);
  })
  .catch((err) => {
    console.log("Error", err);
  });
