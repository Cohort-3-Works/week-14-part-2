interface Address {
  city: string;
  country: string;
  pincode: number;
  houseNumber: number;
}

interface User {
  name: string;
  age: number;
  address: Address;
}
interface User2 {
  name: string;
  age: number;
  address: Address;
}

// To make a specific key optional we need to use ?
// like address?
// Interface can also use another interface

interface Address {}

let user = {
  name: "subh",
  age: 21,
  address: {
    city: "Chandigarh",
    country: "India",
    pincode: 156005,
  },
};

// how can we pass this as a parameter we create interfaces

function isLegal(user: User): boolean {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}

// const ans = isLegal();

// if (ans) {
//   console.log("I am legal");
// } else {
//   console.log("I am not legal");
// }
