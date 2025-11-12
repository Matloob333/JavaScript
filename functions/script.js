// function add(a, b) {
//     return a + b; }
// function subtract(a, b) {

const { resourceLimits } = require("worker_threads");

//     return a - b; }
function multiply(a, b) {
  return a * b;
}
console.log("multiply:", multiply(5, 3));

function divide(c, d) {
  return c / d;
}
let result = divide(6, 3);

console.log(result);

const square = (x) => x * x;
let res = square(5);
console.log(res);

const obj = {
  name: "matloob",
  age: 23,
};
console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log("******************");
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log("***************");
console.log(Object.assign(obj));
console.log("***************");

// greet function
function greet(name) {
  return `Hello,${name}!`;
}

console.log(greet(obj.name));

console.log("***************");

const allow = (name, age) => {
  return `${name},your age is ${age} , So you are allow to drive`;
};
console.log(allow(obj.name, obj.age));

console.log("***************");

const obj1 = {
  greet(name) {
    return `hello, ${name}`;
  },
};
console.log(obj1.greet(obj.name));

// async function
async function fetchData() {
  let response = await fetch("https://github.com/Matloob333");
  let data = await response.text(); // or use response.json() if API returns JSON
  console.log(data);
  return data;
}
fetchData();

async function fetchRepos() {
  let response = await fetch("https://api.github.com/users/Matloob333/repos");
  let data = await response.json();
  console.log(data);
  return data;
}
fetchRepos();
