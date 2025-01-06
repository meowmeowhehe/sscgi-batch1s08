// Main Activity
/*
  - Refine Pokemon Game
  - Create activity folder
  - Write Pokemon Class with ff properties and methods:
    - 5 Pokemon Trainers
    - Properties: name, type, level, hp
    - Methods: attack, receiveDamage, heal, calculateDamage, powerUp
  - Create subClasses with unique attacks
    - e.g. ElectricPokemon, FirePokemon
    - override attack and heal with unique moves
  - Create Battle Simulation
    - enhance game with critical hits
    - defense boost when healing (temporary defense)
  - Challenging Task
    - Create battle tournament with multiple Pokemon
    - Explore OOP Concepts

  Grading:
    - Technical Skill
      - Understanding
*/

/*
  Pokemon Types:
    - normal
    - fighting
    - flying
    - poison
    - ground
    - rock
    - bug
    - ghost
    - steel
    - fire
    - water
    - grass
    - electric
    - psychic
    - ice
    - dragon
    - dark
    - fairy
    - stellar
    - shadow
*/

class Trainer {
  constructor(name, pokemonList) {
    this.name = name;
    this.pokemonList = pokemonList;
  }

  myPokemons() {
    console.log(`~ ${this.name}'s Pokemons ~`);
    this.pokemonList.forEach((pokemon) => {
      console.log(`\t~ ~ ~ ~ ~`);
      console.log(`\t\t[${pokemon.status}]`);
      console.log(`\t\tPokemon: ${pokemon.pokemon}`);
      console.log(`\t\tName: ${pokemon.name}`);
      console.log(`\t\tType: ${pokemon.type}`);
      console.log(`\t\tLevel: ${pokemon.level}`);
      console.log(`\t\tHP: ${pokemon.hp}`);
      console.log(`\t~ ~ ~ ~ ~`);
    });
    console.log(`~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~`);
  }
  usePokemon(name) {
    this.selectedPokemon;
    this.pokemonList.forEach((pokemon) => {
      this.selectedPokemon = pokemon.name == name ? name : "";
    });

    if (this.selectedPokemon === "") console.log("No pokemon found!");
    else console.log(`${name} selected!`);
  }
}
class Pokemon {
  constructor(name, type, level, maxHp, hp) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.maxHp = maxHp;
    this.hp = hp;
  }

  attack() {
    console.log(`${this.name} attacks!`);
  }
  receiveDamage(opponent, damage) {
    opponent.hp -= damage;
    console.log(`${opponent.name} remaining hp is ${opponent.hp}`);
  }
  calculateDamage(damage) {
    const healthRatio = this.hp / this.maxHp;
    const critChance = 1 - healthRatio;
    const isCriticalHit = Math.random() < critChance;
    const damageMultiplier = isCriticalHit ? 2 : 1;

    const damageDealt =
      Math.floor(Math.random() * damage * damageMultiplier) + 1;

    return damageDealt;
  }
  powerUp() {
    this.level += 1;
    this.maxHp = this.level * 10;
    this.hp = this.maxHp;

    console.log(
      `${this.name} powered up!\nNew Level: ${this.level}\nNew Max HP: ${this.maxHp}`
    );
  }
  heal() {
    const totalHealing = Math.floor(Math.random() * (this.level + 2)) + 1;

    this.hp =
      this.hp + totalHealing > this.maxHp ? this.maxHp : this.hp + totalHealing;
    console.log(`${this.name} healed ${totalHealing} hp!`);
    console.log(`${this.name} new hp is ${this.hp} hp!`);
  }
}

// Types of Pokemons
class NormalPokemon extends Pokemon {
  constructor(name) {
    super(name, "Normal", 1, 10, 10);
  }

  skill1(opponent) {
    super.attack();
    const totalDamage = this.calculateDamage(this.level * 1);

    console.log(`${this.name} uses HEADBUTT and deals ${totalDamage}`);
    super.receiveDamage(opponent, totalDamage);
  }
  skill2(opponent) {
    super.attack();
    const damageChance = Math.random() < 0.6;
    const damage = damageChance ? this.level * 3 : this.level * 1;
    const totalDamage = this.calculateDamage(
      Math.floor(Math.random() * damage) + 1
    );

    console.log(`${this.name} uses STOMP and deals ${totalDamage}`);
    super.receiveDamage(opponent, totalDamage);
  }
}
class BugPokemon extends Pokemon {
  constructor(name) {
    super(name, "Bug", 1, 10, 10);
  }

  skill1(opponent) {
    super.attack();
    const totalDamage = this.calculateDamage(this.level * 1);

    console.log(`${this.name} uses BUG-BITE and deals ${totalDamage}`);
    super.receiveDamage(opponent, totalDamage);
  }
  skill2(opponent) {
    super.attack();
    const damageChance = Math.random() < 0.6;
    const damage = damageChance ? this.level * 3 : this.level * 1;
    const totalDamage = this.calculateDamage(
      Math.floor(Math.random() * damage) + 1
    );

    console.log(`${this.name} uses INFESTATION and deals ${totalDamage}`);
    super.receiveDamage(opponent, totalDamage);
  }
}
class PsychicPokemon extends Pokemon {
  constructor(name) {
    super(name, "Psychic", 1, 10, 10);
  }

  skill1(opponent) {
    super.attack();
    const totalDamage = this.calculateDamage(this.level * 1);

    console.log(`${this.name} uses IMPRISON and deals ${totalDamage}`);
    super.receiveDamage(opponent, totalDamage);
  }
  skill2(opponent) {
    super.attack();
    const damageChance = Math.random() < 0.6;
    const damage = damageChance ? this.level * 3 : this.level * 1;
    const totalDamage = this.calculateDamage(
      Math.floor(Math.random() * damage) + 1
    );

    console.log(`${this.name} uses TRICK and deals ${totalDamage}`);
    super.receiveDamage(opponent, totalDamage);
  }
}
class FairyPokemon extends Pokemon {
  constructor(name) {
    super(name, "Psychic", 1, 10, 10);
  }

  skill1(opponent) {
    super.attack();
    const totalDamage = this.calculateDamage(this.level * 1);

    console.log(`${this.name} uses GEOMANCY and deals ${totalDamage}`);
    super.receiveDamage(opponent, totalDamage);
  }
  skill2(opponent) {
    super.attack();
    const damageChance = Math.random() < 0.6;
    const damage = damageChance ? this.level * 3 : this.level * 1;
    const totalDamage = this.calculateDamage(
      Math.floor(Math.random() * damage) + 1
    );

    console.log(`${this.name} uses MAX-STARFALL and deals ${totalDamage}`);
    super.receiveDamage(opponent, totalDamage);
  }
}
class SteelPokemon extends Pokemon {
  constructor(name) {
    super(name, "Psychic", 1, 10, 10);
  }

  skill1(opponent) {
    super.attack();
    const totalDamage = this.calculateDamage(this.level * 1);

    console.log(`${this.name} uses BULLET-PUNCH and deals ${totalDamage}`);
    super.receiveDamage(opponent, totalDamage);
  }
  skill2(opponent) {
    super.attack();
    const damageChance = Math.random() < 0.6;
    const damage = damageChance ? this.level * 3 : this.level * 1;
    const totalDamage = this.calculateDamage(
      Math.floor(Math.random() * damage) + 1
    );

    console.log(`${this.name} uses SMART-STRIKE and deals ${totalDamage}`);
    super.receiveDamage(opponent, totalDamage);
  }
}

// Battle
class Battle {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.pokemon1 = player1.pokemonList[Math.floor(Math.random() * 2)];
    player1.pokemonList.splice(player1.pokemonList.indexOf(this.pokemon1), 1);
    this.pokemon2 = player2.pokemonList[Math.floor(Math.random() * 2)];
    player2.pokemonList.splice(player2.pokemonList.indexOf(this.pokemon2), 1);
  }

  battle() {
    console.log("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~");
    console.log(`AutoBattle`);
    console.log(`${this.player1.name} vs ${this.player2.name}`);
    console.log(`${this.pokemon1.name} vs ${this.pokemon2.name}`);
    console.log("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~");

    let players = [this.player1, this.player2];
    let pokemons = [this.pokemon1, this.pokemon2];
    let turn = 0;

    while (true) {
      let move = Math.floor(Math.random() * 3);

      console.log(`\n~ ~ ~ ${pokemons[turn].name}'s turn ~ ~ ~`);
      switch (move) {
        case 0: // Skill 1
          pokemons[turn].skill1(pokemons[turn == 0 ? 1 : 0]);
          break;
        case 1: // Skill 2
          pokemons[turn].skill2(pokemons[turn == 0 ? 1 : 0]);
          break;
        case 2: // Heal
          if (pokemons[turn].hp == pokemons[turn].maxHp) {
            if (move == 0) pokemons[turn].skill1(pokemons[turn == 0 ? 1 : 0]);
            else if (move == 1)
              pokemons[turn].skill2(pokemons[turn == 0 ? 1 : 0]);
          } else {
            pokemons[turn].heal();
          }
          break;
      }

      turn = turn == 0 ? 1 : 0; // Turn of the other pokemon

      if (pokemons[turn].hp <= 0) {
        turn = turn == 0 ? 1 : 0; // Change to winner
        console.log("");
        console.log("~ ~ ~ ~ ~");
        console.log(`${players[turn].name} wins!`);
        pokemons[turn].powerUp();
        console.log("~ ~ ~ ~ ~");

        break;
      }
    }

    // console.log(player1_moves);
  }
}

// Pokemons
let pidgey = new NormalPokemon("Pidgey");
let meowth = new NormalPokemon("Meowth");
let vivillon = new BugPokemon("Vivillon");
let grubbin = new BugPokemon("Grubbin");
let solosis = new PsychicPokemon("Solosis");
let duosion = new PsychicPokemon("Duosion");
let togekiss = new FairyPokemon("Togekiss");
let cottonee = new FairyPokemon("Cottonee");
let tinkatink = new SteelPokemon("Tinkatink");
let varoom = new SteelPokemon("Varoom");

// Trainers
const jedd = new Trainer("Jedd", [duosion, varoom]);
const jun = new Trainer("Jun", [meowth, grubbin]);
const ken = new Trainer("Ken", [tinkatink, cottonee]);
const joeshua = new Trainer("Joeshua", [vivillon, togekiss]);
const jonas = new Trainer("Jonas", [pidgey, solosis]);

let trainers = [jedd, jun, ken, joeshua, jonas];

let player1 = trainers[Math.floor(Math.random() * trainers.length)];
trainers.splice(trainers.indexOf(player1), 1);
let player2 = trainers[Math.floor(Math.random() * trainers.length)];
trainers.splice(trainers.indexOf(player2), 1);

let pvp = new Battle(player1, player2);
pvp.battle();
