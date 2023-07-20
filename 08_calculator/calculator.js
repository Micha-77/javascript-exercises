const add = function(num1, num2) {
  let add = num1 + num2
  return add
};

const subtract = function(...arr) {
  let subt = arr[0] - arr[1]
  return subt
};

const sum = function(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] 
  }
	return sum;
};

const multiply = function(...arr) {
  let multi = 1
  for (let i = 0; i < arr.length; i++) {
    multi *= arr[i] 
  }
	return multi;
};

const power = function(...arr) {
	return Math.pow(arr[0], arr[1])
};

const factorial = function(num) {
  let arr = [];
  let factorial = 1
	for (let i = num; i > 0; i--) {
    arr.push(i)
  }
  for (let j = 0; j < arr.length; j++) {
    factorial *= arr[j]
  }
  return factorial
};

console.log("The add is " + add([0, 0]))
console.log("The sum is " + sum([1, 5, 4]))
console.log("The subtract is " + subtract([5, 4]))
console.log("The multiple is " + multiply([5, 4, 5]))
console.log("The power is " + power([2, 3]))
console.log("The factorial is " + factorial(5))


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
