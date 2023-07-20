const findTheOldest = function(arr) {
    const date = new Date()
    let year = date.getFullYear();
    let age = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].hasOwnProperty("yearOfDeath")  === false) {
            arr[i]["yearOfDeath"] = year;
        }

        age.push(arr[i]["yearOfDeath"] - arr[i]["yearOfBirth"]);
        
    }
    let olderName = ""
    let maxAge = Math.max(...age)
    for (let j = 0; j < age.length; j++) {
        if (maxAge === age[j]) {
            olderName =  arr[j]
        } 
    } 
    return olderName;

};




const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  const people2 = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

//   console.log(people[1]["yearOfDeath"])

console.log(findTheOldest(people2));
// Do not edit below this line
module.exports = findTheOldest;
