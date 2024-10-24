// Design a JavaScript function insertIntoArray(arr, val, n) that receives an array ‘arr’, a
// value ‘val’, and an integer ‘n’ and returns an array with the value inserted at every nth
// position.
function insertIntoArray(arr, val, n) {e
    let result = [...arr];

  
    for (let i = n - 1; i < result.length; i += n + 1) {
        result.splice(i, 0, val);  
    }

    return result;
}

let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let valueToInsert = 'X';
let nthPosition = 4;

console.log("Original array:", originalArray);
console.log("Array after insertion:", insertIntoArray(originalArray, valueToInsert, nthPosition));

