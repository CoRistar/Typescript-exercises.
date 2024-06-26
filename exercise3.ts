

// 1. 
function sum(a: number, b: number): number {
   
    return a + b;    
}
console.log(sum(5, 3)); // Output: 8

// 2. 
function getFixedNumber(): number {
    return 42;
}
console.log(getFixedNumber()); // Output: 42

// 3.
function formatString(str: string, uppercase?: boolean): string {
    return uppercase ? str.toUpperCase() : str.toLowerCase();
}


console.log(formatString("Hello", true)); 
console.log(formatString("World")); 