
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


const dragonDamage = () => {
  return Math.floor(Math.random() * (50 - 15 + 1)) + 15;
}



const warriorDamage = () => {
  return Math.floor(Math.random() * (60 - 30 + 1)) + 30;
}


const mageDamageRound = () => {
const mageMana = mage.mana;
  const damage2 = {
    damage: 0,
    manaGasta: 0,
    }
    if (mageMana > 15) {
      damage2.manaGasta = 15;
    } else if(mageMana < 15) {
      damage2.manaGasta = 'Mana insuficiente';
    }
    const dano = Math.floor(Math.random() * (90 - 45 + 1)) + 45;
    damage2.damage = dano;
    return damage2;
  }

  const gameActions = {
   warriorAttack: () => {
   const warriorDano = warriorDamage();
   dragon.healthPoints = dragon.healthPoints - warriorDano;
   warrior.damage = warriorDano;
   },
   mageAttack: () => {
    const mageDano = mageDamageRound().damage;
    dragon.healthPoints = dragon.healthPoints - mageDano;
    mage.damage = mageDano;
   },
   dragonAttack: () => {
    const dragonDano = dragonDamage();
    warrior.healthPoints -= dragonDano;
    mage.healthPoints -= dragonDano;
    dragon.damage = dragonDano;
   },
   tunrAttack: () => battleMembers

  };

  gameActions.warriorAttack(warriorDamage)
  gameActions.mageAttack(mageDamageRound);
  gameActions.dragonAttack(dragonDamage)
  console.log(gameActions.tunrAttack());
  // console.log(gameActions.mageAttack(mageDamageRound))

