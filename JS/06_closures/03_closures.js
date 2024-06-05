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

// // 3. What is Closure Scope Chain   -- it have access to outer scope as well as scope of parent
// // global scope
// var e = 20;
// function add(a){
//     return function(b){
//         return function(c){
//             // outer scope
//             return function(d){
//                 // local scope
//                 return a + b + c + d + e;
//             }
//         }
//     }
// }
// console.log(add(2)(8)(52)(20));

// // 4. What is output ?
// let count = 0;
// (function printCount(){
//     if(count === 0){        // outer scope
//         let count = 1;      // inner scope
//         console.log(count);
//     }
//     console.log(count);
// })(1000);                   // output is 1 and 0


// 5. How would you use a closure to create a Private Counter ?
// --- we are not directly manupulating counter we are using function to manupulate the value of counter 
function counter () {
    var _counter = 0;

    function add(increment){
        _counter += increment;
    }
    function retrive (){
        return "counter = " + _counter;
    }
    return {
        add,
        retrive
    }
}

const c = counter ();
c.add (5);
c.add (10);

console.log(c.retrive());

// // 6. write a function that allows to do this a
// var addSix = createBase(8);
// addSix(10);
// addSix(215);

// function createBase(num){
//     return function (innerFn){
//         console.log(num + innerFn);
//     }
// }