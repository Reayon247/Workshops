console.log("hello world");

function notifyUser() {
  console.log("notifyUser fuction was called!");
}

function goGetUser(notifyUserCallback) {
  console.log("Im gonna go get that function");
  notifyUserCallback();
}

// im setting the first function as an argument for the second function, so it knows what it is because of block scope.
// it then called upon that function inside the block scope using the new argument
goGetUser(notifyUser);

function TheStart(onSuccessParameter, onFailureParameter) {
  console.log("Time to decide!");

  const success = Math.random() > 0.5;
  if (success) {
    onSuccessParameter({
      message: "This is a success message",
    });
  } else {
    onFailureParameter();
  }
}

function onSuccess(data) {
  console.log("it was done, here is: ", data.message);
}

function onFailure() {
  console.log("it failed");
}

//parameters line up with the arguments, so in this case the success one needs to go first as i put the success first on parameters

TheStart(onSuccess, onFailure);

// here is the calculator from the example

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);
  console.log(
    "We might have code that saves the result to a log or a database"
  );

  return operationCallback(a, b);
}

const result = myCalculatorFunction(1, 2, add);
console.log(result); // Output: 3

const result2 = myCalculatorFunction(2, 3, multiply);
console.log(result2); // Output: 6

// add the two results together
const finalResult = myCalculatorFunction(result, result2, add);
console.log(finalResult); // Output: 9
