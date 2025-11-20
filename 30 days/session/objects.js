// const obj3 = {
//   name: "matloob",
//   age: 23,
// };
// console.log(obj3);

// const objPerson = {
//   name: "shahni",
//   age: 32,
// };

// console.log(objPerson);
// console.log(objPerson.name);
// console.log(objPerson.age);

// // construction function
// function Person1(name, la) {
//   this.name = name;
//   this.la = la;
// }
// const Person = new Person1("shahid", 25);

// console.log(Person);
// console.log(Person.name);
// console.log(Person.la);

// //object creater
// const proto = {
//   greet() {
//     console.log("Hello");
//   },
// };
// const obj = Object.create(proto);
// obj.greet();

// // Classes(ES6 Syntax)
// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }
// }

// const myCar = new Car("Toyota", "camry");

// console.log(myCar.make);
// console.log(myCar.model);

// // assign value to empty object
// let testObject = {};
// testObject["name here"] = "shanu";
// testObject.name1 = "shahid";
// console.log(testObject);
// console.log(testObject["name here"]);

let f = {
  function1: function () {
    console.log("true");
  },

  function2: function () {
    let val = 10;
    if ((val = 10)) {
      console.log("value of:", val);
    }
  },
};
console.log(f);
console.log(f.function1());
console.log(f.function2());

//

let a = "independent";
let obj = {
  aval: 700,
  a: 3,
  b: 4,
  demoarr: ["one", "two", { inside: "2" }],
  demostr: "heredemo",
  sum: function () {
    console.log("this is normal func", this);
    return console.log("sum here", this.a + this.b);
  },
  minus: (argu) => {
    console.log("inside arrorw func", this);
    let aval = argu;
    console.log(this.aval, "same eval", aval);
  },
  objInsideVal: this.a,
};
let obj2 = {
  arrowfun: (args) => {
    console.log("arrow obj2", this, args);
  },
};

console.log("obj val here", obj.a);
obj.a = 200;
console.log("objInsideVal", obj.objInsideVal);
console.log("execution of sum", obj.sum());
console.log("arroe func here", obj.minus(500));
console.log("obj2arrowfunc:", obj2.arrowfun().call({ a: "b" }));
