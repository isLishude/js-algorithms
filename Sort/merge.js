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
console.log(res)