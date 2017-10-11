
// Create a promise. Have it fulfilled with a value of 'FULFILLED!' in
// executor after a delay of 300ms, using setTimeout.

// Then, print the contents of the promise after if has been fulfilled by passing
// console.log to then.


'use strict';

var promise = new Promise(function (fulfill, reject) {
  // Your solution here
  var data = ({value: "FULFILLED"});
  console.log(data)
  setTimeout(function(){
    fulfill(data);
  },300)
    reject(err);
});

// Your solution here
Promise()
    .then(function(fufill){
        console.log(data);
    }, function(err) {
        console.log(err);
    });