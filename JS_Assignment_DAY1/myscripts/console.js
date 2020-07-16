//1 console.log()

/*Mainly used to log(print) the output to the console. We can put any type inside the log(), be it a string, array, object, boolean etc.*/
console.log([1, 2, 3, 4]); // array inside log 
console.log({a:1, b:2, c:3}); // object inside log

//2 console.error()

// Used to log error message to the console. Useful in testing of code. By default the error message will be highlighted with red color.
  
console.error('error');

// 3 console.warn()

// Used to log warning message to the console. By default the warning message will be highlighted with yellow color.
console.warn('This is a warning.'); 

// 4 console.clear()

// Used to clear the console. The console will be cleared, in case of Chrome a simple overlayed text will be printed like : ‘Console was cleared’ while in firefox no message is returned.
console.clear(); 

// 5 console.time() and console.timeEnd()

//Whenever we want to know the amount of time spend by a block or a function, we can make use of the time() and timeEnd() methods provided by the javascript console object. They take a label which must be same, and the code inside can be anything( function, object, simple console).
console.time('Time'); 
  
     console.log('Process'); 
  
console.timeEnd('TIME Taken'); 

// 6 console.table()

//This method allows us to generate a table inside a console. The input must be an array or an object which will be shown as a table.

console.table({'Name':"sai", age:"24", city:"Mexico"}); 

// 7 Custom Console Logs

//User can add Styling to the console logs in order to make logs Custom . The Syntax for it is to add the css styling as a parameter to the logs which will replace %c in the logs as shown in the example below 
console.log('%c Any Message U want to style','color:blue; font-style: italic;');

