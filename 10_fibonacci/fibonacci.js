const fibonacci = function(num) {
    let arr = [1, 1];
    let newNum;
    if(num > 0) {
        for (let i = 0; i < 30; i++){
            newNum = arr[i] + arr[i + 1];
            arr.push(newNum)
        }
    } else {
        return "OOPS"
    }

    return arr[num - 1]
};



console.log(fibonacci(8))

// Do not edit below this line
module.exports = fibonacci;
