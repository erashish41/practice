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

// function square2 (fn) {
//     console.log( "square is" + fn(4));
// }
// console.log(square2);


// // 4. What is IIFE(Immediately invoked function expressions)  ?   ( ) ( )
// (function sqa (num){
//     console.log(num * num);
// }) (5)       // 25

// // Ex of IIFE
// (function (x){
//     return (function(y){
//         console.log(x);  // 1
//     })(2)
// })(1)

// // 5. Function Hoisting -- it means to move the declaration of functions, variables, classes, 
// //      or imports to the top of their scope, prior to execution of the code.

// hello()
// function hello(){
//     console.log("kida");
// }                  // kida

// console.log(x);
// var x = 5;        // undefined
// // in Funciton the complete function is copied to scope of Hoisting
// // in Variable of Hoisting the output will be undefined

// //  6. Params vs Arguments
// function ashish(boy){       // boy is params
//     console.log(boy * boy);
// }
// ashish(7);  // 7 is arguments

// //  7. Spread and  Rest Operator    -- both operator should be in position of last.
// function multi(...num1){
//     console.log(num1[0]*num1[1]);
// }
// var arr = [ 2, 3];
// multi (...arr);

// 8. Callback function -- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function
// ex - setTimeout, Map, Filter, Reduce

document.addEventListener("click", function(params) { })

// // 9. Arrow Function   
// const add = (num1, num2) => { 
//     return num1 + num2  
// }
// console.log(add (5,2));


// function square2 (fn) {
//     console.log( "square is" + fn(4));
// }
// console.log(square2);


function sum(a){
    return function (b){
        return function(c){
            return function (d){
                return a + b + c + d;
            }
        }
    }
}
console.log(sum(1)(2)(3)(4));
