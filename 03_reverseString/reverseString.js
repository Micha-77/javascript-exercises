const reverseString = function(string) {
    let reversedStr = "";
    console.log(reversedStr)
    for (let i = (string.length -1); i >= 0; i--) {
        console.log(i)
        reversedStr = reversedStr + string[i]
    }
    
    console.log()
    return reversedStr;
};

// string.split("").reverse().join("")
reverseString("now")

// Do not edit below this line
module.exports = reverseString;
