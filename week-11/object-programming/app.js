class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }

  poop() {
    console.log(`${this.name} poops.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak();
dog.poop();

class Bird extends Animal {
  speak() {
    console.log(`${this.name} chirps.`);
  }

  fly() {
    console.log(`${this.name} flies.`);
  }
}

const bird = new Bird("Sparrow");
bird.speak();
bird.poop();
bird.fly();

// =====================================================================================================

class weapon {
  constructor(name, damage) {
    this.name = name;
    this.damage = damage;
  }
  dmgstat() {
    console.log(
      `This weapon is called ${this.name} and does ${this.damage} damage`
    );
  }
}

const gun = new weapon("Legend", 9999);

gun.dmgstat();

class sword extends weapon {
  constructor(name, damage, swingSpeed) {
    super(name, damage);
    this.swingspeed = swingSpeed;
  }
  attackSpeed() {
    console.log(`${this.name}'s attack speed is ${this.swingspeed}`);
  }
}

const excalibur = new sword("excalibur", 100000, 50);

excalibur.dmgstat();
excalibur.attackSpeed();
