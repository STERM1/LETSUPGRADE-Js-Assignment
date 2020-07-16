//var:The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window.
var  x = 10;
// Here x is 10
{  
  let x = 2;
  // Here x is 2
}
// Here x is 2
alert(x);
//let:A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.


//const:Variables declared with the const maintain constant values.const cannot be updated or re-declared.This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. 
const PI = 3.141592653589793;
//PI = 3.14; //error