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

// // 2. what is output of this data
// let nums = {
//     a: 100,
//     b: 200,
//     title: "My nums",
// };
// multiplyByTwo(nums);

// function multiplyByTwo(obj) {           // loop object can be done by (key in obj)
//     for (key in obj) {
//      if (typeof obj[key] === "number") {
//         obj[key] *= 2;
//         }
//     }
// }
// console.log(nums);


// // 3. what is output of this data
// const a = {};
// const b = { key: "b"};
// const c = { key: "c"};

// a[b] = 123;
// a[c] = 456;
// // bcz it is assign as -- {[object Object]: 456} 
// // both a[b] = 123; and a[c] = 456; overlaps each other and found object object
// console.log(a[b]);


// 4. What is JSON.strigify and JSON.parse ?
const user = {
    naam: "Ashish",
    age: 29,
}

const strObj = JSON.stringify(user);  // JSON.stringify will put all data in String form

console.log(JSON.parse(strObj));    //JSON.parse will put all data from String to Object
