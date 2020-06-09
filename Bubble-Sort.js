// Bubble Sort - iterate over each element and compare them to every element after them. If more than, swap elements


function bubbleSort(array) {
    let done = false; //set to incomplete

    while (!done) { //basically two loops. We for loop first to check elements, adjust, and then go through the while to enter the for again
        done = true //exit case
        for (let i = 1; i < array.length; i++) { 
            if (array[i] < array[i - 1]) { //compare each element to the one behind it, going through the entire array
                done = false; //if anything isn't in order, we're not done
                [array[i], array[i - 1]] = [array[i - 1], array[i]] //swap the elements
            }
          
        }
    } return array
}

let unsortedArray = [1, 5, 2, 123, 24, 0, 58, 77]
console.log(bubbleSort(unsortedArray))