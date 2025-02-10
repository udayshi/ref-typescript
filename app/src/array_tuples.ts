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