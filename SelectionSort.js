// Selection Sort - sorting things into order of smallest to largest most effeiciently. Done by looping over array, finding
//the smallest, putting it into the first index, and then looping through a subarray of the remaining elements. 
//Selectionsort() loops over indices in the array; for each index, selection sort calls indexOfMinimum() and swap()
function swap(array, firstIndex, secondIndex) { //swaps 2 elements
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

function indexOfMinimum(array, startIndex) { //finds the index of the smallest element in an subarray given a startIndex

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for (i = minIndex + 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};

function selectionSort(array) { //combines all the functions to sort a whole array
    var least;
    for (i = 0; i < array.length; i++) {
        least = indexOfMinimum(array, i);
        swap(array, i, least);
    }
};

var madlib = [22, 11, 99, 88, 9, 7, 42];
selectionSort(madlib); //sorting the array
console.log(madlib); //checking it again

