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
function dragonAttack() {
  const min = 15;
  const max = dragon.strength;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* console.log(`Dragon attack: ${dragonAttack()}`); */

// Exercício 2
function warriorAttack() {
  const min = warrior.strength;
  const max = warrior.strength * warrior.weaponDmg;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* console.log(`Warrior attack: ${warriorAttack()}`); */

// Exercício 3
function mageAttack() {
  const mana = mage.mana;
  const minDamage = mage.intelligence;
  const maxDamage = minDamage * 2;

  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Não possui mana suficiente',
  };

  if (mana >= 15) {
    const mageDamage = Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
  }

  return turnStats;
}

/* console.log(`Mage attack: ${mageAttack().damageDealt}`); */

// Parte II

const gameActions = {
  // Exercício 1
  warriorTurn: (attack) => {
    const warriorDmg = attack();
    warrior.damage = warriorDmg;
    dragon.healthPoints -= warriorDmg;
  },

  // Exercício 2
  mageTurn: (attack) => {
    const mageTurnStats = attack();
    const mageDmg = mageTurnStats.damageDealt;
    const { manaSpent } = mageTurnStats;
    dragon.healthPoints -= mageDmg;
    mage.damage = mageDmg;
    mage.mana -= manaSpent;
  },

  // Exercício 3
  dragonTurn: (attack) => {
    const dragonDmg = attack();
    mage.healthPoints -= dragonDmg;
    warrior.healthPoints -= dragonDmg;
    dragon.damage = dragonDmg;
  },

  // Exercício 4
  results: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.results());
