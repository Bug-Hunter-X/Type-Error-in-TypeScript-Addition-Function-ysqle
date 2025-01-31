function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: arguments must be numbers');
  }
  return a + b;
}

let result1 = addSafe(1, 2); // Correct usage
let result2 = addSafe(1, '2'); // Throws an error
console.log(result1); // Output: 3
//console.log(result2); // Throws an error: 'Invalid input: arguments must be numbers'