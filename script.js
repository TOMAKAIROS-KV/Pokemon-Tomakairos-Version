let logo = document.getElementById("logo-container");
let gameTitle = document.getElementById("game-title");
let section1 = document.getElementById("sec1");
let startBtn = document.getElementById("pressStart");
let section2 = document.getElementById("sec2");
let monster1 = document.getElementById("Pikachu");
let monster2 = document.getElementById("Charmander");
let monster3 = document.getElementById("Squirtle");
let monster4 = document.getElementById("Bulbasaur");
let pikachu = document.getElementsByClassName("Pikachu")[0];
let charmander = document.getElementsByClassName("Charmander")[0];
let bulbasaur = document.getElementsByClassName("Bulbasaur")[0];
let squirtle = document.getElementsByClassName("Squirtle")[0];
let monsterName = document.getElementById("monsterName");

//This is the animation for the logo and the game-title on load.
function slideLogoUp() {
  logo.classList.add("slideUP");
  return true;
}

if (slideLogoUp()) {
  setTimeout(() => {
    gameTitle.classList.add("visible");
  }, 650);
  setTimeout(() => {
    startBtn.addEventListener("click", hideMenu);
  }, 1500);
}

// This is the start button onclick function
function hideMenu() {
  section1.classList.add("hidden");
  section1.style.pointerEvents = "none";
  music.play();
  setTimeout(() => {
    section1.style.display = "none";
  }, 1000);
  section2.style.display = "block";
  section2.classList.add("visible");
}

//THIS IS THE BG MUSIC.
const music = document.getElementById("myAudio");
music.volume = 0.1;

//This is the monster selection process.

monster1.addEventListener("click", showMonster1);
monster2.addEventListener("click", showMonster2);
monster3.addEventListener("click", showMonster3);
monster4.addEventListener("click", showMonster4);

let isMonster1Shown = false;
let isMonster2Shown = false;
let isMonster3Shown = false;
let isMonster4Shown = false;

let selectSound = document.getElementById("selectSound");
selectSound.volume = 0.5;

function showMonster1() {
  pikachu.style.display = "block";
  pikachu.classList.add("showMonster");
  monsterName.innerText = "Pikachu";
  selectSound.currentTime = 0; // Reset the sound to the beginning
  selectSound.play();
  isMonster1Shown = true;

  if (isMonster1Shown) {
    charmander.style.display = "none";
    charmander.classList.remove("showMonster");
    isMonster2Shown = false;
    squirtle.style.display = "none";
    squirtle.classList.remove("showMonster");
    isMonster3Shown = false;
    bulbasaur.style.display = "none";
    bulbasaur.classList.remove("showMonster");
    isMonster4Shown = false;
  }
}

function showMonster2() {
  charmander.style.display = "block";
  charmander.classList.add("showMonster");
  monsterName.innerText = "Charmander";
  selectSound.currentTime = 0; // Reset the sound to the beginning
  selectSound.play();
  isMonster2Shown = true;

  if (isMonster2Shown) {
    pikachu.style.display = "none";
    pikachu.classList.remove("showMonster");
    isMonster1Shown = false;
    squirtle.style.display = "none";
    squirtle.classList.remove("showMonster");
    isMonster3Shown = false;
    bulbasaur.style.display = "none";
    bulbasaur.classList.remove("showMonster");
    isMonster4Shown = false;
  }
}

function showMonster3() {
  squirtle.style.display = "block";
  squirtle.classList.add("showMonster");
  monsterName.innerText = "Squirtle";
  selectSound.currentTime = 0; // Reset the sound to the beginning
  selectSound.play();
  isMonster3Shown = true;

  if (isMonster3Shown) {
    pikachu.style.display = "none";
    pikachu.classList.remove("showMonster");
    isMonster1Shown = false;
    charmander.style.display = "none";
    charmander.classList.remove("showMonster");
    isMonster2Shown = false;
    bulbasaur.style.display = "none";
    bulbasaur.classList.remove("showMonster");
    isMonster4Shown = false;
  }
}

function showMonster4() {
  bulbasaur.style.display = "block";
  bulbasaur.classList.add("showMonster");
  monsterName.innerText = "Bulbasaur";
  selectSound.currentTime = 0; // Reset the sound to the beginning
  selectSound.play();
  isMonster4Shown = true;

  if (isMonster4Shown) {
    pikachu.style.display = "none";
    pikachu.classList.remove("showMonster");
    isMonster1Shown = false;
    charmander.style.display = "none";
    charmander.classList.remove("showMonster");
    isMonster2Shown = false;
    squirtle.style.display = "none";
    squirtle.classList.remove("showMonster");
    isMonster3Shown = false;
  }
}

let startGame = document.getElementById("startGame");
let battleAudio = document.getElementById("startGameAudio");
battleAudio.volume = 0.1;

let section3 = document.getElementById("sec3");

let chosenMonster = document.getElementById("chosenMonster");
let enemyMonster = document.getElementById("enemyMonster");
let imgElementChosen = document.createElement("img");
let imgElementEnemy = document.createElement("img");

function startGameAction() {
  music.pause();
  music.currentTime = 0;
  battleAudio.play();

  section2.classList.add("hidden");
  section2.style.pointerEvents = "none";
  setTimeout(() => {
    section2.style.display = "none";
  }, 1000);

  if (
    !isMonster1Shown &&
    !isMonster2Shown &&
    !isMonster3Shown &&
    !isMonster4Shown
  ) {
    console.log("BATTLE START! MISSINGO!");
  } else if (
    isMonster1Shown &&
    (!isMonster2Shown || !isMonster3Shown || !isMonster4Shown)
  ) {
    section3.style.display = "block";
    section3.classList.add("visible");
    imgElementChosen.src = "./images/PikachuBack.gif";
    chosenMonster.appendChild(imgElementChosen);
    imgElementEnemy.src = "./images/PrimalKyogre.gif";
    enemyMonster.appendChild(imgElementEnemy);
    enemyMonster.style.marginRight = "200px";
    console.log("BATTLE START! Pikachu!");
  } else if (
    isMonster2Shown &&
    (!isMonster1Shown || !isMonster3Shown || !isMonster4Shown)
  ) {
    section3.style.display = "block";
    section3.classList.add("visible");
    imgElementChosen.src = "./images/CharmanderBack.gif";
    chosenMonster.appendChild(imgElementChosen);
    imgElementEnemy.src = "./images/Celebi.gif";
    enemyMonster.appendChild(imgElementEnemy);
    enemyMonster.style.marginRight = "";
    console.log("BATTLE START! Charmander!");
  } else if (
    isMonster3Shown &&
    (!isMonster1Shown || !isMonster2Shown || !isMonster4Shown)
  ) {
    section3.style.display = "block";
    section3.classList.add("visible");
    imgElementChosen.src = "./images/SquirtleBack.gif";
    chosenMonster.appendChild(imgElementChosen);
    imgElementEnemy.src = "./images/Moltres.gif";
    enemyMonster.appendChild(imgElementEnemy);
    enemyMonster.style.marginRight = "200px";
    console.log("BATTLE START! Squirtle!");
  } else if (
    isMonster4Shown &&
    (!isMonster1Shown || !isMonster2Shown || !isMonster3Shown)
  ) {
    section3.style.display = "block";
    section3.classList.add("visible");
    imgElementChosen.src = "./images/BulbasaurBack.gif";
    chosenMonster.appendChild(imgElementChosen);
    imgElementEnemy.src = "./images/Suicune.gif";
    enemyMonster.appendChild(imgElementEnemy);
    enemyMonster.style.marginRight = "100px";
    console.log("BATTLE START! Bulbasaur!");
  }
}

let attackBtn = document.getElementById("attackBtn");

function attackAction() {}

startGame.addEventListener("click", startGameAction);
