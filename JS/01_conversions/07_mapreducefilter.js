// Map, Filter, Reduce

// 1. Map -- The map() method is used for creating a new array 
//           from an existing one, applying a function to each one of the elements of the first array.


const count = [1, 2, 3, 4, 5, 6, 7]

// count = current element, i = index, arr = acutal array
const threeMultipleCount = count.map( (count, i, arr) => {       
     count = count * 3 + i
    return count
})
console.log(threeMultipleCount);



// 2. Filter -- The filter() method takes each element in an array and it applies a conditional statement
//              against it. If this conditional returns true, the element gets pushed to the output array.
//              If the condition returns false, the element does not get pushed to the output array.


const count1 = [1, 2, 3, 4, 5]

const greterThanTwo = count1.filter( (count1, i, arr) => {
    count1 =  count1 > 2
    return count1
})
console.log(greterThanTwo);

