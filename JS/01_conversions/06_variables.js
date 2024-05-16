// // 1. Scope variables
// var a = 455555;
// function add(){
   
   
// }
// console.log(a);
// add()


// // 2.  Variable Shadowing
//  function test(){
//     var a = 5;
//     let b = 77;


//     if(true){
//         let a = 10;
//         var b = 66;
//         console.log(a);
//         console.log(b);
//     }  
//  }
//  test()

// // 3.  Declaration and Re-Initiialisation 
// //  var add let can be updated but const not  || let and const can't be declare in same scope
// var  a = 5;
// a = 5;

// let b = 9;
// b = 6;

// const c = 3;
// c = 3;

// 4. Hoisting
// var count;
// console.log(count);
// count = 1;

// console.log(count);
// let count = 1;   // output is unaviable


// 5. example  output is unaviable
function abc(){
    console.log(a,b,c);
   
    const b = 20;
    var a = 10;
    let c = 5;
    
}
abc ()



