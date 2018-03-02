const fn = require("../fn")

function shiftDown(arr, pos, len = arr.length) {
    while (pos * 2 + 1 < len) {
        let j = 2 * pos + 1;
        if (j + 1 < len && arr[j] < arr[j + 1]) j++;
        if (arr[pos] >= arr[j]) break;
        fn.swap(arr, pos, j)
        pos = j;
    }
}

function heapSort(arr, len = arr.length) {
    console.log(arr)
    for (let i = Math.floor((len - 2) / 2); i >= 0; i--) {
        shiftDown(arr, i)
    }

    for (let i = len - 1; i > 0; i--) {
        fn.swap(arr, 0, i)
        shiftDown(arr, 0, i)
    }
    fn.test(arr)
    return arr
}

heapSort(fn.getArray(10, 100))