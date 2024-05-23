// // Map, Filter, Reduce
// //  Polyfill for Map, Filter, Re0duce
// //  Map vs ForEach
// // Practice on Arrays also in last

// // 1. Map -- The map() method is used for creating a new array 
// //           from an existing one, applying a function to each one of the elements of the first array.


// const count = [1, 2, 3, 4, 5, 6, 7]

// // count = current element, i = index, arr = acutal array
// const threeMultipleCount = count.map( (count, i, arr) => {       
//      count = count * 3 + i
//     return count
// })
// console.log(threeMultipleCount);



// // 2. Filter -- The filter() method takes each element in an array and it applies a conditional statement
// //              against it. If this conditional returns true, the element gets pushed to the output array.
// //              If the condition returns false, the element does not get pushed to the output array.


// const count1 = [1, 2, 3, 4, 5]

// const greterThanTwo = count1.filter( (count1, i, arr) => {
//     count1 =  count1 > 2
//     return count1
// })
// console.log(greterThanTwo);

// // 3. Reduce -- The reduce() method reduces an array of values down to just one value. 
// //              To get the output value, it runs a reducer function on each element of the array.

// //  accumulator - the returned value of the previous iteration
// // currentValue - the current item in the array
// // index - the index of the current item
// // array - the original array on which reduce was called 

// const count2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const sum = count2.reduce( (acc, curr, i, arr) => {
//     return acc + curr;
// },0)

// console.log(sum);




// *************************************||************************************************

//  Prototype allows you to add new properties and methods to arrays.

// // 1. Polyfill for map()
// Array.prototype.myMap = function (cb) {
//     let temp = [];
//     for (let i = 0; i < array.length; i++) {
//         temp.push(cb(this[i], i, this));
        
//     }
//     return temp;
// }

// const count = [1, 2, 3, 4, 5]
// const twoMultiCount = count.map( (count,i, arr) => {
//     return count = count * 2 + i
// })
// console.log(twoMultiCount);


// // 2. Polyfill for filter()
// array.prototype.myFilter = function (cb){
//     let temp = []
//     for (let i = 0; i < array.length; i++) {
//         if (cb(this[i], i, this))temp.push(this[i])
//     }
//     return temp;
// }
// const count1 = [1, 2, 3, 4, 5]

// const greterThanTwo = count1.myFilter( (count1, i, arr) => {
//     count1 =  count1 > 2
//     return count1
// })
// console.log(greterThanTwo);

// // 3. Polyfill for reduce()
// Array.prototype.myReduce = function (cb, initialValue){
//     var accumulator = initialValue;

//     for(let i=0; i<this.length; i++ ){
//         accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//     }
//     return accumulator;
// }
// const count2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const sum = count2.myReduce( (acc, curr, i, arr) => {
//     return acc + curr;
// },0)

// console.log(sum);

// //////////////////////////////  Practice on Arrays   ////////////////////////////////////////////////

// // Q1. what is diff btw Map and forEach
// const sum = [10, 2, 3, 4, 5, 65]

// const multiThree = sum.map((ar) => {
//     ar = ar * 3
//     return ar
// })

// const forEachResult = sum.forEach((ar, i) => {
//     sum[i] = ar + 3
// })

// console.log(multiThree, forEachResult, sum);


// Q2. Give the names in capital letters
let students = [
    {name: "Ashish", rollNumber: 31, marks: 80},
    {name: "Rohan", rollNumber: 25, marks: 50},
    {name: "Dakshash", rollNumber: 11, marks: 45},
    {name: "Piyush", rollNumber: 3, marks: 35},
];
// can be solve with FOR, forEach, Map
// // with FOR loop
// let info = [];
// for(let i=0; i<students.length; i++){
//     info.push(students[i].name.toUpperCase());
// }
// console.log(info);

// with forEach loop
const info = students.map((stu) => stu.name.toUpperCase());
console.log(info);