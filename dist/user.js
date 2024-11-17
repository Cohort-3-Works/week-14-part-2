"use strict";
// how can we define type to a very complex object
let user = {
    name: "harkirat",
    age: 21,
    address: {
        city: "chandigarh",
        country: "India",
        pincode: 125689,
    },
};
let user2 = {
    name: "subh",
    age: 16,
    address: {
        city: "chandigarh",
        country: "India",
        pincode: 125689,
    },
};
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(user));
console.log(isLegal(user2));
