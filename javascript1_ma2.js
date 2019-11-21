//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
var myAnimal = {
  name : "Fido",
  sound : "Barf",
  age : 5
};

function addAnimal(name, sound, age) {
  var newAnimal = Object.create(myAnimal);
  newAnimal.name = name;
  newAnimal.sound = sound;
  newAnimal.age = age;
  console.log(newAnimal);
}

addAnimal('Garfield', 'Meow', 9);


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArray.slice(4));


//3. Delete the last number in the array that you created above.

myArray.pop()
console.log(myArray);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas:

function findFruit() {
  var string = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";
  var words = string.split(' ');

  for (let i = 0; i < words.length; i++) {
    if (words[i] == "Strawberries") {
      words[i] = "Bananas";
    }
    else if (words[i] == "strawberries") {
      words[i] = "bananas"
    }
    else if (words[i] == "strawberry") {
      words[i] = "banana"
    }
  }
  console.log(words.join(" "));
}

findFruit();

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var names = ["Liverpool", "Manchester City", "Chelsea", "Leicester"];
const body = document.querySelector("body");
const button = document.createElement("button");
button.innerHTML = "Click me";
body.appendChild(button);

function changeArray() {
  var names = ["Ferrari", "Porsche", "Bugatti", "Fiat"];
  console.log(names);
}

button.addEventListener("click", changeArray);

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var people = ['Paul', 'Linda', 'Evan'];

function checkName(name) {
  return name === "Paul";
}

function filter() {
  var filtered = people.filter(checkName);
  console.log(filtered);
}

filter();


//7. Create a simple function that logs the date.

var date = new Date();

console.log(date.toDateString());
