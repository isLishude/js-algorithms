function getRandom(max) {
    const random = Math.random();
    return Math.floor(max * random + 1)
}

function getArray(len = 100, max = 100) {
    const arr = [];
    while (arr.length < len) {
        const random = getRandom(max)
        arr.push(random)
    }
    return arr
}
module.exports = getArray;