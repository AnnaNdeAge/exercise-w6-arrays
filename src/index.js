const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

let length = pokemons.length;
const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: 
  console.log("I have " + length + " pokemons!")
};

countThem()


const orderThem = () => {
  console.log(pokemons.sort())
  // order the pokemons alphabetically
};
orderThem()


const flipThem = () => {
  // reverse the order of the pokemons
  console.log(pokemons.reverse())
};

flipThem()

const makeThemBig = () => {
  pokemons.forEach(element => {
    // print the pokemons in UPPERCASE letters
    console.log(element.toUpperCase());
  });

};

makeThemBig()

const onlyTheBs = () => {
  // only print the pokemons that starts with B
  pokemons.forEach((name) => {
    if (name.charAt(0) == 'B')
      console.log(name);
  });
};


// C
const notTheCs = () => {
  // remove all pokemons that starts with C
  pokemons.forEach((name) => {
    if (name.charAt(0) !== 'C')
      console.log(name);
  });
};

notTheCs()

const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  pokemons.forEach((name) => {
    if (name.charAt(0) !== 'C')
      console.log(name + ' ' + pokemons.indexOf(name));
  });
};

nameAndIdThanks()

const catchPokemon = name => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.push("newPokemon");
  console.log(pokemons);
};

const didICatchIt = name => {
  // check the pokemons to see if a specific pokemon is in the array
  console.log(pokemons.includes(name));
};

didICatchIt('Pikachu')


const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
  pokemons.splice(2, 0, "Clefairy");
  console.log(pokemons);
};

addInThirdPlace()

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
};

const theLongestName = (array) => {
  let longestName = array[0].length; // Initialize longestName with the length of the first string
  let ans = array[0]; // Initialize ans with the first string

  // Loop through the array starting from the second element
  for (let i = 1; i < array.length; i++) {
    let lengthCurrentName = array[i].length; // Get the length of the current string

    // Compare the length of the current string with max_str
    if (lengthCurrentName > longestName) {
      ans = array[i]; // If current string is longer, update ans
      longestName = lengthCurrentName; // Update longestName with the new maximum length
    }
  }

  return ans; // Return the longest string found
}

console.log(theLongestName(pokemons));

