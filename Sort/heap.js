const fn = require("../fn")

function shiftDown(arr, pos) {
    const len = arr.length;
    // console.log("shiftDown")
    while (pos * 2 + 1 < arr.length) {
        let j = 2 * pos + 1;
        if (j + 1 < len && arr[j] < arr[j + 1]) j++;
        if (arr[pos] >= arr[j]) break;
        fn.swap(arr, pos, j)
        pos = j;
    }
}

function extrac(arr) {
    let res = arr[0];
    let len = arr.length;
    arr[0] = arr[len - 1];
    arr.pop();
    shiftDown(arr, 0);
    return res;
}

function heapSort(arr) {
    let len = arr.length
    console.log(arr)
    for (let i = Math.floor((len - 2) / 2); i >= 0; i--) {
        shiftDown(arr, i)
    }

    for (let i = len - 1; i > 0; i--) {
        fn.swap(arr, 0, i)
        shiftDown(arr, 0)
    }
    console.log(arr)
}

heapSort(fn.getArray(10, 10))