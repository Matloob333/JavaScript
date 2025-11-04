"use strict"; // use for on strict mode

/**Method
 * Method are functions but this funtion as a
 * part of an object.
 */

// 1. This keyword in Global scope

console.log(this);
// here this keyword is always return if
//a. we use browser envvironment then return window object
//b. we use js any other environment then give global object

//2. This keyword in functional scope
function x() {
  console.log(this); // here this keyword result depent on two things
}

x(); //in strict mode give return undefined and no strict mode return window object

//3. how the function called
window.x(); //here strict mode no change always same return window object in functionsal sccope

// 4. This keyword in objecct

const obj = {
  a: 10,
  y: function () {
    console.log(this);
    console.log(this.a); // return value of a
  },
};
obj.y(); // it give return objecct value and method both

// 5. This keyword in arrow function

const obj2 = {
  b: 20,
  z: () => {
    console.log(this);
  },
};
obj2.z();
/**
 * this keyword take the value of the global object
 * because this code in global scope
 * return window or global object because of enclosing lexical context.
 */

//6.  this keyword in nested arrow function
const obj3 = {
  c: 30,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};
obj3.x();
/**
 * return object (c:30, x:x())
 * because of enclosing lexical context
 */

/**
 * 7. This Keyword use in call method
 * call methos use for shre one method from one object
 * to another object
 */

const student1 = {
  name: "Matloob ",
  PrintNmae: function () {
    console.log(this.name);
  },
};
const student2 = {
  name: "Ahmad",
};
student1.PrintNmae();
student1.PrintNmae.call(student2);
