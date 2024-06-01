// Closures -- A closure is the combination of a function bundled together (enclosed) with references to its surrounding
//  state (the lexical environment). In other words, a closure gives you access to an outer function's 
//  scope from an inner function.  
// ** In JavaScript, closures are created every time a function is created, at function creation time. **

// 1. what is Lexical Scope

// // global scope
// function subscribe(){                
//     let naam = "Ashish Bhardwaj";
//     // inner scope
//     function displayNaam(){
//         // inner scope
//         console.log((naam));

//     }
//     displayNaam()
// }
// subscribe()

// // 2. what is closure ?

// function makeFun(){
//     var data = "VS code";
//     function displayData(num){
//         console.log(data, num);
//     }
//     return displayData;
// }

// makeFun()(5);

// 3. What is Closure Scope Chain   -- it have access to outer scope as well as scope of parent

var e = 20;
function add(a){
    return function(b){
        return function(c){
            return function(d){
                return a + b + c + d + e;
            }
        }
    }
}
console.log(add(2)(8)(52)(20));