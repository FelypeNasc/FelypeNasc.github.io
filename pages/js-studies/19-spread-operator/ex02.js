const nums0 = [2, 3, 5, 6]
const nums1 = [3, 2, 5, 10]

function concat(...arr) {
    return arr
}

console.log(concat(...nums0, ...nums1))