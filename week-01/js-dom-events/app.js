console.log("hello world");
const body = document.querySelector("body");
//this can also be done with document.getelementbyid but you need to give the body and id
console.log(body);
const h1 = document.querySelector("h1");
console.log(h1);

h1.textContent = "hello world!";

const h2 = document.createElement("h2");
h2.textContent = "THIS WAS MADE IN JS";
body.appendChild(h2);

// h1.remove();

//events

const myButton = document.querySelector("button");
// Done slightly different to the demo, it looks like instead of calling upon the function its just put the function inside of the parameters/argument
myButton.addEventListener("click", function (event) {
  console.log(event);
  const h1 = document.querySelector("h1");
  h1.textContent = "HELLLOOOO YOU PUSHED THE BUTTON";
});

const myList = document.createElement("ol");
const listOne = document.createElement("li");
const listTwo = document.createElement("li");

listOne.textContent = "ONE";
listTwo.textContent = "two";

body.appendChild(myList);
myList.appendChild(listOne);
myList.appendChild(listTwo);
