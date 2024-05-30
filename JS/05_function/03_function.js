// // 1. what is Function declaration
// function sum(num) {
//     return num * num
// }        

// // 2.  what is Function Expersion.
// const square1 = function (num) {           // this is called Anonymous function -- The function which that does not have any name associated with it.
//     return num * num
// }
// console.log(square1(8));

// // 3. what are First class Function ?   
// // --if functions in that language are treated like other variables. So the functions can be assigned
// //    to any other variable or passed as an argument or can be returned by another function. 
// function square2(mul){
//     return mul * mul
// }

// function doubleSq (fn) {
//     console.log( "square is" + fn(4));
// }
// console.log(square2);


// 4. What is IIFE  ?   ( ) ( )
(function sqa (num){
    console.log(num * num);
}) (5)