"use strict";
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
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
const ans = isLegal(user);
if (ans) {
    console.log("I am legal");
}
else {
    console.log("I am not legal");
}
