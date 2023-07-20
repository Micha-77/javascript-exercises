const palindromes = function (string) {
    let firstStr = string.replace(/[!,.\s]/g, "").toLowerCase()
    let secondStr = "";
    for (let i = firstStr.length - 1; i >= 0; i--) {
        secondStr += firstStr[i];
    }
    // secondStr.toLowerCase()
    // firstStr.toLowerCase()

    console.log(firstStr)
    console.log(secondStr)
    if (firstStr === secondStr) {
        return true
    }
    return false
    
};

// let str = "ZZZZ car, a man, a maracaz."

// console.log()

console.log(palindromes("Animal loots foliated detail of stool lamina."))
console.log(palindromes("ZZZZ car, a man, a maracaz."))



// Do not edit below this line
module.exports = palindromes;
