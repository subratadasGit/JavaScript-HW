// Create a JavaScript function to find the median of an array of numbers. Test your
// function on arrays containing both odd number and even number of elements.

function findMedian(arr) {

    arr.sort((a, b) => a - b);

    const length = arr.length;

    //  middle floor value
    const middle = Math.floor(length / 2);

    if (length % 2 !== 0) {
        return arr[middle];
    } else {
 
        return (arr[middle - 1] + arr[middle]) / 2;
    }
}

//  odd-length array
let oddArray = [3, 1, 4, 1, 5, 9, 2];
console.log("Median of odd array:", findMedian(oddArray)); 

//  even-length array
let evenArray = [10, 3, 4, 1, 2, 6];
console.log("Median of even array:", findMedian(evenArray));
