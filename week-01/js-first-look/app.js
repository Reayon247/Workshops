console.log("hello world");
let myName = "Ryan";
console.log(myName);
let myAge = "24";
console.log(myAge);
let whoIam = "Im a Gamer";
console.log(myName + " " + myAge + " " + whoIam);
console.log(403 + 2034);
let numberOne = 80003;
let numberTwo = 28391;
console.log(numberOne + numberTwo);
numberOne = 99;
console.log(numberOne + numberTwo);
let numberThree = numberOne + numberTwo;
console.log(numberThree);
let lastName = "Nugent";
let fullName = myName + " " + lastName;
console.log(fullName + " " + myAge);
console.log(`${fullName} is epic`);
console.log(`${fullName} is ${fullName.length} letters long epic`);
let isTrue = true;
console.log(`The type of data isTrue is ${typeof isTrue}`);
console.log(`The type of data my name is a ${typeof fullName}`);
let a = 5;
let b = 10;
let isAGreaterthanB = a > b;
let isALessthanB = a < b;
let isAequaltoB = a === b;

console.log(isAGreaterthanB);
console.log(`Is ${a} greater than ${b}?`, isAGreaterthanB);

const sentance = `My name is ${fullName}. ${whoIam} LETSS GOOOOOO `;
console.log(sentance);

// exploring if, else and if else
// == equal === strict != not equal !== strict

let age = 10;
const legalDrivingAge = 17;

if (age > legalDrivingAge) {
  console.log("You can drive!!");
}

age = 18;

if (age > legalDrivingAge) {
  console.log("You can drive!!");
}

let isRoadLegal = false;

if (age > legalDrivingAge) {
  isRoadLegal = true;
}

console.log(`Am I road legal? ${isRoadLegal}`);

if (age > legalDrivingAge) {
  console.log("You are legal!!");
} else {
  console.log("YOU CANT DRIVE HAHAHAH");
}

age = 6;

if (age > legalDrivingAge) {
  console.log("You are legal!!");
} else {
  console.log("YOU CANT DRIVE HAHAHAH");
}

age = 15;
let movieRating = "PG";

if (age > 17) {
  console.log("you can watch any movie");
} else if (age >= 15 && age <= 17) {
  console.log("you can watch a 15 movie but not an 18!");
} else if (age >= 12 && age <= 14) {
  console.log("You can watch a 12 rated movie but not a 15 or 18!");
} else console.log("You need a parent to watch a PG or you can watch A U film");
