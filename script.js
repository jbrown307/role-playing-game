// ---------- stats vars ----------

let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

// ---------- control vars ---------- 

// One method for finding specific elements in your HTML is using the querySelector() method. The querySelector() method takes a CSS selector as an argument and returns the first element that matches that selector

// button1 is a variable that is not going to be reassigned. If you are not going to assign a new value to a variable, it is best practice to use the const keyword to declare it instead of the let keyword. This will tell JavaScript to throw an error if you accidentally reassign it.
const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")

const text = document.querySelector("#text")
const xpText = document.querySelector("#xpText")
const goldText = document.querySelector("#goldText")
const monsterStats = document.querySelector("#monsterStats")
const monsterName = document.querySelector("#monsterName")
const monsterHealthText = document.querySelector("#monsterHealth")
const healthText = document.querySelector("#healthText")

// Object properties are written as key: value pairs, where key is the name of the property (or the key), and value is the value that property holds
const locations = [
    {
      name: "town square",
      "button text": ["Go to store", "Go to cave", "Fight dragon"],
      "button functions": [goStore, goCave, fightDragon],
      text: "You are in the town square. You see a sign that says \"Store\"." 
    },

    {
      name: "store",
      "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
      "button functions": [buyHealth, buyWeapon, goTown],
      text: "You enter the store."  
    }
  ];

// ---------- functions ----------

// The innerText property controls the text that appears in an HTML element

// When a player clicks your Go to store button, you want to change the buttons and text

// You need to wrap the text Store in double quotes. Because your string is already wrapped in double quotes, you'll need to escape the quotes around Store. You can escape them with a backslash \.
function goTown() {
  update (locations[0]);
}

function goStore() {

}

function goCave() {
    console.log("Going to cave.");
}

function fightDragon() {
    console.log("Fighting dragon.");
}

function buyHealth() {

}
  
function buyWeapon() {
  
}

function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0]
  button2.onclick = location["button functions"][1]
  button3.onclick = location["button functions"][2]
  text.innerText = location.text;
}
  


// initialize buttons

// Button elements have a special property called onclick, which you can use to determine what happens when someone clicks that button

// You can access properties in JavaScript a couple of different ways. The first is with dot notation

// Use dot notation to set the onclick property of your button1 to the function reference of goStore
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon; 


