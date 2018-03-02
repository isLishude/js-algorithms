const fn = require("../fn")

function mergeSort(arr) {
    // 归并
    function __merge(left, right) {
        let leftLen = left.length,
            rightLen = right.length;
        let res = []
        let li = 0,
            ri = 0;
        // 对左右进行排序
        while (li < leftLen && ri < rightLen) {
            if (left[li] >= right[ri]) {
                res.push(left[li++])
            } else {
                res.push(right[ri++])
            }
        }
        // 对剩余内容排序
        while (li < leftLen) {
            res.push(left[li++])
        }
        while (ri < rightLen) {
            res.push(right[ri++])
        }
        return res
    }
    // 转化
    function __mergeSort(arr) {
        let len = arr.length
        if (1 === len) return arr
        let mid = Math.floor(len / 2)
        let left = arr.slice(0, mid)
        let right = arr.slice(mid)
        return __merge(__mergeSort(left), __mergeSort(right))
    }
    return __mergeSort(arr)
}

let res = mergeSort(fn.getArray(10, 100))
// console.log(res)


function mergeSort2(arr) {

    function merge(arr, l, mid, r) {
        let len = r - l + 1;
        let tmp = [];
        // 复制
        for (let i = 0; i < len; i++) {
            tmp[i] = arr[i]
        }

        let li = l, ri = mid + 1;
        for (let k = l; k <= r; k++) {
            if (li > mid) {
                arr[k] = tmp[ri - l]
                ri++
            } else if (ri > r) {
                arr[k] = tmp[li - l]
                li++
            } else if (tmp[li - l] < tmp[ri - l]) {
                arr[k] = tmp[li - l]
                li++
            } else {
                arr[k] = tmp[ri - l]
                ri++
            }
        }
    }

    function __mergeSort(arr, li = 0, ri = arr.length - 1) {
        if (li >= ri) return;
        let mid = Math.floor((li + ri) / 2);
        __mergeSort(arr, li, mid);
        __mergeSort(arr, mid + 1, ri);
        if (arr[mid] > arr[mid + 1])
            merge(arr, li, mid, ri)
    }

    __mergeSort(arr)
}

let test = fn.getArray(10, 100);
// 原数组
console.log(test)
mergeSort2(test)
// 排序后
console.log(test)
// 测试
fn.test(test)

