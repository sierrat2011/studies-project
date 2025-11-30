/**
 * VARIABLES:
 * 
 * 0: Variables are named containers for data in JavaScript. We create variables using declarative keywords
 * Variables are named identifiers bound to a section of code called a scope. 
 * Variables are a way to create and store values that we can use throughout the application. 
 * Unlike constants, variables can be reassigned to another value. Variables can hold many datatypes, including number
 * 
 * 1: There are two steps to creating and using variables: declaration and assignment 
 * 
 */

// 1. Declaration //
// To declare a variable, you must type the word var, followed by your variable name in camelCase. 
// Unassigned variable will result in undefined until they are assigned
var myName;
console.log(myName); // prints 'undefined' to the console

// 2. Assignment or Initialization //
// To assign a variable after it is declared, you must type the variable name, 
// followed by the = symbol, followed by whatever value you want. 
// This can be done on the same line
 myName = 'Sierra'
 console.log(myName); // prints 'Sierra' to the console

 // 3. Reassignment //
 // Variables can be reassigned
 myName = 'Cierra';
 console.log(myName); // prints 'Cierra' to the console

 // 4. var, let and const //
 // Variables can be created and declared with three different keywords: var, let and const

 // var declarative keywork
 // - can be initialized without a value
 var name; // variable declared but not given a value
 // - can be reassigned and re-declared
 // - can only global or function scoped

 // let declarative keyword
 // very flexible and is the closest to var
 // - can be initialized without a value
 let name; // variable declared but not given a value
 // - can be reassigned
 // - are block scoped

 // const declarative keywork
 // less flexible than var and let
 // - cannot be initialized without a value
 // - cannot be reassigned
 // - are block scoped
 // const allows you to create variables that are very secure

 // contemporary 

// Hoisting // 
// var variable are always "hoisted" out of their scope into the global scope. let and const are not hoisted