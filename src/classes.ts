// implementing interfaces in ts
// also can be called classes in js

interface People {
  name: string;
  age: number;
}

class Manager implements People {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let manager = new Manager("subh", 30);
console.log(manager);
