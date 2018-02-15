const fn = require("../fn")

function insertionSort(arr) {
    console.log(arr)
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            fn.swap(arr, j, j - 1)
        }
    }
    console.log(arr)
}

function insertionSortOptimize(arr) {
    console.log(arr)
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let iVal = arr[i];
        let j;
        for (j = i; j > 0 && arr[j - 1] > iVal; j--) {
            arr[j] = arr[j - 1]
        }
        arr[j] = iVal;
    }
    console.log(arr)
}

insertionSortOptimize(fn.getArray(10, 10))
