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

// ~~~~~ GLOBAL ~~~~~ //
let noOfPlayers = 0;
let noOfPokemons = 0;
let trainers = [];

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

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function logo() {
  console.log(
    "                                                      ==                                            "
  );
  console.log(
    "                                                    =##**                                           "
  );
  console.log(
    "                                                  :##*:=**.                                         "
  );
  console.log(
    "                                      :.--       +#*-:-+**-                                         "
  );
  console.log(
    "         .:+**##***:            .=#####%###=   -##*+##+.    :*************                          "
  );
  console.log(
    "     -**#**=======+*##=     :%##*+=--+##*-=*#= :%##****##*:*%**====**::-**.    -%#****+=:.          "
  );
  console.log(
    "  -*#*=-::::::::::::==*#.   :%##*+:::=#+:::-=*##*=:::::-=+*#%*-:::-*+:::=*-    -%#*-====+*%#***=:.  "
  );
  console.log(
    ":%%#*:::::::::::::::::=**   .##%#*:::=-:::::=#*-::+**#+::=*##*::::-==:::=*=   .-#%#*::::=***+===+**."
  );
  console.log(
    " :%%#*-:::::::-****+::=** .:=**%#*::::::::=#*#=::*=.*=:-**#%**:::::-::::=*****+++***-:::-+**-:::+*: "
  );
  console.log(
    "  :###***=:::::=*:+*::=###*=====*#=:::::-**::#=::=**:-*#+=**#=::::::::::-**-=*=::-=+*-:::=*+:::=*+  "
  );
  console.log(
    "   .**###*-::::-***=:-*#=:=#-::--=#+::::===**#*-::::--::::-=**=:-=:::::-*+:=*#=-=*:=**:::=*-::-**.  "
  );
  console.log(
    "     ..#%#*:::::==::+##=:-*#*++*--+*::=:::::-=**=:::::::-+***:::=*=:-*:+*-:-=*##*-:-**:=:-=:::=*-   "
  );
  console.log(
    "       :%%#*:::::-*###*::-=+***-:-**:-*##*=:::==*########%%*=:::=**=+*-+*-:::--:::-+*:=+:::::-**    "
  );
  console.log(
    "        -%%#*::::=*#%##-:::::::::+#=:-*#%%##**-::--+**-..%%***+=*##***==**=::::::=**-:=+:::::+*.    "
  );
  console.log(
    "         =%%#=:::-+*%%#*-::::::=*#*::-*# :+%%%##*=-+#.  :+*#%%%%#%%#%**:==********+::-**::::=*+     "
  );
  console.log(
    "          *%##=:::=###%%##***###%%#***##.    :*%%%#*#.           .:+%#*******=:*%**=-=**:::-**      "
  );
  console.log(
    "           %%##-::-=#: =#%%%#= .%%%#**=          -*%#.             .:=+*%%%%#: *%%%%##**:::+*-      "
  );
  console.log(
    "           .%%#*--=*##                                                              -%#**+=*+       "
  );
  console.log(
    "            :%%####*=                                                               .=*%%%#*.       "
  );
  console.log(
    "             ==.                                                                                    "
  );
}

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
      !Number.isInteger(Number(noOfPlayers)) ||
      noOfPlayers < 3 ||
      noOfPlayers > 5
    ) {
      noOfPlayers = prompt(
        `${
          firstTime
            ? "" // Fix for first time use
            : !Number.isInteger(Number(noOfPlayers))
            ? "Input isn't an integer!\n\n"
            : noOfPlayers < 3
            ? "Minimum players of 3!\n\n"
            : noOfPlayers > 5
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
            ? "Input isn't an integer!\n"
            : noOfPokemons < 1
            ? "Minimum players of 1!\n"
            : noOfPokemons > 5
            ? "Maximum players of 5!\n"
            : ""
        }Set no. of pokemons per player`
      );

      firstTime = false;
    }
  }

  // Trainer settings
  setTrainer() {
    for (let i = 0; i < noOfPlayers; i++) {
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
        inputPokemons = selectPokemons.split(",");

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
      "color: #FFCB05; font-weight: bold; font-size: 64px;"
    );

    console.log("");

    console.log(
      `%c${nav == 0 ? "> Start Battle <" : "Start Battle"}`,
      `padding: 4px 16px; color: ${
        nav == 0 ? "#FFCB05" : "#C7A008"
      }; font-weight: bold; font-size: 16px;`
    );
    console.log(
      `%c${nav == 1 ? "> Trainers <" : "Trainers"}`,
      `padding: 4px 16px; color: ${
        nav == 1 ? "#FFCB05" : "#C7A008"
      }; font-weight: bold; font-size: 16px;`
    );
    console.log(
      `%c${nav == 2 ? "> Quit <" : "Quit"}`,
      `padding: 4px 16px; color: ${
        nav == 2 ? "#FFCB05" : "#C7A008"
      }; font-weight: bold; font-size: 16px;`
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
      `color: #FFCB05; font-weight: bold; font-size: 48px`
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
        pokemon.level * 5
      }]`,
      `padding: 4px 16px;color: #FFCB05; font-weight: bold; font-size: 16px`
    );
    console.log(
      `%c👾 Name: ${pokemon.name}`,
      `padding: 4px 16px;color: #FFCB05; font-weight: bold; font-size: 16px`
    );
    console.log(
      `%c❤️ Health: ${pokemon.health}/${pokemon.maxHealth}`,
      `padding: 4px 16px;color: #FFCB05; font-weight: bold; font-size: 16px`
    );

    console.log("");

    // Skills
    console.log(
      `%c🛠️ Skills`,
      `color: #FFCB05; font-weight: bold; font-size: 32px`
    );
    console.log(
      `%c🥉 Skill 1: ${pokemon.weakSkill}`,
      `padding: 4px 16px;color: #FFCB05; font-weight: bold; font-size: 16px`
    );
    console.log(
      `%c🥇 Skill 2: ${pokemon.strongSkill}`,
      `padding: 4px 16px;color: #FFCB05; font-weight: bold; font-size: 16px`
    );

    console.log("");
    console.log("");
    console.log("");
    console.log("%c↑ ↓ Trainer", "background: #222; color: #bada55;");
    console.log("%c← → Pokemon", "background: #222; color: #bada55;");
    console.log("%cB Back", "background: #222; color: #bada55;");
  }
}

// #region POKEMON
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

  revivePokemon() {}
}

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
// #endregion POKEMON

class Battle {
  async bracketFight(players) {
    while (true) {
      while (true) {}
    }
  }
}

document.addEventListener("keydown", function (event) {
  // console.log("Key pressed:", event.key);

  if (tracker == "Menu Selection") {
    key = event.key;
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
          break;
        case 1:
          tracker = "Trainers";

          trainers[nav].showPokemons();
          break;
        case 2:
          tracker = "Quit";
          break;
      }

      nav = 0;
    }
  } else if (tracker == "Start Battle") {
  } else if (tracker == "Trainers") {
    switch (event.key) {
      case "ArrowUp":
        nav = nav == 0 ? 0 : nav - 1;
        navPokemon = 0;
        break;
      case "ArrowDown":
        nav = nav == noOfPlayers - 1 ? noOfPlayers - 1 : nav + 1;
        navPokemon = 0;
        break;
      case "ArrowLeft":
        navPokemon = navPokemon == 0 ? 0 : navPokemon - 1;
        break;
      case "ArrowRight":
        navPokemon =
          navPokemon == noOfPokemons - 1 ? noOfPokemons - 1 : navPokemon + 1;
        break;
      case "B":
      case "b":
        tracker = "Menu Selection";
        nav = 0;
        navPokemon = 0;
        pokemonGame.menu();
        break;
    }

    trainers[nav].showPokemons();
  } else if (tracker == "Quit") {
  }
});

const pokemonGame = new PokemonGame();
