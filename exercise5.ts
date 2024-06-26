// exercise5.ts

class Calculator {
    private validateInputs(a: any, b: any): void {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Both inputs must be numbers");
        }
    }

    add(a: number, b: number): number {
        this.validateInputs(a, b);
        return a + b;
    }

    subtract(a: number, b: number): number {
        this.validateInputs(a, b);
        return a - b;
    }

    multiply(a: number, b: number): number {
        this.validateInputs(a, b);
        return a * b;
    }

    divide(a: number, b: number): number {
        this.validateInputs(a, b);
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    }
}

// Examples
const calc = new Calculator();
console.log(calc.add(5, 3)); 
console.log(calc.subtract(10, 4)); 
console.log(calc.multiply(2, 6));
console.log(calc.divide(15, 3)); 