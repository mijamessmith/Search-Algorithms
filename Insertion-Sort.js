// Insertion Sort. Adding a new card to an ordered deck
    //first draft, given a rightIndex that marks where an array is sorted to, insert a value into the sorted array
var insert = function (array, rightIndex, value) {
    var key;
    for (key = rightIndex; key >= 0 && array[key] >= 0; key--) {
        array[key + 1] = array[key];
    } array[key + 1] = value;
    return array;
};

//call the function on each member of an array+
var insertionSort = function (array) {
    for (var k = 1; k < array.length; k++) {
        insert(array, k - 1, array[k]);
    }
};

/*To sum up the running times for insertion sort:
Worst case: Θ(n^2)
Best case: Θ(n)
Average case for a random array: Θ(n^2)
"Almost sorted" case: Θ(n) */

