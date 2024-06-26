// 1. 
function sum(a, b) {
    // a = 13;
    // b = 26;
    // console.log("a = " + a + ", b = " + b);
    return a + b;
}
// 2. 
function getFixedNumber() {
    return 42;
}
// 3.
function formatString(str, uppercase) {
    return uppercase ? str.toUpperCase() : str.toLowerCase();
}
// Example usage:
console.log(sum(5, 3)); // Output: 8
console.log(getFixedNumber()); // Output: 42
console.log(formatString("Hello", true)); // Output: HELLO
console.log(formatString("World")); // Output: world
