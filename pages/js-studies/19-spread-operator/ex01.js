const nums = [2, 3, 5, 6]

function multiplyFour(w, x, y, z) {
    return w*x*y*z
}

console.log(multiplyFour(...nums))

// function multiplyFour(...n) {
//     result = n[0]
//     n.forEach((el) => {
//         result = result * el
//     });
//     return result
// }

// console.log(multiplyFour(...nums))