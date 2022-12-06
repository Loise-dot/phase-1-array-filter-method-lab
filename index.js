// Code your solution here
//findMatching
let driver = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(arr, query) {
  return arr.filter(function (findMatching) {
    return findMatching.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
}

console.log(findMatching(driver, "Bobby"));
console.log(findMatching(driver, "Sammy"));
console.log(findMatching(driver, "Susan"));

let drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];

function fuzzyMatch(arr, testString) {
  return arr.filter(function (fuzzyMatch) {
    return fuzzyMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0;
  });
}

console.log(fuzzyMatch(drivers, "mm"));
console.log(fuzzyMatch(drivers, "Sa"));
console.log(fuzzyMatch(drivers, "y"));

//matchName
const drive = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];
function matchName(arr, string) {
  return arr.filter(function (matchName) {
    return matchName.name === string;
  });
}

console.log(findMatching(drive, "Bobby"));
console.log(findMatching(drive, "Sammy"));
