// merge sort
//if an array is 2 or less, it's sorted
//otherwise cut it in half with two arrays 
//sort each subarray
//merge them together and return the merged array

//helped to merge two arrays

function mergeArrays(arr1, arr2) {
    //output array
    let output = []
    let i1 = 0;
    let i2 = 0;
    //index nums for both arrays, idxOne, inxTwo
    while (i1 < arr1.length && i2 < arr2.length) {
        if (arr1[i1] < arr2[i2]) {
            output.push(arr1[i1]);
            i1++
        } else if (arr1[i1] > arr2[i2]) {
            output.push(arr2[i2])
            i2++
        }
    } if (i1 >= arr1.length) {
        let extra1 = arr2.slice(i2)
        output.concat(extra1)
    } else if (i2 >= arr2.length) {
        let extra2 = arr1.slice(i1)
        output.concat(extra2)
    } return output
    //compare arr1 elm to 2, if smaller, push to output and inxOne++
    //else push 2 and indTwo ++
}

let test1 = [2, 4, 6, 8, 10]
let test2 = [1, 3, 5, 6, 7, 9, 11]

console.log(mergeArrays(test1, test2))

let test3 = [0, 1, 2, 3, 4, 5]
let test4 = [4, 5, 6, 7, 8, 9, 10, 11, 12]

console.log(mergeArrays(test3, test4))