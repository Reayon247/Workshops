console.log("hello world");

function sayHello() {
  console.log("Hello world");
}
sayHello();

let nameOne = "Gamer";
let greetingOne = "Hola";

function sayHelloTo(greeting, userName) {
  console.log(`${greeting} ${userName}!`);
}
sayHelloTo("Wassup", "Ryan");
sayHelloTo("Greetings", "Bella");
sayHelloTo("AHHH RUN ITS", "Willow");
sayHelloTo(greetingOne, nameOne);

function addNumbers(a, b) {
  return a + b;
}

const sum1 = addNumbers(20, 3);
console.log(sum1);

function quickAdd(num1, num2) {
  console.log(num1 + num2);
}

quickAdd(40, 60);
quickAdd(20, 40);
quickAdd(12, 49);

let BroName = "Oli"; //global scope

function otherName() {
  //block scope
  let BroName = "philip";

  console.log(BroName);
}

console.log(BroName);
otherName();
