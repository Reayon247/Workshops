console.log("Hello World");

const person = {
  name: "Ryan",
  Age: 24,
  favouriteColour: ["Cyan", "Golden Yellow"],
};

console.log(person);
console.log(person.name);
console.log(person.favouriteColour[1]);

// console.table(person); -- adds the data in table form

// You can add to the table using dot notation
person.favouritePerson = "Emily";

console.log(person);

const Tank = {
  name: "Challenger 2",
  countryOrigin: "Britain",
  gunSize: "120mm",
  seatPositions: ["Driver", "Gunner", "Loader", "Commander"],
  isItAGoodTank: function (myOpinion) {
    console.log(`It is a ${myOpinion} tank`);
  },
  getName: function () {
    return this.name;
  },
};

console.log(Tank);
console.log(Tank.seatPositions.length);

console.log(`There are ${Tank.seatPositions.length} seats in a ${Tank.name}:`);
for (let seats of Tank.seatPositions) {
  console.log(seats);
}

Tank.isItAGoodTank("good");
Tank.isItAGoodTank("bad");

const tankName = Tank.getName();

console.log(tankName);
