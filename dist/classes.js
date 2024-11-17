"use strict";
// implementing interfaces in ts
// also can be called classes in js
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let manager = new Manager("subh", 30);
console.log(manager);
