// Currying -- is a technique in functional programming where a function with multiple arguments
//  is transformed into a sequence of functions, each taking a single argument. 
// This technique allows for more flexibility and reusability of the code.

// // 1. Example f(a, b) into f(a)(b)
// function f(a){
//     return function (b){
//         return `${a} + ${b} = ${a+b}`
//     };
// };
// console.log(f(5)(6));

// // 2. Sum(2)(6)(5)
// function sum(a){
//     return function (b){
//         return function (c){
//             return a+b+c;
//         }
//     }
// }
// console.log(sum(2)(6)(5));

// // 3. evalute("sum")(4)(2) => 6
// //  evalute("multiply")(4)(2) => 8
// //  evalute("divide")(4)(2) => 2
// //  evalute("subtract")(4)(2) => 2

// function evalute(operation){
//     return function (a){
//         return function (b){
//             if (operation === "sum") return a + b;
//             else if (operation === "divide") return a / b;
//             else if (operation === "substract") return a - b;
//             else if (operation === "mulitif") return a * b;
//             else return "Invalid Operation"
//         };
//     };
// }
// const mul = evalute("mulitply");

// console.log(mul(3)(5));
// console.log(mul(2)(6));

// 4. Difference btw Currying and Partial Application
function sum(a){
    return function (b,c){
        return a + b + c;
    };
}

const x = sum(15);
console.log(x(5,6));
console.log(x(3,2));

// or 
console.log(sum(20)(1,4));

function sum(a){
    return function(b){
        return function (c){
            return a + b + c;
        };
    };
};
console.log(sum(50)(1, 4));