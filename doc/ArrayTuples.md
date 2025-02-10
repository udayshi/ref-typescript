# TypeScript Arrays and Tuples Example

This is a simple TypeScript example that demonstrates the use of arrays and tuples.

## Code Example

```typescript
// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers array:", numbers); // Output: Numbers array: [1, 2, 3, 4, 5]

// Array of strings
let fruits: string[] = ["Apple", "Banana", "Cherry"];
console.log("Fruits array:", fruits); // Output: Fruits array: ["Apple", "Banana", "Cherry"]

// Array with mixed types using union types
let mixedArray: (number | string)[] = [1, "Two", 3, "Four"];
console.log("Mixed array:", mixedArray); // Output: Mixed array: [1, "Two", 3, "Four"]

// Tuple example
let tuple: [string, number, boolean] = ["Alice", 25, true];
console.log("Tuple:", tuple); // Output: Tuple: ["Alice", 25, true]

// Accessing tuple elements
console.log(`Name: ${tuple[0]}, Age: ${tuple[1]}, Active: ${tuple[2]}`); 
// Output: Name: Alice, Age: 25, Active: true
```

## Expected Output

```
Numbers array: [1, 2, 3, 4, 5]
Fruits array: ["Apple", "Banana", "Cherry"]
Mixed array: [1, "Two", 3, "Four"]
Tuple: ["Alice", 25, true]
Name: Alice, Age: 25, Active: true
```

## How to Run

1. Make sure you have [Node.js](https://nodejs.org/) and [TypeScript](https://www.typescriptlang.org/) installed.
2. Save the code above in a `index.ts` file.
3. Compile the TypeScript code to JavaScript:
   ```bash
   tsc index.ts
   ```
4. Run the generated JavaScript file:
   ```bash
   node index.js
   
