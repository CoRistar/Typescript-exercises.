var Person = /** @class */ (function () {
    function Person(name, age, ssn) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = ssn;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var person = new Person("Sbusiso Dlomo", 50, "740315 5662 085");
console.log(person.getName());
console.log(person.getAge());
