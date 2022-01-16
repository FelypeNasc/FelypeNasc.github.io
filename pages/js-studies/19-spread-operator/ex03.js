function sortGreatestInTen() {
    nums = []
    for(let i = 0; i < 10; i++) {
        nums.push(Math.round(Math.random() * (100 - 1) + 1))
    }
    return Math.max(...nums)
}

console.log(sortGreatestInTen())