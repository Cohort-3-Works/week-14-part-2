"use strict";
// using interface we can create objects and class both
//object
let person = {
    name: "subh",
    age: 21,
};
//class
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let theUser = new Manager("jhon", 30);
console.log(theUser.name);
console.log(theUser.age);
// let greeted = person.greet();
// console.log(greeted);
