// // this keyword
// ("use strict");
// console.log(this);

// // this keyword in functional scope

// function x() {
//   console.log(this);
// }
// x();

// this keyword in object
// const obj = {
//   a: 10,
//   x: function () {
//     console.log(this);
//   },
// };
// obj.x();

// this keyword in call method

// const user = {
//   name: "Matloob",
//   printName: function () {
//     console.log(this.name);
//   },
// };

// user.printName();

// this keyword in arrow function
// this keyword in arrow function return window objecct because
//this code in global scope
// const obj = {
//   a: 10,
//   x: () => {
//     console.log(this);
//   },
// };
// obj.x();

//this keyword in nested arrow function
const obj = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};
obj.x();
