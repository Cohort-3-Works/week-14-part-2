interface People {
  name: string;
  age: number;
}

// using interface we can create objects and class both

//object
let person: People = {
  name: "subh",
  age: 21,
};

//class
class Manager implements People {
  name: string;
  age: number;

  // constructor(public name: string, public age: number)
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class God extends Manager {
  constructor(name: string, age: number) {
    super(name, age);
  }
}

let theUser = new Manager("jhon", 30);
console.log(theUser.name);
console.log(theUser.age);
// let greeted = person.greet();
// console.log(greeted);
