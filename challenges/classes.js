// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(obj) {
    this.length = obj.length;
    this.width = obj.width;
    this.height = obj.height;
  }

  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}
const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(obj) {
    super(obj);
    this.color = obj.color;
    this.texture = obj.texture;
  }
}

const newCube = new CubeMaker({
  height: 5,
  width: 5,
  length: 5,
  color: "red",
  texture: "sandpapery"
});

console.log(newCube);

// super stretch

class Person {
  constructor(obj) {
    this.name = obj.name;
    this.powerlevel = obj.powerlevel;
    this.health = obj.health;
    this.dragonballs = obj.dragonballs;
  }
}

const krillin = new Person({
  name: "Krillin",
  powerlevel: 5,
  health: false,
  dragonballs: 0
});

const goku = new Person({
  name: "Goku",
  powerlevel: 9001,
  health: true,
  dragonballs: 7
});

const rollTheDice = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const reviveBadFriend = (hero, loser) => {
  if (!loser.health && hero.dragonballs >= 7) {
    if (rollTheDice(hero.dragonballs) > 3) {
      return `${
        hero.name
      } says, 'Shenron! I have collected all seven of the Dragon Balls and demand you to Revive Krillin!`;
    }
    return `${
      hero.name
    } says, 'Give Krillin a Sensu Bean -- I am going to use this dragon to revive Frieza.`;
  }
  return `${
    hero.name
  } says, 'We have to find more Dragon Balls before Krillin dies again...`;
};

console.log(reviveBadFriend(goku, krillin));
