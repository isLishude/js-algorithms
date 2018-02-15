const fn = require("../fn")

function selectionSort(arr) {
    console.log(arr)
    const len = arr.length
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        fn.swap(arr, i, minIndex)
    }
    console.log(arr)
}

selectionSort(fn.getArray(10,10))