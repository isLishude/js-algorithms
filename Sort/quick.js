const fn = require("../fn")

function quickSort(array) {
    // 分片
    function partition(array, left, right) {
        var p = array[Math.floor((right + left) / 2)];
        while (left <= right) {
            while (array[left] < p) {
                left++
            }

            while (array[right] > p) {
                right--
            }

            if (left <= right) {
                fn.swap(array, left, right)
                left++;
                right--;
            }
        }
        return left
    }

    // 快排
    function quick(array, left, right) {
        if (array.length <= 1) return;
        var index = partition(array, left, right)

        if (left < index - 1) {
            quick(array, left, index - 1)
        }

        if (right > index) {
            quick(array, index, right)
        }
    }
    quick(array, 0, array.length - 1);
};

function quickSort2(arr) {

    function partition(arr, left, right) {
        // 随机选择一个然后与第一个交换
        let random = Math.floor(Math.random() * (right - left + 1)) + left
        fn.swap(arr, random, left)

        // 常规快排
        // 选择一个对比量
        // let j = left;
        // for (let i = left + 1; i <= right; i++) {
        //     if (arr[i] < p) {
        //         fn.swap(arr, i, ++j)
        //     }
        // }
        // fn.swap(arr, left, j)
        // return j

        // 二路快排
        let li = left + 1;
        let ri = right;
        let p = arr[left];
        while (true) {
            while (li <= right && arr[li] < p) li++;
            while (ri >= left + 1 && arr[ri] > p) ri--;
            if (li > ri) break;
            fn.swap(arr, li, ri)
            li++;
            ri--;
        }

        fn.swap(arr, left, ri)
        return ri
    }

    function __quickSort(arr, left = 0, right = arr.length - 1) {
        if (left >= right) return;
        let p = partition(arr, left, right);

        __quickSort(arr, left, p - 1)
        __quickSort(arr, p + 1, right)
    }

    __quickSort(arr)
}

var test = fn.getArray(10, 10)
quickSort2(test)
fn.test(test)
