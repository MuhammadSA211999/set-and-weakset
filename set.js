// SET like array
// refference data rakhar jonno set bebohar kora hoy
//refference unique data store korar jonno set bebohar kora hoy
// set iterable holeo set er order nai
// SET AND ARRAY is not same method
// set e for of loop calonu zay
function log(value) {
    return console.log(value);
}
const myArray = [] // array literal syntex 
const arrayTwo = new Array() // array er constructor syntax
// SET USES IN MATHMATICAL OPERATION 
// make a unique value array from an existing array 
const numbers = [1, 2, 3, 4, 4, 5, 6, 2, 1, 6, 7, 8, 6, 7, 9, 0]
// make a the array unique:array to set
const setArray = new Set(numbers)
// convert setArray to an array:set to array
const uniqueArray = [...setArray]
//log(uniqueArray)=>[1,2,3,4,5,6,7,8,9,0]
let a = new Set([1, 2, 3])
let b = new Set([4, 2, 3])
const union = new Set([...a, ...b])
log(union)//=>[1,2,3,4]
const intersection = new Set([...a].filter(x => b.has(x)))
log(intersection)//=>{2,3}
const difference = new Set([...a].filter(x => ![...b].includes(x)))
log(difference)//{1}
const difference2 = new Set([...a].filter(x => !b.has(x)))
console.log(difference2);//{1}
// const difference2 = new Set([...b].filter(x => !a.has(x)))
//console.log(difference2);//{4}

//WEAK SET 

