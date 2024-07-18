// Define the main function
function sum(a, b, c, d) {
  return a + b + c + d;
}

// Define the partially applied function
function partialSum(a) {
  return function (b, c, d) {
    return sum(a, b, c, d);
  };
}

// Create a partially applied function with the first argument fixed to 5
const addFive = partialSum(5);

console.log(addFive(1, 2, 3)); // Output: 11
