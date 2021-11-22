// Parte I - Game Actions Simulator

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Exercício 1
function dragonDamage() {
  const min = 15;
  const max = dragon.strength;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(dragonDamage())

// Exercício 2
function warriorDamage() {
  const min = warrior.strength;
  const max = warrior.strength * warrior.weaponDmg;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(warriorDamage());