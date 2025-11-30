/**
 * FUNCTIONS:
 * 
 * 0: Functions allow us to encapsulate a block of code and reuse that block of code whenever we want and how many times we want
 * 
 * 1: There are two phases to using functions. First we must declare the function, then we must invoke or call the function
 * 
 */

// 1a. Function Declaration //
// This step is simply creating the function. One way is to use the function keyword, 
// then name the function, followed by parentheses and curly braces. 
// Parameters are placeholders for the actual arguments that will be used later when the function is put into use. This can be named anything
function doSomething(parameter, parameter){
    // code goes here
}


// 1b. Function Invocation //

// 2. Parameters vs Arguments // 
// Parameters are the placeholders used in the function declaration
function testNums(num1, num2) {return num1 + num2}
// Arguments are included during the function call and are the actual values that are being tested
testNums(10, 20) // returns 30
// The number and positioning of parameters must always match the number of arguments

// 3. Named Functions //
function upperCaseString(string){
    return string.toUpperCase()
}
// Named functions are hoisted to the top of their scope

// 4. Function Expressions //
// Assigning a function to a variable or a constant is called a function expression
const multiply = function(num1, num2) {return num1 * num2}

// 5. 

// 6. Scope //
// Functions can see and modify variables in the parent or global scope. The inner scope cannot see into the outer scope

// 7. 
// Function declarations form a closure around the environment in which is was defined. 
// If an object returned from the function is held in memory somewhere , that closure continues to exist
