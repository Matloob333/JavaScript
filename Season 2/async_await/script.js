/**
 * Async Await is used to handle Promises more easily.
 * It makes asynchronous code look and behave a little more like synchronous code.
 * This is where the async keyword comes in. The async keyword is used to declare an asynchronous function.
 * The await keyword is used to wait for a Promise to resolve or reject.
 * It can only be used inside an async function.
 */

// await is only used inside async function

// creating a promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolve value");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise2 resolve value");
  }, 10000);
});

// using async await
console.log("Start");
async function getData() {
  // JS engine will wait for this promise to resolve and then move to next line and print res
  const res = await p1;
  console.log("Namaste JavaScript");
  console.log(res);

  const res2 = await p2;
  console.log("Namaste JavaScript 2");
  console.log(res2);
  console.log("End");
}
getData();

// // using promise then
// console.log("Start");
// function getData() {
//   //JS engine will not wait for this promise to resolve it move next line and print res
//   console.log("Namaste JavaScript");

//   p1.then((res) => console.log(res));
//   console.log("End");

//   p2.then((res) => console.log(res));
// }
// getData();
