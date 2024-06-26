

class Person {
    private socialSecurityNumber: string;

    constructor(private name: string, private age: number, ssn: string) {
        this.socialSecurityNumber = ssn;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}

const person = new Person("Sbusiso Dlomo", 50, "740315 5662 085");
console.log(person.getName()); 
console.log(person.getAge()); 
