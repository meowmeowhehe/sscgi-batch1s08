// ~~~~~~~~~~~~~~~ POKEMON GAMES ~~~~~~~~~~~~~~~
/*
  ~~~~~ RULES ~~~~~
  [1] BRACKETING OF MATCHES (WINNER & LOSER)
  [2] TOP 3 - ROUND ROBIN
  [3] FAINTED POKEMONS WILL BE REVIVED IN 2ND BRACKET
  [4] PROMP TRAINERS & POKEMONS
*/

// ~~~~~~~~~~~~~~~ NOTES ~~~~~~~~~~~~~~~ //
/*
  ~~~~~ PROBLEMS I FOUND ~~~~~
  [1] INPUT ISN'T A NUMBER
  [2] NAVIGATION IN MENU
  
  ~~~~~ SOLUTIONS ~~~~~
  [1] USED WHILE LOOP WITH CONDIITON `!Number.isInteger(Number(variable))`. SEE LINES
  [2] USED KEYDOWN EVENT LISTENER WITH LOGIC
*/

// ~~~~~~~~~~ GLOBAL ~~~~~~~~~~ //
let colors = ["#FF3333", "#3333FF"];
let noOfTrainers = 0;
let noOfPokemons = 0;
let trainers = [];

// ~~~~~ DIALOGUES ~~~~~ //
let pokemonSelectDialogues = (fighter, pokemon) => [
  `%c[TRAINER]%c ${fighter.trainer} sends out %c[POKEMON]%c ${pokemon.name} ~${pokemon.type}~. It's ready for battle!`,
  `With confidence, %c[TRAINER]%c ${fighter.trainer} chooses %c[POKEMON]%c ${pokemon.name} ~${pokemon.type}~. The fight is on!`,
  `%c[TRAINER]%c ${fighter.trainer} calls upon %c[POKEMON]%c ${pokemon.name} ~${pokemon.type}~. It leaps into action!`,
];
let pokemonTurnDialogues = (fighter, pokemon, skill, damage, isCriticalHit) => [
  `%c[TRAINER]%c ${fighter.trainer}'s %c[POKEMON]%c ${pokemon.name} ~${
    pokemon.type
  }~ steps forward, ready to act. '%c${skill}%c, now!'. It deals %c💢 ${damage} 💢%c damage. ${
    isCriticalHit ? "%c💥❗ CRITICAL HIT ❗💥" : ""
  }`,
  `%c[TRAINER]%c ${fighter.trainer} shouts, '%c[POKEMON]%c ${pokemon.name} ~${
    pokemon.type
  }~, use %c${skill}%c!' The Pokémon responds with swift precision, dealing %c💢 ${damage} 💢%c damage. ${
    isCriticalHit ? "%c💥❗ CRITICAL HIT ❗💥" : ""
  }`,
  `%c[TRAINER]%c ${fighter.trainer}'s %c[POKEMON]%c ${pokemon.name} ~${
    pokemon.type
  }~ focuses its energy. '%c${skill}%c!', dealing %c💢 ${damage} 💢%c damage. ${
    isCriticalHit ? "%c💥❗ CRITICAL HIT ❗💥" : ""
  }`,
];
let pokemonHealDialogues = (fighter, pokemon, healAmount) => [
  `%c[TRAINER]%c ${fighter.trainer}'s %c[POKEMON]%c ${pokemon} uses heal. It heals for $%c🩹 ${healAmount} 🩹%chealth!`,
  `%c[TRAINER]%c ${fighter.trainer} commands, '%c[POKEMON]%c ${pokemon}, use heal!' The Pokémon regains %c🩹 ${healAmount} 🩹%c health.`,
  `%c[TRAINER]%c ${fighter.trainer}'s %c[POKEMON]%c ${pokemon} focuses and uses heal. It recovers %c🩹 ${healAmount} 🩹%c health!`,
];

// ~~~~~ TRACKER ~~~~~ //
/*
  - MENU SELECTION
    - START BATTLE
    - TRAINERS
    - QUIT
*/
let tracker = "";
let nav = 0;
let navPokemon = 0;

function typeOfPokemon(key) {
  let type = "";

  switch (key) {
    case "1":
      type = "Normal";
      break;
    case "2":
      type = "Fire";
      break;
    case "3":
      type = "Water";
      break;
    case "4":
      type = "Grass";
      break;
    case "5":
      type = "Electric";
      break;
    case "6":
      type = "Ice";
      break;
    case "7":
      type = "Fighting";
      break;
    case "8":
      type = "Poison";
      break;
    case "9":
      type = "Ground";
      break;
    case "10":
      type = "Flying";
      break;
    case "11":
      type = "Psychic";
      break;
    case "12":
      type = "Bug";
      break;
    case "13":
      type = "Rock";
      break;
    case "14":
      type = "Ghost";
      break;
    case "15":
      type = "Dragon";
      break;
    case "16":
      type = "Dark";
      break;
    case "17":
      type = "Steel";
      break;
    case "18":
      type = "Fairy";
      break;
  }

  return type;
}
function newPokemon(key, name) {
  let pokemon = "";

  switch (key) {
    case "1":
      pokemon = new NormalPokemon(name);
      break;
    case "2":
      pokemon = new FirePokemon(name);
      break;
    case "3":
      pokemon = new WaterPokemon(name);
      break;
    case "4":
      pokemon = new GrassPokemon(name);
      break;
    case "5":
      pokemon = new ElectricPokemon(name);
      break;
    case "6":
      pokemon = new IcePokemon(name);
      break;
    case "7":
      pokemon = new FightingPokemon(name);
      break;
    case "8":
      pokemon = new PoisonPokemon(name);
      break;
    case "9":
      pokemon = new GroundPokemon(name);
      break;
    case "10":
      pokemon = new FlyingPokemon(name);
      break;
    case "11":
      pokemon = new PsychicPokemon(name);
      break;
    case "12":
      pokemon = new BugPokemon(name);
      break;
    case "13":
      pokemon = new RockPokemon(name);
      break;
    case "14":
      pokemon = new GhostPokemon(name);
      break;
    case "15":
      pokemon = new DragonPokemon(name);
      break;
    case "16":
      pokemon = new DarkPokemon(name);
      break;
    case "17":
      pokemon = new SteelPokemon(name);
      break;
    case "18":
      pokemon = new FairyPokemon(name);
      break;
  }

  return pokemon;
}

// ~~~~~~~~~~ POKEMON GAME ~~~~~~~~~~ //
class PokemonGame {
  constructor() {
    // Settings
    this.setNoOfPlayers();
    this.setNoOfPokemons();
    this.setTrainer();

    // Menu
    tracker = "Menu Selection";
    this.menu();
  }

  // Number settings
  setNoOfPlayers() {
    let firstTime = true;

    // Checks whether input isn't a number, less than 3, or greater than 5
    while (
      !Number.isInteger(Number(noOfTrainers)) ||
      noOfTrainers < 3 ||
      noOfTrainers > 5
    ) {
      noOfTrainers = prompt(
        `${
          firstTime
            ? "" // Fix for first time use
            : !Number.isInteger(Number(noOfTrainers))
            ? "Input isn't an integer!\n\n"
            : noOfTrainers < 3
            ? "Minimum players of 3!\n\n"
            : noOfTrainers > 5
            ? "Maximum players of 5!\n\n"
            : ""
        }Set no. of players in game`
      );

      firstTime = false;
    }
  }
  setNoOfPokemons() {
    let firstTime = true;

    // Checks whether input isn't a number, less than 1, or greater than 5
    while (
      !Number.isInteger(Number(noOfPokemons)) ||
      noOfPokemons < 1 ||
      noOfPokemons > 5
    ) {
      noOfPokemons = prompt(
        `${
          firstTime
            ? "" // Fix for first time use
            : !Number.isInteger(Number(noOfPokemons))
            ? "Input isn't an integer!\n\n"
            : noOfPokemons < 1
            ? "Minimum pokemons of 1!\n\n"
            : noOfPokemons > 5
            ? "Maximum pokemons of 5!\n\n"
            : ""
        }Set no. of pokemons per player`
      );

      firstTime = false;
    }
  }

  // Trainer settings
  setTrainer() {
    for (let i = 0; i < noOfTrainers; i++) {
      // Variables
      let trainerFT = true;
      let inputPokemons = [];

      // Trainer settings
      let pokemons = [];
      let trainer = "";
      while (true) {
        trainer = prompt(
          `${
            trainerFT
              ? ""
              : trainer != null && trainer.trim() != ""
              ? "Name of Trainer can't be empty!\n\n"
              : ""
          }Name of Trainer #${i + 1}`
        );

        trainerFT = false;
        if (trainer != null) if (trainer.trim() != "") break;
      }

      // Picking of Pokemons
      let selectPokemonFT = true;
      while (
        inputPokemons.length != noOfPokemons ||
        inputPokemons.every((input) => !Number.isInteger(Number(input))) ||
        !inputPokemons.every((input) => input >= 1 && input <= 18)
      ) {
        let selectPokemons = prompt(
          `${
            selectPokemonFT
              ? ""
              : inputPokemons.every((pokemon) => !pokemon)
              ? "Failed to follow instructions!\n\n"
              : ""
          }Select ${noOfPokemons} pokemons for Trainer 1\ne.g. 1,2,3\n\n1. Normal\n2. Fire\n3. Water\n4. Grass\n5. Electric\n6. Ice\n7. Fighting\n8. Poison\n9. Ground\n10. Flying\n11. Psychic\n12. Bug\n13. Rock\n14. Ghost\n15. Dragon\n16. Dark\n17. Steel\n18. Fairy\n`
        );

        if (selectPokemons != null) inputPokemons = selectPokemons.split(",");

        selectPokemonFT = false;
      }

      // Setting names for pokemons
      inputPokemons.forEach((input, index) => {
        // Variables
        let pokemonNameFT = true;

        // Pokemon settings
        let pokemonName = "";
        while (true) {
          pokemonName = prompt(
            `${
              pokemonNameFT
                ? ""
                : pokemonName != null || pokemonName.trim() != ""
                ? "Name of Pokemon can't be empty!\n\n"
                : ""
            }Name of Pokemon #${index + 1} (${typeOfPokemon(input)})`
          );

          pokemonNameFT = false;
          if (pokemonName != null) if (pokemonName.trim() != "") break;
        }

        pokemons.push(newPokemon(input, pokemonName));
      });

      // Setting of pokemons for trainer
      inputPokemons.forEach((input) => {});

      // Setting of trainer with their pokemons
      trainers.push(new Trainer(trainer, pokemons));
    }
  }

  // Menu
  menu() {
    console.clear();

    console.log(
      "%cPokemon Tournament Battle",
      "color: #FFCB05; font-weight: bold; font-size: 4rem;"
    );

    console.log("");

    console.log(
      `%c${nav == 0 ? "> Start Battle <" : "Start Battle"}`,
      `padding: 0.25rem 16px; color: ${
        nav == 0 ? "#FFCB05" : "#C7A008"
      }; font-weight: bold; font-size: 1.5rem;`
    );
    console.log(
      `%c${nav == 1 ? "> Trainers <" : "Trainers"}`,
      `padding: 0.25rem 16px; color: ${
        nav == 1 ? "#FFCB05" : "#C7A008"
      }; font-weight: bold; font-size: 1.5rem;`
    );
    console.log(
      `%c${nav == 2 ? "> Quit <" : "Quit"}`,
      `padding: 0.25rem 16px; color: ${
        nav == 2 ? "#FFCB05" : "#C7A008"
      }; font-weight: bold; font-size: 1.5rem;`
    );

    console.log("");
    console.log("");
    console.log("");
    console.log("%c↑ ↓ Navigate", "background: #222; color: #bada55;");
    console.log("%c↵ Enter", "background: #222; color: #bada55;");
  }
}

// ~~~~~~~~~~ TRAINER ~~~~~~~~~~ //
class Trainer {
  constructor(trainer, pokemons) {
    this.trainer = trainer;
    this.pokemons = pokemons;
  }

  showPokemons() {
    console.clear();

    console.log(
      `%cTrainer ${this.trainer}`,
      `color: #FFCB05; font-weight: bold; font-size: 3rem`
    );

    console.log("");

    console.log(
      `%cPokemon #${navPokemon + 1}`,
      `color: #FFCB05; font-weight: bold; font-size: 32px`
    );

    console.log("");

    // Stats
    let pokemon = this.pokemons[navPokemon];
    console.log(
      `%c${pokemon.type}`,
      `color: #FFCB05; font-weight: bold; font-size: 32px`
    );
    console.log(
      `%c📈 Level: ${pokemon.level} [${pokemon.experience}/${
        pokemon.level * 10
      }]`,
      `padding: 0.25rem 16px;color: #FFCB05; font-weight: bold; font-size: 16px`
    );
    console.log(
      `%c👾 Name: ${pokemon.name}`,
      `padding: 0.25rem 16px;color: #FFCB05; font-weight: bold; font-size: 16px`
    );
    console.log(
      `%c❤️ Health: ${pokemon.health}/${pokemon.maxHealth}`,
      `padding: 0.25rem 16px;color: #FFCB05; font-weight: bold; font-size: 16px`
    );

    console.log("");

    // Skills
    console.log(
      `%c🛠️ Skills`,
      `color: #FFCB05; font-weight: bold; font-size: 32px`
    );
    console.log(
      `%c🥉 Skill 1: ${pokemon.weakSkill}`,
      `padding: 0.25rem 16px;color: #FFCB05; font-weight: bold; font-size: 16px`
    );
    console.log(
      `%c🥇 Skill 2: ${pokemon.strongSkill}`,
      `padding: 0.25rem 16px;color: #FFCB05; font-weight: bold; font-size: 16px`
    );

    console.log("");
    console.log("");
    console.log("");
    console.log("%c↑ ↓ Trainer", "background: #222; color: #bada55;");
    console.log("%c← → Pokemon", "background: #222; color: #bada55;");
    console.log("%cB Back", "background: #222; color: #bada55;");
  }
}

// ~~~~~~~~~~ POKEMON ~~~~~~~~~~ //
class Pokemon {
  constructor(
    name,
    type,
    experience,
    level,
    health,
    maxHealth,
    weakSkill,
    strongSkill
  ) {
    this.name = name;
    this.type = type;
    this.experience = experience;
    this.level = level;
    this.health = health;
    this.maxHealth = maxHealth;
    this.weakSkill = weakSkill;
    this.strongSkill = strongSkill;
  }

  // Damage
  receiveDamage(opponentColor, opponent, damage) {
    const newHealth = opponent.health - damage;
    opponent.health = newHealth;

    if (newHealth > 0)
      console.log(
        `%c[POKEMON]%c ${opponent.name} ~${opponent.type}~ remaining health is %c${newHealth}%c`,
        `color: ${opponentColor}; font-size: 1rem; font-weight: bold`,
        `font-size: 1rem; font-weight: normal`,
        `font-size: 1.25rem; font-weight: bold`,
        `font-size: 1rem; font-weight: normal`
      );
    else
      console.log(
        `%c[POKEMON]%c ${opponent.name} ~${opponent.type}~ fainted!`,
        `color: ${opponentColor}; font-size: 1rem; font-weight: bold`,
        `font-size: 1rem; font-weight: normal`
      );
  }
  calculateDamage(
    fighterColor,
    fighter,
    opponentColor,
    opponent,
    skill,
    damage
  ) {
    const healthRatio = this.health / this.maxHealth;
    const critChance = 1 - healthRatio;
    const isCriticalHit = Math.random() < critChance;

    const newDamage = damage + (this.level - 1);
    const damageMultiplier = isCriticalHit ? 1.5 : 0;

    const damageDealt = Math.round(damage * damageMultiplier) + newDamage;

    console.log(
      `${
        pokemonTurnDialogues(
          fighter,
          { name: this.name, type: this.type },
          skill,
          damageDealt,
          isCriticalHit
        )[Math.floor(Math.random() * 3)]
      }`,
      `color: ${fighterColor}; font-size: 1rem; font-weight: bold`,
      `font-size: 1rem; font-weight: normal`,
      `color: ${fighterColor}; font-size: 1rem; font-weight: bold`,
      `font-size: 1rem; font-weight: normal`,
      `font-size: 1.25rem; font-weight: bold`,
      `font-size: 1rem; font-weight: normal`,
      `font-size: 1.25rem; font-weight: bold`,
      `font-size: 1rem; font-weight: normal`,
      `${isCriticalHit ? `font-size: 1.25rem; font-weight: bold` : ``}`
    );
    this.receiveDamage(opponentColor, opponent, damageDealt);
  }
  heal(fighterColor, fighter) {
    const healthRatio = this.health / this.maxHealth;
    const moreHealthChance = 1 - healthRatio;
    const isMoreHealth = Math.random() < moreHealthChance;

    const defaultHeal = 2;
    const newHeal = defaultHeal + (this.level - 1);
    const healMultiplier = isMoreHealth ? 2 : 0;

    const totalHealing = Math.round(defaultHeal * healMultiplier) + newHeal;
    this.health =
      this.health + totalHealing > this.maxHealth
        ? this.maxHealth
        : this.health + totalHealing;

    console.log(
      `${
        pokemonHealDialogues(fighter, this.name, totalHealing)[
          Math.floor(Math.random() * 2)
        ]
      }`,
      `color: ${fighterColor}; font-size: 1rem; font-weight: bold`,
      `font-size: 1rem; font-weight: normal`,
      `color: ${fighterColor}; font-size: 1rem; font-weight: bold`,
      `font-size: 1rem; font-weight: normal`,
      `font-size: 1.25rem; font-weight: bold`,
      `font-size: 1rem; font-weight: normal`
    );

    if (this.health + totalHealing > this.maxHealth) {
      console.log(
        `%c[TRAINER]%c ${fighter.trainer} %c[POKEMON]%c max health reached!`,
        `color: ${fighterColor}; font-size: 1rem; font-weight: bold`,
        `font-size: 1rem; font-weight: normal`,
        `color: ${fighterColor}; font-size: 1rem; font-weight: bold`,
        `font-size: 1rem; font-weight: normal`
      );
    }

    console.log(
      `%c[TRAINER]%c ${fighter.trainer} %c[POKEMON]%c ${this.name} new health is %c${this.health}%c!`,
      `color: ${fighterColor}; font-size: 1rem; font-weight: bold`,
      `font-size: 1rem; font-weight: normal`,
      `color: ${fighterColor}; font-size: 1rem; font-weight: bold`,
      `font-size: 1rem; font-weight: normal`,
      `font-size: 1.25rem; font-weight: bold`,
      `font-size: 1rem; font-weight: normal`
    );
  }

  // Pokemon Stats Changes
  resetLevel() {
    this.level = 1;
    this.experience = 0;
    this.maxHealth = 10;
  }
  revivePokemon() {
    if (this.health <= 0) this.experience = 0;
    this.health = this.maxHealth;
  }
  powerUp(fighterColor) {
    this.experience += 5;
    this.health += 5;

    if (this.experience == this.level * 10) {
      this.experience = 0;
      this.level += 1;
      this.maxHealth += 10;
      this.health += this.level * 5;

      if (this.health > this.maxHealth) {
        this.health = this.maxHealth;
      }

      console.log("");
      console.log(
        `%c[POKEMON]%c\n${this.name} powered up!\n📈 Level: ${this.level} (${
          this.experience
        }/${this.level * 10})\n❤️ HP: ${this.health}/${this.maxHealth}`,
        `color: ${fighterColor}; font-size: 1rem; font-weight: bold`,
        `font-size: 1rem; font-weight: normal`
      );
    } else {
      this.health += this.level * 2;
    }
  }

  // Skills
  skill1(fighterColor, fighter, opponentColor, opponent) {
    // this.attack();
    this.calculateDamage(
      fighterColor,
      fighter,
      opponentColor,
      opponent,
      this.weakSkill,
      2
    );
  }
  skill2(fighterColor, fighter, opponentColor, opponent) {
    // this.attack();
    this.calculateDamage(
      fighterColor,
      fighter,
      opponentColor,
      opponent,
      this.strongSkill,
      3
    );
  }
}

// #region TYPES OF POKEMON
// ~~~~~ TYPES OF POKEMON ~~~~~ //
class NormalPokemon extends Pokemon {
  constructor(name) {
    super(name, "🐾 Normal", 0, 1, 10, 10, "Tackle", "Hyper Beam");
  }
}
class FirePokemon extends Pokemon {
  constructor(name) {
    super(name, "🔥 Fire", 0, 1, 10, 10, "Ember", "Flamethrower");
  }
}
class WaterPokemon extends Pokemon {
  constructor(name) {
    super(name, "💧 Water", 0, 1, 10, 10, "Water Gun", "Hydro Pump");
  }
}
class GrassPokemon extends Pokemon {
  constructor(name) {
    super(name, "🌿 Grass", 0, 1, 10, 10, "Vine Whip", "Solar Beam");
  }
}
class ElectricPokemon extends Pokemon {
  constructor(name) {
    super(name, "⚡ Electric", 0, 1, 10, 10, "Thundershock", "Thunderbolt");
  }
}
class IcePokemon extends Pokemon {
  constructor(name) {
    super(name, "❄️ Ice", 0, 1, 10, 10, "Powder Snow", "Blizzard");
  }
}
class FightingPokemon extends Pokemon {
  constructor(name) {
    super(name, "🥋 Fighting", 0, 1, 10, 10, "Karate Chop", "Close Combat");
  }
}
class PoisonPokemon extends Pokemon {
  constructor(name) {
    super(name, "☠️ Poison", 0, 1, 10, 10, "Poison Sting", "Sludge Bomb");
  }
}
class GroundPokemon extends Pokemon {
  constructor(name) {
    super(name, "🌍 Ground", 0, 1, 10, 10, "Mud-Slap", "Earthquake");
  }
}
class FlyingPokemon extends Pokemon {
  constructor(name) {
    super(name, "🕊️ Flying", 0, 1, 10, 10, "Gust", "Hurricane");
  }
}
class PsychicPokemon extends Pokemon {
  constructor(name) {
    super(name, "🔮 Psychic", 0, 1, 10, 10, "Confusion", "Psychic");
  }
}
class BugPokemon extends Pokemon {
  constructor(name) {
    super(name, "🐛 Bug", 0, 1, 10, 10, "Bug Bite", "Megahorn");
  }
}
class RockPokemon extends Pokemon {
  constructor(name) {
    super(name, "🗿 Rock", 0, 1, 10, 10, "Rock Throw", "Stone Edge");
  }
}
class GhostPokemon extends Pokemon {
  constructor(name) {
    super(name, "👻 Ghost", 0, 1, 10, 10, "Lick", "Shadow Ball");
  }
}
class DragonPokemon extends Pokemon {
  constructor(name) {
    super(name, "🐉 Dragon", 0, 1, 10, 10, "Twister", "Draco Meteor");
  }
}
class DarkPokemon extends Pokemon {
  constructor(name) {
    super(name, "🌑 Dark", 0, 1, 10, 10, "Bite", "Dark Pulse");
  }
}
class SteelPokemon extends Pokemon {
  constructor(name) {
    super(name, "⚙️ Steel", 0, 1, 10, 10, "Metal Claw", "Flash Cannon");
  }
}
class FairyPokemon extends Pokemon {
  constructor(name) {
    super(name, "🧚 Fairy", 0, 1, 10, 10, "Fairy Wind", "Moonblast");
  }
}
// #endregion TYPES OF POKEMON

// ~~~~~~~~~~ BATTLE ~~~~~~~~~~ //
/*
  GAME RULES:
  [1] EACH MATCH, ALL POKEMONS ARE REVIVED BUT THE REVIVE ONES WILL RESET THEIR EXP TO 0 AND THE LEVEL WILL REMAIN THE SAME.

  BRACKETING RULES:
  [1] IF 5, THE ONE THAT DOESN'T HAVE ENEMY WILL FIGHT WINNER OF LOSERS BRACKET
    [1.1] LOSER'S BRACKET WON'T BE ABLE TO POWER-UP
    [1.2] WINNER OF LOSER'S BRACKET WILL RESET ALL POKEMON'S HP FOR FAIR FIGHT 
    [1.3] LOSER'S BRACKET WINNER WILL FIGHT THE ONE WITHOUT AN EMENY AND THEIR POKEMON WILL BE ABLE TO POWER-UP NOW.

  ROUND-ROBIN RULES:
  [1] THREE TRAINERS IN WINNER'S BRACKET
  [2] ALL POKEMONS WILL REVIVE EACH MATCH
  [3] NO POWERUP FOR POKEMONS
*/
class Battle {
  constructor() {
    this.winnersBracket = [];
    this.losersBracket = [];
    this.losersFight = false;
    this.leaderboard = [];
    this.scoreboard = {};

    while (true) {
      if (this.winnersBracket.length == 3 || noOfTrainers == 3) {
        this.winnersBracket.concat(trainers);
        this.winnersBracket.forEach((trainer) =>
          trainer.pokemons.sort((a, b) => a.level - b.level).reverse()
        );
        this.rrFight();

        break;
      } else if (trainers.length > 3) {
        console.log(
          `%cBRACKET FIGHT`,
          `color: #FFCB05; font-weight: bold; font-size: 4rem;`
        );

        this.randomPlayer();
        this.bracketFight();
      } else break;
    }
  }

  // Scoreboard
  updateScoreboard(match, scoreboard) {
    match.forEach((participant) => {
      const { trainer, isWinner, pokemons } = participant;
      if (!scoreboard[trainer]) {
        scoreboard[trainer] = {
          wins: 0,
          pokemonsLeft: 0,
          pokemonsHealth: 0,
          score: 0,
        };
      }

      // Update the number of wins
      scoreboard[trainer].wins += isWinner ? 1 : 0;

      // Update the number of Pokémon left
      scoreboard[trainer].pokemonsLeft += pokemons.length;

      // Update the highest health of Pokémon
      pokemons.forEach((pokemon) => {
        scoreboard[trainer].pokemonsHealth += pokemon.health;
      });

      scoreboard[trainer].score +=
        scoreboard[trainer].wins * 50 +
        scoreboard[trainer].pokemonsLeft * 5 +
        scoreboard[trainer].pokemonsHealth;
    });
  }
  showScoreboard() {
    console.clear();

    console.log(
      `%cScoreboard`,
      `color: #3466AF; font-weight: bold; font-size: 4rem;`
    );
    console.log("");

    for (let trainer in this.scoreboard) {
      if (this.scoreboard.hasOwnProperty(trainer)) {
        let result = this.scoreboard[trainer];
        console.log(
          `%c${trainer}`,
          `color: #3466AF; font-weight: bold; font-size: 2rem;`
        );
        console.log(
          `%cWins: %c${result.wins}`,
          `margin-left: 2.5rem; color: #3466AF; font-size: 1rem;`,
          `color: #3466AF; font-weight: bold; font-size: 1.25rem;`
        );
        console.log(
          `%cTotal Pokémons Left: %c${result.pokemonsLeft}`,
          `margin-left: 2.5rem; color: #3466AF; font-size: 1rem;`,
          `color: #3466AF; font-weight: bold; font-size: 1.25rem;`
        );
        console.log(
          `%cTotal Pokémons Health: %c${result.pokemonsHealth}`,
          `margin-left: 2.5rem; color: #3466AF; font-size: 1rem;`,
          `color: #3466AF; font-weight: bold; font-size: 1.25rem;`
        );
        console.log(
          `%cTotal Score: %c${result.score}`,
          `margin-left: 2.5rem; color: #3466AF; font-size: 1rem;`,
          `color: #3466AF; font-weight: bold; font-size: 1.25rem;`
        );
      }

      console.log("");
    }
  }

  // Player methods
  randomPlayer() {
    // Select current players to play
    this.player1 = trainers[Math.floor(Math.random() * trainers.length)];
    trainers.splice(trainers.indexOf(this.player1), 1);

    this.player2 = trainers[Math.floor(Math.random() * (trainers.length - 1))];
    trainers.splice(trainers.indexOf(this.player2), 1);

    // Logo
    console.log(
      `%c${this.player1.trainer} vs ${this.player2.trainer}`,
      `color: #FFCB05; font-weight: bold; font-size: 3rem; padding: 0.25rem 1rem;`
    );
  }

  // Pokemon methods
  rngMove(randomness) {
    let move;
    let moveChance = Math.random() * randomness;

    if (moveChance < 0.6) move = 0;
    else if (moveChance < 0.75) move = 1;
    else move = 2;

    return move;
  }
  pokemonMove(
    fighterPlayer,
    fighterColor,
    fighterPokemon,
    opponentColor,
    opponentPokemon
  ) {
    // Move chances
    let move = this.rngMove(3);

    // Move
    switch (move) {
      case 0: // Skill 1
        fighterPokemon.skill1(
          fighterColor,
          fighterPlayer,
          opponentColor,
          opponentPokemon
        );
        break;
      case 1: // Skill 2
        fighterPokemon.skill2(
          fighterColor,
          fighterPlayer,
          opponentColor,
          opponentPokemon
        );
        break;
      case 2: // Heal
        if (fighterPokemon.health == fighterPokemon.maxHealth) {
          move = this.rngMove(2);

          switch (move) {
            case 0: // Skill 1
              fighterPokemon.skill1(
                fighterColor,
                fighterPlayer,
                opponentColor,
                opponentPokemon
              );
              break;
            case 1: // Skill 2
              fighterPokemon.skill2(
                fighterColor,
                fighterPlayer,
                opponentColor,
                opponentPokemon
              );
              break;
          }
        } else fighterPokemon.heal(fighterColor, fighterPlayer);
        break;
    }
  }

  // Battle fights
  bracketFight() {
    while (true) {
      let players = [this.player1, this.player2];
      let pokemons = [this.player1.pokemons.pop(), this.player2.pokemons.pop()];

      players.forEach((player, index) => {
        console.log(
          `${
            pokemonSelectDialogues(player, pokemons[index])[
              Math.floor(Math.random() * 3)
            ]
          }`,
          `color: ${colors[index]}; font-size: 1rem; font-weight: bold`,
          `font-size: 1rem; font-weight: normal`,
          `color: ${colors[index]}; font-size: 1rem; font-weight: bold`,
          `font-size: 1rem; font-weight: normal`
        );
      });

      while (true) {
        console.log("");

        // Setting of fighter and opponent
        let [fighterPlayer, opponentPlayer] = [players[0], players[1]];
        let [fighterPokemon, opponentPokemon] = [pokemons[0], pokemons[1]];
        let [fighterColor, opponentColor] = [colors[0], colors[1]];

        this.pokemonMove(
          fighterPlayer,
          fighterColor,
          fighterPokemon,
          opponentColor,
          opponentPokemon
        );

        if (opponentPokemon.health <= 0) {
          // Winner
          console.log("");
          console.log(
            `%c[TRAINER]%c ${fighterPlayer.trainer}'s %c[POKEMON]%c ${fighterPokemon.name} wins the battle!`,
            `color: ${fighterColor}; font-size: 1rem; font-weight: bold`,
            `font-size: 1rem; font-weight: normal`,
            `color: ${fighterColor}; font-size: 1rem; font-weight: bold`,
            `font-size: 1rem; font-weight: normal`
          );
          fighterPokemon.powerUp(fighterColor);

          // If there's no pokemon left from opponent
          if (opponentPlayer.pokemons.every((pokemon) => pokemon.health <= 0)) {
            if (this.losersFight) {
              // Put the winner's pokemon to trainers
              trainers.push(fighterPlayer);
              fighterPlayer.pokemons.push(fighterPokemon);

              trainers.push(...this.losersBracket);
              this.losersBracket = [];
              this.losersFight = false;
            } else {
              // Put the loser's pokemon to losersBracket
              this.losersBracket.push(opponentPlayer);
              pokemons.pop();
              opponentPlayer.pokemons.unshift(opponentPokemon);
              opponentPlayer.pokemons.forEach((pokemon) => {
                pokemon.resetLevel();
                pokemon.revivePokemon();
              });

              // Put the winner's pokemon to winnersBracket
              this.winnersBracket.push(fighterPlayer);
              fighterPlayer.pokemons.push(fighterPokemon);
            }
            break;
          } else {
            pokemons.pop();
            opponentPlayer.pokemons.unshift(opponentPokemon);
            pokemons.push(opponentPlayer.pokemons.pop());

            console.log("");
            console.log(
              `${
                pokemonSelectDialogues(
                  opponentPlayer.trainer,
                  opponentPokemon.name
                )[Math.floor(Math.random() * 3)]
              }`,
              `color: ${opponentColor}; font-size: 1rem; font-weight: bold`,
              `font-size: 1rem; font-weight: normal`,
              `color: ${opponentColor}; font-size: 1rem; font-weight: bold`,
              `font-size: 1rem; font-weight: normal`
            );
          }
        }

        // Reversing the fighter and opponent
        colors.reverse();
        players.reverse();
        pokemons.reverse();
      }

      console.log("");
      console.log("");
      console.log("");
      // console.log("~~~~~~~~~~~~~~~ GAME END ~~~~~~~~~~~~~~~");
      // break;
      if (trainers.length == 0 && this.winnersBracket.length == 1) {
        console.log(
          `%cTOURNAMENT WINNER: ${this.winnersBracket[0].trainer}`,
          `color: #3466AF; font-weight: bold; font-size: 2rem;`
        );

        break;
      } else if (trainers.length == 1 && this.losersBracket.length == 2) {
        let save = [];
        save.push(...trainers);

        trainers = [];
        trainers.push(...this.losersBracket);

        this.losersBracket = [];
        this.losersFight = true;
        this.losersBracket.push(...save);
        this.randomPlayer();
      } else if (
        this.winnersBracket.length == 2 &&
        this.losersBracket.length == 2
      ) {
        trainers.push(...this.winnersBracket);
        this.winnersBracket = [];
        this.randomPlayer();
      } else if (trainers.length > 1) this.randomPlayer();
      else break;
    }
  }
  rrFight() {
    console.log(
      `%cROUND ROBIN`,
      `color: #FFCB05; font-weight: bold; font-size: 4rem;`
    );
    console.log("");

    // Round-robin Battle
    this.winnersBracket = this.winnersBracket.concat(trainers);
    for (let i = 0; i < this.winnersBracket.length; i++) {
      for (let j = i + 1; j < this.winnersBracket.length; j++) {
        console.log(
          `%c${this.winnersBracket[i].trainer} vs ${this.winnersBracket[j].trainer}`,
          `color: #FFCB05; font-weight: bold; font-size: 3rem; padding: 0.25rem 1rem;`
        );
        console.log("");

        let players = [this.winnersBracket[i], this.winnersBracket[j]];
        let pokemons = [
          this.winnersBracket[i].pokemons.pop(),
          this.winnersBracket[j].pokemons.pop(),
        ];

        players.forEach((player, index) => {
          console.log(
            `${
              pokemonSelectDialogues(player, pokemons[index])[
                Math.floor(Math.random() * 3)
              ]
            }`,
            `color: ${colors[index]}; font-size: 1rem; font-weight: bold`,
            `font-size: 1rem; font-weight: normal`,
            `color: ${colors[index]}; font-size: 1rem; font-weight: bold`,
            `font-size: 1rem; font-weight: normal`
          );
        });

        while (true) {
          console.log("");

          // Setting of fighter and opponent
          let [fighterPlayer, opponentPlayer] = [players[0], players[1]];
          let [fighterPokemon, opponentPokemon] = [pokemons[0], pokemons[1]];
          let [fighterColor, opponentColor] = [colors[0], colors[1]];

          this.pokemonMove(
            fighterPlayer,
            fighterColor,
            fighterPokemon,
            opponentColor,
            opponentPokemon
          );

          if (opponentPokemon.health <= 0) {
            // Winner
            console.log("");
            console.log(
              `%c[TRAINER]%c ${fighterPlayer.trainer}'s %c[POKEMON]%c ${fighterPokemon.name} wins the battle!`,
              `color: ${fighterColor}; font-size: 1rem; font-weight: bold`,
              `font-size: 1rem; font-weight: normal`,
              `color: ${fighterColor}; font-size: 1rem; font-weight: bold`,
              `font-size: 1rem; font-weight: normal`
            );

            // If there's no pokemon left from opponent
            if (
              opponentPlayer.pokemons.every((pokemon) => pokemon.health <= 0)
            ) {
              // Add details to leaderboard
              fighterPlayer.pokemons.push(fighterPokemon);
              this.leaderboard.push([
                {
                  trainer:
                    this.winnersBracket[i] == fighterPlayer
                      ? fighterPlayer.trainer
                      : opponentPlayer.trainer,
                  isWinner: this.winnersBracket[i] == fighterPlayer,
                  pokemons:
                    this.winnersBracket[i] == fighterPlayer
                      ? fighterPlayer.pokemons.filter(
                          (pokemon) => pokemon.health > 0
                        )
                      : opponentPlayer.pokemons.filter(
                          (pokemon) => pokemon.health > 0
                        ),
                },
                {
                  trainer:
                    this.winnersBracket[j] == fighterPlayer
                      ? fighterPlayer.trainer
                      : opponentPlayer.trainer,
                  isWinner: this.winnersBracket[j] == fighterPlayer,
                  pokemons:
                    this.winnersBracket[j] == fighterPlayer
                      ? fighterPlayer.pokemons.filter(
                          (pokemon) => pokemon.health > 0
                        )
                      : opponentPlayer.pokemons.filter(
                          (pokemon) => pokemon.health > 0
                        ),
                },
              ]);

              // Re-fix pokemon's position and revive them
              pokemons.pop();
              opponentPlayer.pokemons.unshift(opponentPokemon);
              opponentPlayer.pokemons.forEach((pokemon) => {
                pokemon.revivePokemon();
              });

              fighterPlayer.pokemons.forEach((pokemon) => {
                pokemon.revivePokemon();
              });

              break;
            } else {
              pokemons.pop();
              opponentPlayer.pokemons.unshift(opponentPokemon);
              pokemons.push(opponentPlayer.pokemons.pop());

              console.log("");
              console.log(
                `${
                  pokemonSelectDialogues(
                    opponentPlayer.trainer,
                    opponentPokemon.name
                  )[Math.floor(Math.random() * 3)]
                }`,
                `color: ${opponentColor}; font-size: 1rem; font-weight: bold`,
                `font-size: 1rem; font-weight: normal`,
                `color: ${opponentColor}; font-size: 1rem; font-weight: bold`,
                `font-size: 1rem; font-weight: normal`
              );
            }
          }

          // Reversing the fighter and opponent
          colors.reverse();
          players.reverse();
          pokemons.reverse();
        }

        console.log("");
      }
    }

    nav = 0;

    let scoreboard = {};
    this.leaderboard.forEach((match) =>
      this.updateScoreboard(match, scoreboard)
    );

    let unsortedScoreboard = Object.entries(scoreboard);
    unsortedScoreboard.sort((a, b) => b[1].score - a[1].score);
    this.scoreboard = Object.fromEntries(unsortedScoreboard);

    console.log("");
    console.log("");
    console.log(
      "%cpress ↵ Enter to show Score Board",
      "background: #222; color: #bada55;"
    );
  }
}

document.addEventListener("keydown", function (event) {
  // console.log("Key pressed:", event.key);

  key = event.key;
  if (tracker == "Menu Selection") {
    if (key == "ArrowUp" || key == "ArrowDown") {
      switch (key) {
        case "ArrowUp":
          nav = nav == 0 ? 0 : nav - 1;
          break;
        case "ArrowDown":
          nav = nav == 2 ? 2 : nav + 1;
          break;
      }

      pokemonGame.menu();
    } else if (key == "Enter") {
      switch (nav) {
        case 0:
          tracker = "Start Battle";
          nav = -1;

          console.clear();
          battle = new Battle();
          break;
        case 1:
          tracker = "Trainers";
          trainers[nav].showPokemons();
          nav = 0;

          break;
        case 2:
          tracker = "Quit";
          break;
      }
    }
  } else if (tracker == "Start Battle") {
    if (key == "Enter" && nav == 0) {
      battle.showScoreboard();
    }
  } else if (tracker == "Trainers") {
    if (
      key == "ArrowUp" ||
      key == "ArrowDown" ||
      key == "ArrowLeft" ||
      key == "ArrowRight"
    ) {
      switch (event.key) {
        case "ArrowUp":
          nav = nav == 0 ? 0 : nav - 1;
          navPokemon = 0;
          break;
        case "ArrowDown":
          nav = nav == noOfTrainers - 1 ? noOfTrainers - 1 : nav + 1;
          navPokemon = 0;
          break;
        case "ArrowLeft":
          navPokemon = navPokemon == 0 ? 0 : navPokemon - 1;
          break;
        case "ArrowRight":
          navPokemon =
            navPokemon == noOfPokemons - 1 ? noOfPokemons - 1 : navPokemon + 1;
          break;
      }

      trainers[nav].showPokemons();
    } else if (key == "B" || key == "b") {
      tracker = "Menu Selection";
      nav = 0;
      navPokemon = 0;

      pokemonGame.menu();
    }
  }
});

const pokemonGame = new PokemonGame();

// noOfTrainers = 3;
// noOfPokemons = 2;
// trainers = [
//   new Trainer("Trainer 1", [
//     new NormalPokemon("Normal 1"),
//     new FirePokemon("Fire 1"),
//   ]),
//   new Trainer("Trainer 2", [
//     new IcePokemon("Ice 1"),
//     new FightingPokemon("Fighting 1"),
//   ]),
//   new Trainer("Trainer 3", [
//     new PsychicPokemon("Psychic 1"),
//     new BugPokemon("Bug 1"),
//   ]),
//   new Trainer("Trainer 4", [
//     new DragonPokemon("Dragon 1"),
//     new FairyPokemon("Fairy 1"),
//   ]),
//   new Trainer("Trainer 5", [
//     new SteelPokemon("Steel 1"),
//     new WaterPokemon("Water 1"),
//   ]),
// ];
let battle;
