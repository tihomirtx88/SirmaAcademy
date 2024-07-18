function multiply(a, b) {
  return a * b;
}

// Use bind to create a new function that always multiplies by 5
const multiplyByFive = multiply.bind(null, 5);

console.log(multiplyByFive(3)); 