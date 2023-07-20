const sumAll = function(num1, num2) {
    let arr = [];
    let sum = 0;
    if (typeof num1 === "number" && typeof num2 === "number" && num1 >= 0 && num2 >= 0) {
        if (num2 > num1) {
            for (let i = num1; i <= num2; i++) {
                arr.push(i)
                console.log(arr)
            }
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i]
            }
            return sum
        } else if (num1 > num2) {
            for (let i = num1; i >= num2; i--) {
                arr.push(i)
                console.log(arr)
            }
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i]
            }
            return sum
        }
        
    }
    return 'ERROR'

};

sumAll(123, 1);


sumAll(1, "4") 
console.log(typeof -10)


// Do not edit below this line
module.exports = sumAll;
