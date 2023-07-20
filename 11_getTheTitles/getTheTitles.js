const getTheTitles = function(arr) {
    let titleArr = [];
    for (let i = 0; i < arr.length; i++) {
        titleArr.push(arr[i]["title"])
}
return titleArr
};



const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

console.log(getTheTitles(books))


// Do not edit below this line
module.exports = getTheTitles;
