
// Create a promise. Have it fulfilled with a value of 'FULFILLED!' in
// executor after a delay of 300ms, using setTimeout.

// Then, print the contents of the promise after if has been fulfilled by passing
// console.log to then.


'use strict';

function myFunc() { 
return new Promise(function (fulfill, reject) {
  // Your solution here\
    var data = ("FULFILLED!");
    console.log(data)
    setTimeout(function(){
        fulfill(data);
    },300)
        reject(err);
    });
}
// Your solution here
myFunc()
    .then(function(fufill){
        console.log(data);
    }, function(err) {
        console.error(err);
    });