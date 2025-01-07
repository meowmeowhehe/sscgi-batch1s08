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

  myPokemons(color) {
    this.pokemonList.forEach((pokemon) => {
      console.log(
        `%cPokemon: ${pokemon.name}\nType: ${pokemon.type}\nLevel: ${pokemon.level}\nHP: ${pokemon.hp}`,
        `color: white; background-color: ${color}; font-size: 16px; padding: 4px; border-radius: 4px;`
      );
    });
  }
}
class Pokemon {
  constructor(name, type, level, maxHp, hp, s1, s2) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.maxHp = maxHp;
    this.hp = hp;
    this.s1 = s1;
    this.s2 = s2;
  }

  // Methods
  attack() {
    console.log(`${this.name} attacks!`);
  }
  receiveDamage(opponent, damage) {
    const newHp = opponent.hp - damage;
    opponent.hp = newHp;

    if (newHp > 0) console.log(`${opponent.name} remaining hp is ${newHp}`);
    else console.log(`${opponent.name} fainted!`);
  }
  calculateDamage(opponent, skill, damage) {
    const healthRatio = this.hp / this.maxHp;
    const critChance = 1 - healthRatio;
    const isCriticalHit = Math.random() + 0.2 < critChance;

    const newDamage = damage + (this.level - 1);
    const damageMultiplier = isCriticalHit ? 1.5 : 0;

    const damageDealt = Math.round(damage * damageMultiplier) + newDamage;
    console.log(
      `${this.name} uses ${skill} and deals ${damageDealt}`,
      `${isCriticalHit ? "~CRITICAL HIT~" : ""}`
    );

    this.receiveDamage(opponent, damageDealt);
  }
  powerUp() {
    this.level += 1;
    this.maxHp += 10;
    this.hp += this.level * 5;

    console.log(
      `${this.name} powered up!\nNew Level: ${this.level}\nNew Max HP: ${this.maxHp}\nNew HP: ${this.hp}`
    );
  }
  heal() {
    const healthRatio = this.hp / this.maxHp;
    const moreHealthChance = 1 - healthRatio;
    const isMoreHealth = Math.random() + 0.2 < moreHealthChance;

    const defaultHeal = 2;
    const newHeal = defaultHeal + (this.level - 1);
    const healMultiplier = isMoreHealth ? 2 : 0;

    const totalHealing = Math.round(defaultHeal * healMultiplier) + newHeal;
    this.hp =
      this.hp + totalHealing > this.maxHp ? this.maxHp : this.hp + totalHealing;

    console.log(`${this.name} healed ${totalHealing} HP!`);
    if (this.hp + totalHealing > this.maxHp) console.log(`Max HP reached!`);
    console.log(`${this.name} new hp is ${this.hp} HP!`);
  }

  // Skills
  skill1(opponent) {
    this.attack();
    this.calculateDamage(opponent, this.s1, 1);
  }
  skill2(opponent) {
    this.attack();
    this.calculateDamage(opponent, this.s2, 2);
  }
}

// Types of Pokemons
class NormalPokemon extends Pokemon {
  constructor(name) {
    const level = Math.floor(Math.random() * 2) + 1; // Get random level
    super(name, "Normal", level, level * 10, level * 10, "HEADBUTT", "STOMP");
  }
}
class BugPokemon extends Pokemon {
  constructor(name) {
    const level = Math.floor(Math.random() * 2) + 1; // Get random level
    super(
      name,
      "Bug",
      level,
      level * 10,
      level * 10,
      "BUG-BITE",
      "INFESTATION"
    );
  }
}
class PsychicPokemon extends Pokemon {
  constructor(name) {
    const level = Math.floor(Math.random() * 2) + 1; // Get random level
    super(name, "Psychic", level, level * 10, level * 10, "IMPRISON", "TRICK");
  }
}
class FairyPokemon extends Pokemon {
  constructor(name) {
    const level = Math.floor(Math.random() * 2) + 1; // Get random level
    super(
      name,
      "Psychic",
      level,
      level * 10,
      level * 10,
      "GEOMANCY",
      "MAX-STARFALL"
    );
  }
}
class SteelPokemon extends Pokemon {
  constructor(name) {
    const level = Math.floor(Math.random() * 2) + 1; // Get random level
    super(
      name,
      "Psychic",
      level,
      level * 10,
      level * 10,
      "BULLET-PUNCH",
      "SMART-STRIKE"
    );
  }
}

// Battle
class Battle {
  constructor() {
    console.log(
      "%cBattle of the Pokemons",
      `color: #FFCB05; background-color: #1D2C5E; font-weight: bold; font-size: 32px; padding: 4px; border-radius: 4px;`
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

    // Logo
    console.log(
      `%c${this.player1.name} vs ${this.player2.name}`,
      `color: #FFCB05; background-color: #1D2C5E; font-weight: bold; font-size: 24px; padding: 4px; border-radius: 4px;`
    );

    // Check player's pokemons
    let players = [this.player1, this.player2];
    players.forEach((player, index) => {
      console.log(
        `%c${player.name}`,
        `color: white; background-color: ${colors[index]}; font-size: 18px; padding: 4px; border-radius: 4px;`
      );
      player.myPokemons(colors[index + 2]);
      console.log("");
    });

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

    while (true) {
      let players = [this.player1, this.player2];
      let pokemons = [this.pokemon1, this.pokemon2];
      let turn = 0;

      pokemons.forEach((pokemon, index) => {
        console.log(
          `%c[${players[index].name}] ${pokemon.name}, I choose you!`,
          `color: white; background-color: ${colors[index]}; font-size: 16px; padding: 4px; border-radius: 4px;`
        );
      });

      while (true) {
        let move = Math.floor(Math.random() * 3); // RNG move

        console.log("");
        console.log(
          `%c[${players[turn].name}] ${pokemons[turn].name}`,
          `color: white; background-color: ${colors[turn]}; font-size: 16px; padding: 4px; border-radius: 4px;`
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
          turn = turn === 0 ? 1 : 0; // Change to winner
          console.log("");
          console.log(
            `%c[${players[turn].name}] ${pokemons[turn].name} wins!`,
            `color: white; background-color: ${
              colors[turn + 2]
            }; font-size: 16px; padding: 4px; border-radius: 4px;`
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
              `%c[${players[turn].name}] ${pokemons[turn].name}, I choose you!`,
              `color: white; background-color: ${colors[turn]}; font-size: 16px; padding: 4px; border-radius: 4px;`
            );
          }
        }
      }

      console.log("");
      if (trainers.length === 0 && winnersBracket.length === 1) {
        console.log(
          "%cBattle of the Pokemons",
          `color: #FFCB05; background-color: #1D2C5E; font-weight: bold; font-size: 32px; padding: 4px; border-radius: 4px;`
        );
        console.log(
          `%cTOURNAMENT WINNER: ${winnersBracket[0].name}`,
          `color: #FFCB05; background-color: #1D2C5E; font-weight: bold; font-size: 24px; padding: 4px; border-radius: 4px;`
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
// new NormalPokemon("Pidgey")
// new NormalPokemon("Meowth")
// new BugPokemon("Vivillon")
// new BugPokemon("Grubbin")
// new PsychicPokemon("Solosis")
// new PsychicPokemon("Duosion")
// new FairyPokemon("Togekiss")
// new FairyPokemon("Cottonee")
// new SteelPokemon("Tinkatink")
// new SteelPokemon("Varoom")

// Trainers
const jedd = new Trainer("Jedd", [
  new PsychicPokemon("Duosion"),
  new SteelPokemon("Varoom"),
  new NormalPokemon("Meowth"),
  new BugPokemon("Grubbin"),
  new SteelPokemon("Tinkatink"),
]);
const jun = new Trainer("Jun", [
  new NormalPokemon("Meowth"),
  new BugPokemon("Grubbin"),
  new SteelPokemon("Tinkatink"),
  new FairyPokemon("Cottonee"),
  new BugPokemon("Vivillon"),
]);
const ken = new Trainer("Ken", [
  new SteelPokemon("Tinkatink"),
  new FairyPokemon("Cottonee"),
  new PsychicPokemon("Duosion"),
  new SteelPokemon("Varoom"),
  new NormalPokemon("Meowth"),
]);
const joeshua = new Trainer("Joeshua", [
  new BugPokemon("Vivillon"),
  new FairyPokemon("Togekiss"),
  new NormalPokemon("Meowth"),
  new BugPokemon("Grubbin"),
  new SteelPokemon("Tinkatink"),
]);
const jonas = new Trainer("Jonas", [
  new NormalPokemon("Pidgey"),
  new PsychicPokemon("Solosis"),
  new SteelPokemon("Tinkatink"),
  new FairyPokemon("Cottonee"),
  new PsychicPokemon("Duosion"),
]);

// Start Battle
let trainers = [jedd, jun, ken, joeshua, jonas];
let pvp = new Battle();
pvp.battle();
