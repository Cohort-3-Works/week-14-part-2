// how can we define type to a very complex object

interface User {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
    pincode?: number;
  };
}

let user: User = {
  name: "harkirat",
  age: 21,
  address: {
    city: "chandigarh",
    country: "India",
    pincode: 125689,
  },
};

let user2: User = {
  name: "subh",
  age: 16,
  address: {
    city: "chandigarh",
    country: "India",
  },
};

function isLegal(user: User): boolean {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isLegal(user));
console.log(isLegal(user2));
