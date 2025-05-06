console.log("hello world");

// for loops

for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}

//Looping with arrays

const foods = ["pizza", "chips", "ice cream", "steak", "cheese"];

for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

for (let food of foods) {
  console.log(food);
}

const favouriteNumbers = [4, 8, 15, 16, 23, 42, Infinity];
for (let number of favouriteNumbers) {
  console.log(number);
}

const cats = ["Bella", "Willow", "Nala"];

cats.forEach(function (cat, index) {
  console.log(cat, index);
});

const tanks = [
  "Challenger 2",
  "Leopard 2A6",
  "T90",
  "ADATS",
  "Panstir",
  "Tor M1",
  "Warrior",
  "Abrams",
];

tanks.forEach(function (tank, index) {
  console.log(index, tank);
});
