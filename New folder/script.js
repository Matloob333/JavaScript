var a = [10, 20, 30, 40, 50];
const printArray = function (b, ...a) {
  console.log(a);
};

printArray(2, 3, 4, 5);

// map function exapmle

const arr6 = [1, 2, 3, 4, 5];

const arr5 = arr6.map((value, index, array) => {
  return (value = 8);
});
console.log(arr5);

// object example

const obj = {
  a: 1,
  b: 2,
  c: 3,
};
console.log("objecct: ", obj);

console.log("object keys: ", Object.keys(obj));
console.log("object values: ", Object.values(obj));
console.log("object entries: ", Object.entries(obj));

const arr = [100, "q", "Utkarsh", 10, 8, "c"];
const arr1 = arr.filter((value) => {
  return typeof value === "string";
});
console.log(arr1);

const arr2 = arr.filter((value) => {
  return typeof value === "number";
});
console.log(arr2);

// splice array and slice array

// type of NaN is  a number

// find and filter matters a lot

// merge two objects

// object value change because the object is not put another object's value it remove the first value and then assign the new value
const obj1 = {};
console.log(obj1);
const obj2 = {
  name: "Utkarsh",
};
const obj3 = {
  age: 22,
};
obj1[obj2] = {
  name: "vicky",
};
console.log(obj1[obj2]);
obj1[obj3] = {
  name: "sumit",
};
console.log(obj1[obj2]);

// write a function for add two numbers
function add(a, b) {
  if (a && b) return a + b;
  return function (b) {
    return a + b;
  };
}
console.log(add(2, 3));
console.log(add(2)(3));

/**
 * In JavaScript, both arrays ([]) and objects ({}) are reference types.

When you compare objects or arrays with === (strict equality) or == (loose equality), the comparison checks whether they reference the exact same object in memory, not whether their contents are identical.

Here, every [] or {} represents a newly created distinct object in memory, so comparing two different objects always results in false.
 */
// console.log([]===[]);
// console.log({}==={});
console.log([] == []);
console.log({} == {});

/**
 * Aspect               |  Primitive Data Types                                      |  Non-Primitive Data Types (Objects)                                       
---------------------+------------------------------------------------------------+---------------------------------------------------------------------------
Examples             |  String, Number, Boolean, null, undefined, Symbol, BigInt  |  Object, Array, Function                                                  
Value Storage        |  Stored directly in stack memory (actual value)            |  Stored in heap memory, stack holds reference                             
Mutability           |  Immutable (cannot be changed after creation)              |  Mutable (properties or elements can be changed)                          
Comparison           |  Compared by value                                         |  Compared by reference (memory address)                                   
Passing to Function  |  Passed by value                                           |  Passed by reference                                                      
Methods/Properties   |  No methods/properties (auto-boxed temporarily)            |  Can have methods and properties                                          
Type Check           |  typeofreturns actual type                                 |  typeofreturns "object" (except for functions where it returns "function")
 */
