const removeFromArray = function(arr, ...arr1) {

    console.log(...arr)

    let secondArr = []
    secondArr.push(...arr1);
    console.log(secondArr)
    return arr.filter(remove => !secondArr.includes(remove))
};

removeFromArray([1, 5 , 5], 1, 5, 7)



// Do not edit below this line
module.exports = removeFromArray;
