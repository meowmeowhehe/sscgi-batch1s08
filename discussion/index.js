// console.log("Hi");

// Functions
//  Function in javascript are lines/blocks of codes that tell our device/application to perform certain task(s) when called/invoked.

// Function Declarations
//  (Function Statement) defines function w/ specified parameters

// Parameters
//  - placeholders listed in function declaration or expression.
//  - represent value(s) that are passed into function when it is called/invoked.
//  - used data into functions

// Variables
//  - are named containers for storing data values.
//  - used to store and manipulate data

/*
  Syntax:
    function functionName() {
      code_block (statement)
    }
    
    function keyword - used to defined javascript function
    functionName - user-defined name of the function
*/
function printName() {
  console.log("My name is Juan.");
}

// invoked/called - call a function
printName();
// results an error if invoked if we haven't defined it yet.

// Function Declaration vs Expression
//  Function Declaration can be created through function declaration by using function keyword and adding function name
//  Declared Functions are not executed immediately, they are saved for lates use when invoked (called upon)
//  Declared Function can be hoisted
declaredFunction();

// NOTE:
//  In JS, Hoisting is a behavior for certain variables and functions to run or use them before declaration
function declaredFunction() {
  console.log("Hello World from declaredFunction!");
}

//  Function Expression
//    - can also be stored in a variable
//    - anonymous function assigned to variableFunction
//    Anonymous Function
//      - function without name, cannot be hoisted.
// variableFunction();
let variableFunction = function () {
  console.log("Hello Again!");
};
variableFunction();

const constFunction = function () {
  console.log("Initialized with const!");
};
constFunction();
