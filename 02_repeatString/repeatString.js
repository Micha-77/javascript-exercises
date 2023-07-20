const repeatString = function(string, num) {
    let concStr = ""
    if (num > 0) {
    for (let i = 0; i < num; i++) {
        concStr = concStr + string
    } } else if (num < 0) { return "ERROR"}

    return concStr;
};



// Do not edit below this line
module.exports = repeatString;
