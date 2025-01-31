# Type Error in TypeScript Addition Function

This repository demonstrates a common type error in TypeScript that occurs when passing an argument of an incorrect type to a function.

## Bug Description

The `add` function is defined to accept two numbers and return their sum. However, the code passes a string ('2') as the second argument, resulting in a type error.

## Solution

The solution involves type checking and ensuring that the arguments passed to the function are of the correct type.  This is demonstrated in `bugSolution.ts`.