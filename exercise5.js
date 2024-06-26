// Exercise 5
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.validateInputs = function (a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Both inputs must be numbers");
        }
    };
    Calculator.prototype.add = function (a, b) {
        this.validateInputs(a, b);
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        this.validateInputs(a, b);
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        this.validateInputs(a, b);
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        this.validateInputs(a, b);
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    };
    return Calculator;
}());
// Example usage:
var calc = new Calculator();
console.log(calc.add(5, 3)); // Output: 8
console.log(calc.subtract(10, 4)); // Output: 6
console.log(calc.multiply(2, 6)); 
console.log(calc.divide(15, 3));

