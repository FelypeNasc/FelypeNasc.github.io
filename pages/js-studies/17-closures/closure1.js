const multiplyByWhat = function multiplyBy(multiplier){
    return function byMultiplier (number) {
        return number*multiplier
    }
};

const multiplyBy2 = multiplyByWhat(2)
const multiplyBy10 = multiplyByWhat(10)
console.log(multiplyBy2(20))
console.log(multiplyBy10(20))