// // Object in JS

// const property = "firstName";
// const naam = "Ashish Bhardwaj";

// const user = {
//     firstName : "Rajat Sharma",
// };

// console.log(user);


// const user = {
//     naam : "Patandar",
//     age : 24,
//     isTotallyAwesome :  true,
// };

// for (key in user){
//     console.log(user[key]);
// }


// // 1. what is output of this data
// const data = {
//     a : "one",
//     b : "two",
//     a : "three",
// };
// console.log( data);  // keys with same name will replace the first key with second key and last key will become first key in output

// 2. 
let nums = {
    a: 100,
    b: 200,
    title: "My nums",
};

multiplyByTwo(obj);

function multiplyByTwo(obj) {
    for (key in obj) {
     if (typeof obj[key] ===     "number") {
        obj[key] *= 2;
        }
    }
}
console.log(nums);