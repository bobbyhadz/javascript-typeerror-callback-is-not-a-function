// TypeError: callback is not a function in JavaScript

// EXAMPLE 1 - Always provide a callback when calling the function

function example(callback) {
  return callback();
}

// ✅ Works
example(() => {
  console.log('success');
});

// ------------------------------------------------------------------

// // EXAMPLE 2 - You can also use a named function

// function example(callback) {
//   return callback();
// }

// function logMessage() {
//   console.log('success');
// }

// // ✅ Works
// example(logMessage);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Define a default value for the `callback` parameter

// function example(callback = () => {}) {
//   return callback();
// }

// // ✅ Works
// example();

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if the callback function was provided before calling it

// function example(callback) {
//   if (typeof callback === 'function') {
//     return callback();
//   }
// }

// // ✅ Works
// example();
