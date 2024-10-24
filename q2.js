// Create a JavaScript function that takes an array of integers and returns an array with
// all duplicate numbers removed preserving the order of the elements.

function removeDuplicates(arr) {

    let seen = new Set();

    return arr.filter(num => {
     
        if (!seen.has(num)) {
            seen.add(num);
            return true;
        }
 
        return false;
    });
}


let arrayWithDuplicates = [3, 1, 4, 1, 2, 3, 5, 4];
console.log("Array without duplicates:", removeDuplicates(arrayWithDuplicates));

