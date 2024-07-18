// Function that doubles a number
function double(x) {
  return x * 2;
}

// Function that squares a number
function square(x) {
  return x * x;
}

function compose(doubleFunction, squareFunction) {
  return function (x) {
    // First will double then square
    return doubleFunction(squareFunction(x));
  };
}

// Create the composed function
const doubleThenSquare = compose(square, double);


console.log(doubleThenSquare(3)); 