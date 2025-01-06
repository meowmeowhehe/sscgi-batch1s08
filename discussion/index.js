// console.log("Hi");

// Functions
//  Function in javascript are lines/blocks of codes that tell our device/application to perform certain task(s) when called/invoked.

// Function Declarations
//  (Function Statement) defines function w/ specified parameters

// Parameters
//  - placeholders listed in function declaration or expression.
//  - represent value(s) that are passed into function when it is called/invoked.
//  - used data into functions

// Variables
//  - are named containers for storing data values.
//  - used to store and manipulate data

/*
  Syntax:
    function functionName() {
      code_block (statement)
    }
    
    function keyword - used to defined javascript function
    functionName - user-defined name of the function
*/
function printName() {
  console.log("My name is Juan.");
}

// invoked/called - call a function
printName();
// results an error if invoked if we haven't defined it yet.

// Function Declaration vs Expression
//  Function Declaration can be created through function declaration by using function keyword and adding function name
//  Declared Functions are not executed immediately, they are saved for lates use when invoked (called upon)
//  Declared Function can be hoisted
declaredFunction();

// NOTE:
//  In JS, Hoisting is a behavior for certain variables and functions to run or use them before declaration
function declaredFunction() {
  console.log("Hello World from declaredFunction!");
}

//  Function Expression
//    - can also be stored in a variable
//    - anonymous function assigned to variableFunction
//    Anonymous Function
//      - function without name, cannot be hoisted.
// variableFunction();
let variableFunction = function () {
  console.log("Hello Again!");
};
variableFunction();

const constFunction = function () {
  console.log("Initialized with const!");
};
constFunction();

// Parameters and Arguments
function printName(name) {
  console.log("My Name is", name, arguments[1]);
}
printName("Juan"); // argument

// "name" is parameter
// Parameter acts as named variable/containers that exists only inside a function
// is used to store information that is provided to function when called/invoked

// Argument is a value passed when invoking a function, this argument is then stored as the parameters within the function
printName("Happy");
printName("Yui", 12);

function argumentFunction() {
  console.log("Function was passed as an argument before message was printed.");
}
function invokeFunction(argumentFunction) {
  // argumentFunction();
  console.log(argumentFunction);
}
invokeFunction(argumentFunction);

// Object Oriented Programming (OOP)
//  - programming style based on classes and object, group data (properties), and methods (actions)

// Class - blueprint, template for an object
// Object - instance of a class
// Instance - refers to an object created from a class or a constructor function
// Constructor - special method used in Class to initalize object

// Basic Instance
// Creates an Object called person
const person = {
  name: "Juan Dela Cruz",
  age: 25,
  greet: function () {
    // this keyword refers to current Object (person)
    console.log(
      `Was 'sup, Mi nombre es ${this.name} y mi edad es ${this.age}.`
    );
  },
};
person.greet();

class Person {
  constructor(name, age) {
    this.name = name; // Initialize
    this.age = age; // Initialize
  }

  introduce() {
    console.log(
      `Was 'sup, Mi nombre es ${this.name} y mi edad es ${this.age}.`
    );
  }
}
const person1 = new Person("Kiko", 26);
const person2 = new Person("Jun", 17);

person1.introduce();
person2.introduce();

// without ES6
function Person1(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function () {
    console.log(
      `Was 'sup, Mi nombre es ${this.name} y mi edad es ${this.age}.`
    );
  };
}
const person3 = new Person("Carpo", 34);
person3.introduce();

class Car {
  constructor(model) {
    this.model = model;
  }

  start() {
    console.log(`${this.model} is starting...`);
  }
}
const car1 = new Car("Toyota");
car1.start();

// Pokemon Game
class Pokemon {
  constructor(name, type, level, hp) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.hp = hp;
  }

  attack(opponent) {
    console.log(`[${this.name}] attacked ${opponent.name}!`);

    let damage = this.level * 2;
    console.log(`[${this.name}] leveled up to ${damage}`);

    this.receivedDamage(opponent, damage);
  }

  receivedDamage(opponent, damage) {
    opponent.hp -= damage;
    console.log(`[${opponent.name}] received ${damage} damage!`);
    console.log(`[${opponent.name}] has ${opponent.hp} remaining!`);
  }

  heal() {
    console.log(
      `[${this.name}] used heal and healed ${
        Math.floor(Math.random() * (2 * this.level)) + 1
      } hp`
    );
  }
}

class FirePokemon extends Pokemon {
  constructor(name, level, hp) {
    super(name, "Fire", level, hp);
  }

  attack(opponent) {
    console.log(`${this.name} uses Fire Breath on ${opponent.name}!`);

    let damage = this.level * 2;
    this.receivedDamage(opponent, damage);
  }
}

let pikachu = new Pokemon("Pikachu", "Lightning", 5, 100);
let charmander = new FirePokemon("Charmander", 5, 100);

pikachu.attack(charmander);
charmander.heal();

console.clear();
charmander.attack(pikachu);

// Encapsulation - refers to bundling of data (properties) and methods (functions) that operate on data within single unit or class

// Abstraction - involves simplifying the complex system by exposing essential features

// Polymorphism - ability of different classes to respond to the same method call in a way that is specific to their type

/*
  Method Overriding
    - subclasses can provide their own specific implementation of method that is already defined in parent class
  
  Method Overloading
    - multiple method with same name can be defined with different parameters, dynamic method resolution
    - the method that gets called depend on the object's type (not the reference type) which is determined in runtime
*/

/*
  Mini-activity
    Create function for received damage.
    Screenshot results on chatbox
  
  Mini-activity
    create Trainers and Pokemon to be used in Battle Ground
*/

// console.clear();
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
class Pokemon2 {
  constructor(pokemon, name, type) {
    this.status = "Alive";
    this.pokemon = pokemon;
    this.name = name;
    this.type = type;
    this.level = Math.floor(Math.random() * 5) + 1;
    this.hp = this.level * 20;
  }

  attack(opponent) {
    console.log(`${this.name} attacked ${opponent.name}!`);
  }
}
class Battle {
  constructor() {}
}

let trainer1 = new Trainer("Thonie", [
  new Pokemon2("Pikachu", "Alvarez", "Electric"),
  new Pokemon2("Squirtle", "Gabion", "Water"),
  new Pokemon2("Charmander", "Nonan", "Fire"),
  new Pokemon2("Bulbasaur", "Carpo", "Grass, Poison"),
  new Pokemon2("Ekans", "Atienza", "Poison"),
  new Pokemon2("Muk", "Diwa", "Poison"),
  new Pokemon2("Tentacool", "Jurado", "Water, Poison"),
]);
// trainer1.myPokemons();

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