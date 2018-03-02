const arr = [];
const length = 10;
for (let i = 1; i <= length; i++) {
    arr.push(i)
}

// 循环
function binarySearch(arr, target, len = arr.length) {
    let l = 0, r = len - 1;
    while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2);
        if (arr[mid] == target) return mid;
        if (arr[mid] > target) r = mid - 1;
        if (arr[mid] < target) l = mid + 1;
    }
    return -1;
}

// 递归
function bs2(arr, target, left = 0, right = arr.length - 1) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return bs2(arr, target, 0, mid - 1)
    } else if (arr[mid] < target) {
        return bs2(arr, target, mid + 1, arr.length - 1)
    } else {
        return -1;
    }
}

const res = binarySearch(arr, 5)
const res2 = bs2(arr, 5)
console.log(res, res2)

