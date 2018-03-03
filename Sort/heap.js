const fn = require("../fn")

function shiftDown(arr, pos, len = arr.length) {
    // max heap shift down
    let x = arr[pos]
    while (pos * 2 + 1 < len) {
        let j = 2 * pos + 1;
        if (j + 1 < len && arr[j] < arr[j + 1]) j++;
        if (x >= arr[j]) break;
        arr[pos] = arr[j]
        pos = j;
    }
    arr[pos] = x;
}

function heapSort(arr, len = arr.length) {
    // heapify 
    for (let i = Math.floor((len - 2) / 2); i >= 0; i--) {
        shiftDown(arr, i)
    }
    // sorting
    for (let i = len - 1; i > 0; i--) {
        fn.swap(arr, 0, i)
        shiftDown(arr, 0, i)
    }
    // test
    fn.test(arr)
    return arr
}

heapSort(fn.getArray(10, 100))