// Data Types in JavaScript
// Data types basically specify what kind of data can be stored and manipulated within a program.

// There are six basic data types in JavaScript which can be divided into three main categories: primitive (or primary), composite (or reference), and special data types. String, Number, and Boolean are primitive data types. Object, Array, and Function (which are all types of objects) are composite data types. Whereas Undefined and Null are special data types.

// Primitive data types can hold only one value at a time, whereas composite data types can hold collections of values and more complex entities.

//Primitive data types
//Numbers: 5, 6.5, 7 etc.
var a = 25;         // integer
var b = 80.5;       // floating-point number

//String: “Hello Welcome All” etc.
var a = 'Hi there!';  // using single quotes
var b = "Hi there!";  // using double quotes

//Boolean: Represent a logical entity and can have two values: true or false.
var a = 2, b = 5, c = 10;
 
alert(b > a) // Output: true
alert(b > c) // Output: false

//Null: This type has only one value : null.
var a = null;
alert(a);

//Undefined: A variable that has not been assigned a value is undefined.
var a;
var b = "Hello World!"
 
alert(a) // Output: undefined
alert(b) // Output: Hello World!


//Object: It is the most important data-type and forms the building blocks for modern JavaScript. We will learn about these data types in details in further articles.
var car = {
    "modal": "BMW X3",
    "color": "white",
    "doors": 5
}


//Array Data Type
var colors = ["Red", "Yellow", "Green", "Orange"];
var cities = ["London", "Paris", "New York"];
 
alert(colors[0]);   // Output: Red
alert(cities[2]);   // Output: New York


//Function Data Type
//The function is callable object that executes a block of code. Since functions are objects, so it is possible to assign them to variables
var greeting = function(){ 
    return "Hello World!"; 
}
 
// Check the type of greeting variable
alert(typeof greeting) // Output: function
alert(greeting());     // Output: Hello World!







