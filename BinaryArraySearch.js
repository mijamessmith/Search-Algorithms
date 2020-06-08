function BinarySearch(arr, start, end, key) {
    if (start > end) return -1;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === key) return mid;
    if (key > arr[mid]) {
        return BinarySearch(arr, mid + 1, end, key);
    } else return BinarySearch(arr, start, mid - 1, key);
}
let arr1 = [1, 3, 4, 5, 63]
BinarySearch(arr1, 0, arr1.length - 1, 5);




//A less good version
function binarySearch(array, targetValue) {
    let min = 0;
    let max = array.length - 1;
    let guess;
    function searchTree() {
        guess = Math.floor((max + min) / 2);
        if (array[guess] == targetValue) {
            return guess;
        } else if (max < min) {
            return -1;
        } else if (array[guess] < targetValue) {
            min = guess + 1;
            return searchTree();
        } else if (array[guess] > targetValue) {
            max = guess - 1;
            return searchTree();
        }
    } return searchTree();
}

let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

console.log(binarySearch(primes, 73));

//Same problem using a while loop
/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function (array, targetValue) {
    var min = 0;
    var max = array.length - 1;
    var guess;
    while (max >= min) {
        guess = Math.floor((max + min) / 2);
        if (array[guess] === targetValue) { return guess; }
        else if (array[guess] < targetValue) { min = guess + 1; }
        else { max = guess - 1; }
    }
    return -1;
};


var result = doSearch(primes, 73);
println("Found prime at index " + result);