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

var test = fn.getArray(100, 100)

quickSort(test)

fn.test(test)