function test(arr) {
    let len = arr.length

    for (let i = 0; i < len; i++) {
        if (i != len - 1 && arr[i + 1] < arr[i]) {
            console.log("测试失败！")
            console.log(arr[i], arr[i + 1])
            return false
        }
    }

    console.log("测试通过！")
    return true
}

module.exports = test