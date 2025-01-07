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

const colors = ["#660000", "#000066", "#330000", "#000033"];

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
    // Ratio of health
    const healthRatio = this.hp / this.maxHp;

    // Crit chance depending on ratio
    const critChance = 1 - healthRatio;

    // Randomizer with crit
    const isCriticalHit = Math.random() < critChance;

    // Damage
    const damageMultiplier = isCriticalHit ? 2 : 1;
    const damageDealt =
      Math.floor(Math.random() * damage * damageMultiplier) + 1;

    return [damageDealt, isCriticalHit];
  }
  powerUp() {
    this.level += 1;
    this.maxHp = this.level * 10;
    this.hp += 10;

    console.log(
      `${this.name} powered up!\nNew Level: ${this.level}\nNew Max HP: ${this.maxHp}\nNew HP: ${this.hp}`
    );
  }
  heal() {
    // totalHealing = (random)
    const totalHealing = Math.floor(Math.random() * (this.level + 2)) + 1;
    this.hp =
      this.hp + totalHealing > this.maxHp ? this.maxHp : this.hp + totalHealing;

    console.log(`${this.name} healed ${totalHealing} HP!`);
    if (this.hp + totalHealing > this.maxHp) console.log(`Max HP reached!`);
    console.log(`${this.name} new hp is ${this.hp} HP!`);
  }
}

// Types of Pokemons
class NormalPokemon extends Pokemon {
  constructor(name) {
    const level = Math.floor(Math.random() * 2) + 1; // Get random level
    super(name, "Normal", level, level * 10, level * 10);
  }

  skill1(opponent) {
    super.attack();
    const totalDamage = this.calculateDamage(this.level * 1);

    console.log(
      `${this.name} uses HEADBUTT and deals ${totalDamage[0]}`,
      `${totalDamage[1] ? "~CRITICAL HIT~" : ""}`
    );
    super.receiveDamage(opponent, totalDamage[0]);
  }
  skill2(opponent) {
    super.attack();
    const damageChance = Math.random() < 0.6;
    const damage = damageChance ? this.level * 3 : this.level * 1;
    const totalDamage = this.calculateDamage(
      Math.floor(Math.random() * damage) + 1
    );

    console.log(
      `${this.name} uses STOMP and deals ${totalDamage[0]}`,
      `${totalDamage[1] ? "~CRITICAL HIT~" : ""}`
    );
    super.receiveDamage(opponent, totalDamage[0]);
  }
}
class BugPokemon extends Pokemon {
  constructor(name) {
    const level = Math.floor(Math.random() * 2) + 1; // Get random level
    super(name, "Bug", level, level * 10, level * 10);
  }

  skill1(opponent) {
    super.attack();
    const totalDamage = this.calculateDamage(this.level * 1);

    console.log(
      `${this.name} uses BUG-BITE and deals ${totalDamage[0]}`,
      `${totalDamage[1] ? "~CRITICAL HIT~" : ""}`
    );
    super.receiveDamage(opponent, totalDamage[0]);
  }
  skill2(opponent) {
    super.attack();
    const damageChance = Math.random() < 0.6;
    const damage = damageChance ? this.level * 3 : this.level * 1;
    const totalDamage = this.calculateDamage(
      Math.floor(Math.random() * damage) + 1
    );

    console.log(
      `${this.name} uses INFESTATION and deals ${totalDamage[0]}`,
      `${totalDamage[1] ? "~CRITICAL HIT~" : ""}`
    );
    super.receiveDamage(opponent, totalDamage[0]);
  }
}
class PsychicPokemon extends Pokemon {
  constructor(name) {
    const level = Math.floor(Math.random() * 2) + 1; // Get random level
    super(name, "Psychic", level, level * 10, level * 10);
  }

  skill1(opponent) {
    super.attack();
    const totalDamage = this.calculateDamage(this.level * 1);

    console.log(
      `${this.name} uses IMPRISON and deals ${totalDamage[0]}`,
      `${totalDamage[1] ? "~CRITICAL HIT~" : ""}`
    );
    super.receiveDamage(opponent, totalDamage[0]);
  }
  skill2(opponent) {
    super.attack();
    const damageChance = Math.random() < 0.6;
    const damage = damageChance ? this.level * 3 : this.level * 1;
    const totalDamage = this.calculateDamage(
      Math.floor(Math.random() * damage) + 1
    );

    console.log(
      `${this.name} uses TRICK and deals ${totalDamage[0]}`,
      `${totalDamage[1] ? "~CRITICAL HIT~" : ""}`
    );
    super.receiveDamage(opponent, totalDamage[0]);
  }
}
class FairyPokemon extends Pokemon {
  constructor(name) {
    const level = Math.floor(Math.random() * 2) + 1; // Get random level
    super(name, "Psychic", level, level * 10, level * 10);
  }

  skill1(opponent) {
    super.attack();
    const totalDamage = this.calculateDamage(this.level * 1);

    console.log(
      `${this.name} uses GEOMANCY and deals ${totalDamage[0]}`,
      `${totalDamage[1] ? "~CRITICAL HIT~" : ""}`
    );
    super.receiveDamage(opponent, totalDamage[0]);
  }
  skill2(opponent) {
    super.attack();
    const damageChance = Math.random() < 0.6;
    const damage = damageChance ? this.level * 3 : this.level * 1;
    const totalDamage = this.calculateDamage(
      Math.floor(Math.random() * damage) + 1
    );

    console.log(
      `${this.name} uses MAX-STARFALL and deals ${totalDamage[0]}`,
      `${totalDamage[1] ? "~CRITICAL HIT~" : ""}`
    );
    super.receiveDamage(opponent, totalDamage[0]);
  }
}
class SteelPokemon extends Pokemon {
  constructor(name) {
    const level = Math.floor(Math.random() * 2) + 1; // Get random level
    super(name, "Psychic", level, level * 10, level * 10);
  }

  skill1(opponent) {
    super.attack();
    const totalDamage = this.calculateDamage(this.level * 1);

    console.log(
      `${this.name} uses BULLET-PUNCH and deals ${totalDamage[0]}`,
      `${totalDamage[1] ? "~CRITICAL HIT~" : ""}`
    );
    super.receiveDamage(opponent, totalDamage[0]);
  }
  skill2(opponent) {
    super.attack();
    const damageChance = Math.random() < 0.6;
    const damage = damageChance ? this.level * 3 : this.level * 1;
    const totalDamage = this.calculateDamage(
      Math.floor(Math.random() * damage) + 1
    );

    console.log(
      `${this.name} uses SMART-STRIKE and deals ${totalDamage[0]}`,
      `${totalDamage[1] ? "~CRITICAL HIT~" : ""}`
    );
    super.receiveDamage(opponent, totalDamage[0]);
  }
}

// Battle
class Battle {
  constructor() {
    console.log(
      "%cBattle of the Pokemons",
      "color: #FFCB05; background-color: #1D2C5E; font-weight: bold; font-size: 32px; padding: 4px; border-radius: 4px;"
    );

    this.randomPlayer();
  }

  resetPlayer() {
    // Resets players
    this.player1 = {};
    this.player2 = {};
  }
  randomPlayer() {
    // Select current players to play
    this.player1 = trainers[Math.floor(Math.random() * trainers.length)];
    trainers.splice(trainers.indexOf(this.player1), 1);

    this.player2 = trainers[Math.floor(Math.random() * trainers.length)];
    trainers.splice(trainers.indexOf(this.player2), 1);

    this.randomPokemon();
  }
  randomPokemon() {
    // Get random pokemon from trainer's pokemonList
    let maxPokemon1 = this.player1.pokemonList.length;
    this.pokemon1 =
      this.player1.pokemonList[Math.floor(Math.random() * maxPokemon1)];
    this.player1.pokemonList.splice(
      this.player1.pokemonList.indexOf(this.pokemon1),
      1
    );

    let maxPokemon2 = this.player2.pokemonList.length;
    this.pokemon2 =
      this.player2.pokemonList[Math.floor(Math.random() * maxPokemon2)];
    this.player2.pokemonList.splice(
      this.player2.pokemonList.indexOf(this.pokemon2),
      1
    );
  }

  // Start battle
  battle() {
    let winnersBracket = [];
    let battleCount = 1;

    while (true) {
      console.log("");
      console.log(
        `%cAutoBattle ${battleCount}: ${this.player1.name} vs ${this.player2.name}`,
        "color: #FFCB05; background-color: #1D2C5E; font-weight: bold; font-size: 16px; padding: 4px; border-radius: 4px;"
      );

      let players = [this.player1, this.player2];
      let pokemons = [this.pokemon1, this.pokemon2];
      let turn = 0;

      pokemons.forEach((pokemon, index) => {
        console.log(
          `%c${players[index].name}: ${pokemon.name}, I choose you!`,
          `color: white; background-color: ${colors[index]}; font-size: 12px; padding: 4px; border-radius: 4px;`
        );
      });

      while (true) {
        let move = Math.floor(Math.random() * 3); // RNG move

        console.log("");
        console.log(
          `%c[${players[turn].name}] ${pokemons[turn].name}`,
          `color: white; background-color: ${colors[turn]}; font-size: 12px; padding: 4px; border-radius: 4px;`
        );
        switch (move) {
          case 0: // Skill 1
            pokemons[turn].skill1(pokemons[turn === 0 ? 1 : 0]);
            break;
          case 1: // Skill 2
            pokemons[turn].skill2(pokemons[turn === 0 ? 1 : 0]);
            break;
          case 2: // Heal
            if (pokemons[turn].hp === pokemons[turn].maxHp) {
              move = Math.floor(Math.random() * 2); // RNG move

              if (move === 0)
                pokemons[turn].skill1(pokemons[turn === 0 ? 1 : 0]);
              else if (move === 1)
                pokemons[turn].skill2(pokemons[turn === 0 ? 1 : 0]);
            } else {
              pokemons[turn].heal();
            }
            break;
        }

        turn = turn === 0 ? 1 : 0; // Turn of the other pokemon

        if (pokemons[turn].hp <= 0) {
          console.log(`${pokemons[turn].name} fainted!`);

          turn = turn === 0 ? 1 : 0; // Change to winner
          console.log("");
          console.log(
            `%c[${players[turn].name}] ${pokemons[turn].name} wins!`,
            `color: white; background-color: ${
              colors[turn + 2]
            }; font-size: 12px; padding: 4px; border-radius: 4px;`
          );
          pokemons[turn].powerUp();

          turn = turn === 0 ? 1 : 0; // Change to loser back
          pokemons[turn] = players[turn].pokemonList.pop();

          // If there's no pokemon left from current trainer
          if (!pokemons[turn]) {
            turn = turn === 0 ? 1 : 0; // Change to winner

            // Put the winner's pokemon back to pokemonList
            players[turn].pokemonList.push(pokemons[turn]);
            winnersBracket.push(players[turn]);
            this.resetPlayer();

            break;
          } else {
            console.log("");
            console.log(
              `${players[turn].name}: ${pokemons[turn].name}, I choose you!`,
              `color: white; background-color: ${colors[turn]}; font-size: 12px; padding: 4px; border-radius: 4px;`
            );
          }
        }
      }

      battleCount++; // New Battle
      if (trainers.length === 0 && winnersBracket.length === 1) {
        console.log("");
        console.log(
          "%cBattle of the Pokemons",
          "color: #FFCB05; background-color: #1D2C5E; font-weight: bold; font-size: 32px; padding: 4px; border-radius: 4px;"
        );
        console.log(
          `%cTOURNAMENT WINNER: ${winnersBracket[0].name}`,
          `color: #FFCB05; background-color: #1D2C5E; font-weight: bold; font-size: 16px; padding: 4px; border-radius: 4px;`
        );

        break;
      } else if (trainers.length === 1 && winnersBracket.length > 0) {
        trainers.push(...winnersBracket);
        winnersBracket = [];

        this.randomPlayer();
      } else this.randomPlayer();
    }
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

// Start Battle
let trainers = [jedd, jun, ken, joeshua, jonas];
let pvp = new Battle();
pvp.battle();
