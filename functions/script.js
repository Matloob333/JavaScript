// // functions
// var x=1;
// a();
// b();
// console.log(x);

// function a(){
//     var x=10;
//     console.log(x);
// }

// function b(){
//     var x=200;
//     console.log(x);
// }

// // let & const & var diff

// console.log(a);//'a' is go to the temporal dead zone
// let a=10;

// var b=100;

// //Syntaxx error
// let a=10;
// let a=100; // throw syntaxerror Identifier "a" has already been declared

// // declaration syntax
// let a;
// a=10;
// console.log(a);
// var c;
// c=1000;
// console.log(c);

// const d=399;
// console.log(d);

// let a;
// a=10;
// a=200;
// console.log(a);
// var c;
// c=1000;
// c==2000
// console.log(c);

// const e=399;
// console.log(e);

// //closure
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     } return y;
// }
// var z=x();
// console.log(z);
// z();

// // making a increment counter using closure for hide data
// function counter(){
//     var count =0;
//     return function incrementCounter(){
//         count++;
//         console.log(count);
//     }
// }
// var counter1= counter();
// counter1();
// counter1();
// counter1();
// // this counter2 is a diffrent counter and its start counting from 0
// var counter2= counter();
// counter2();
// counter2();
// counter2();

// // making a increment and decrement counter using closure and constructor methood

// function Counter (){
//     var count =0;
//     this.incrementCounter=function(){
//         count++;
//         console.log(count);
//     }
//     this.decrementCounter=function(){
//         count--;
//         console.log(count);
//     }
// }
// var counter1=new Counter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();

// type of function & functions
//1 function statement and function declaration
function a() {
  console.log("function statement");
}
a();

//2 function expression;
var b = function () {
  console.log("function expression");
};
b();

//3 anonymous funtion is that function when a function used as values
// function(){

// };

//4 named function expression
var c = function named() {
  console.log("named function expression");
};

//5 First classs funcction is also known as first class citizens ,is a function that passed a funtion in a funtion and return function in a funtion
var d=function(parameter1){
    return function(){
        console.log("First class function");
    };
};
d();
console.log(d());

//6 Arrow function                  

//7 difference between Parameters & Arguments
//parameters are also calledd indentifier and labels are gets those values as parameter
// arguments is the value which we passed in a function


//