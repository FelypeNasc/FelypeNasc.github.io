let i = 0;
const nums = [2, 1, 4, 5, 1, 30, 23, 13, 43];

function printMatrix (arr) {
    if (i != arr.length) {
        console.log(arr[i])
        i++
        printMatrix(arr)
    }
}

printMatrix(nums);