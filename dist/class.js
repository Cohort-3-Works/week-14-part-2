"use strict";
// using interface we can create objects and class both
//object
let person = {
    name: "subh",
    age: 21,
};
//class
class Manager {
    // constructor(public name: string, public age: number)
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class God extends Manager {
    constructor(name, age) {
        super(name, age);
    }
}
let theUser = new Manager("jhon", 30);
console.log(theUser.name);
console.log(theUser.age);
// let greeted = person.greet();
// console.log(greeted);
