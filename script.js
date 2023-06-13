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
    let electricType1 = document.getElementById("attackBtn1");
    let electricType2 = document.getElementById("attackBtn2");
    let electricType3 = document.getElementById("attackBtn3");
    let electricType4 = document.getElementById("attackBtn4");
    electricType1.textContent = "volt-tackle";
    electricType2.textContent = "quick-attack";
    electricType3.textContent = "thunder-bolt";
    electricType4.textContent = "iron-tail";
    monsterBattle1();
  } else if (
    isMonster2Shown &&
    (!isMonster1Shown || !isMonster3Shown || !isMonster4Shown)
  ) {
    let fireType1 = document.getElementById("attackBtn1");
    let fireType2 = document.getElementById("attackBtn2");
    let fireType3 = document.getElementById("attackBtn3");
    let fireType4 = document.getElementById("attackBtn4");
    fireType1.textContent = "ember";
    fireType2.textContent = "tackle";
    fireType3.textContent = "scratch";
    fireType4.textContent = "fire-punch";
    monsterBattle2();
  } else if (
    isMonster3Shown &&
    (!isMonster1Shown || !isMonster2Shown || !isMonster4Shown)
  ) {
    let waterType1 = document.getElementById("attackBtn1");
    let waterType2 = document.getElementById("attackBtn2");
    let waterType3 = document.getElementById("attackBtn3");
    let waterType4 = document.getElementById("attackBtn4");
    waterType1.textContent = "scratch";
    waterType2.textContent = "bubble";
    waterType3.textContent = "tackle";
    waterType4.textContent = "water-gun";
    monsterBattle3();
  } else if (
    isMonster4Shown &&
    (!isMonster1Shown || !isMonster2Shown || !isMonster3Shown)
  ) {
    let grassType1 = document.getElementById("attackBtn1");
    let grassType2 = document.getElementById("attackBtn2");
    let grassType3 = document.getElementById("attackBtn3");
    let grassType4 = document.getElementById("attackBtn4");
    grassType1.textContent = "scratch";
    grassType2.textContent = "vine-whip";
    grassType3.textContent = "tackle";
    grassType4.textContent = "razor-leaf";
    monsterBattle4();
  }
}

function monsterBattle1() {
  section3.style.display = "block";
  section3.classList.add("visible");
  imgElementChosen.src = "./images/PikachuBack.gif";
  chosenMonster.appendChild(imgElementChosen);
  imgElementEnemy.src = "./images/PrimalKyogre.gif";
  enemyMonster.appendChild(imgElementEnemy);
  enemyMonster.style.marginRight = "200px";
  chosenMonsterName.style.setProperty("--before-content", "'Pikachu'");
  console.log("BATTLE START! Pikachu!");
}

function monsterBattle2() {
  section3.style.display = "block";
  section3.classList.add("visible");
  imgElementChosen.src = "./images/CharmanderBack.gif";
  chosenMonster.appendChild(imgElementChosen);
  imgElementEnemy.src = "./images/Celebi.gif";
  enemyMonster.appendChild(imgElementEnemy);
  enemyMonster.style.marginRight = "";
  chosenMonsterName.style.setProperty("--before-content", "'Charmander'");
  console.log("BATTLE START! Charmander!");
}

function monsterBattle3() {
  section3.style.display = "block";
  section3.classList.add("visible");
  imgElementChosen.src = "./images/SquirtleBack.gif";
  chosenMonster.appendChild(imgElementChosen);
  imgElementEnemy.src = "./images/Moltres.gif";
  enemyMonster.appendChild(imgElementEnemy);
  enemyMonster.style.marginRight = "200px";
  chosenMonsterName.style.setProperty("--before-content", "'Squirtle'");
  console.log("BATTLE START! Squirtle!");
}

function monsterBattle4() {
  section3.style.display = "block";
  section3.classList.add("visible");
  imgElementChosen.src = "./images/BulbasaurBack.gif";
  chosenMonster.appendChild(imgElementChosen);
  imgElementEnemy.src = "./images/Suicune.gif";
  enemyMonster.appendChild(imgElementEnemy);
  enemyMonster.style.marginRight = "100px";
  chosenMonsterName.style.setProperty("--before-content", "'Bulbasaur'");
  console.log("BATTLE START! Bulbasaur!");
}

startGame.addEventListener("click", startGameAction);

let chosenMonsterName = document.getElementById("chosenMonsterName");
let attackBtn = document.getElementById("attackBtn");
let healthBar = document.getElementById("healthBar");
let expBar = document.getElementById("expBar");
let levelText = document.getElementById("levelText");

let levelResult = 5; // declare variable outside of function in order to continuously update it.
let healthDepletionMultiplier = 6.5;
let expMultiplier = 7.5;

const attackBtn1 = document.getElementById("attackBtn1");
const attackBtn2 = document.getElementById("attackBtn2");
const attackBtn3 = document.getElementById("attackBtn3");
const attackBtn4 = document.getElementById("attackBtn4");

function attackAction1() {
  let damage = Math.floor(Math.random() * healthDepletionMultiplier);
  let resultHealth = (healthBar.value -= damage);
  console.log(resultHealth);
  if (healthBar.value <= 0) {
    console.log("you lost!");
    attackBtn.style.pointerEvents = "none";
    attackBtn2.style.pointerEvents = "none";
    attackBtn3.style.pointerEvents = "none";
    attackBtn4.style.pointerEvents = "none";
  }
}

function levelAction() {
  let expGained = Math.floor(Math.random() * expMultiplier);
  let resultEXP = (expBar.value += expGained);
  console.log(resultEXP);

  let levelText = document.querySelector("#levelText");
  console.log("your level is " + levelResult);

  if (expBar.value >= 100) {
    levelUp();
    levelText.setAttribute("data-value", levelResult);
    expBar.value = "0";
    healthBar.value = "100";
  }
}

function levelUp() {
  levelResult++;
  if (levelUp) {
    expMultiplier -= 0.5;
    console.log("your exp multiplier is" + expMultiplier);
    healthDepletionMultiplier -= 1;
    console.log("your damage multiplier is" + healthDepletionMultiplier);
  }
  return true;
}

function combineActions() {
  attackAction1();
  levelAction();
}

attackBtn1.addEventListener("click", combineActions);

//THINGS TO DO!
// SET UP HEALTH-BAR FOR ENEMY MONSTER!
// SET ATTACK ANIMATION FOR CHOSEN MONSTER PER ATTACK BUTTON PER MONSTER.
// SET UP SO THAT ATTACK BUTTONS DAMAGE ENEMY, NOT YOURSELF!
// SET A DELAY AFTER YOUR ATTACK FOR ENEMY ATTACK TO START AND ANIMATE.
// SET THE ENEMIES ATTACK TO INFLICT DAMAGE ON YOUR HEALTH.
// SET IT UP SO EXP IS GAINED PER BATTLE NOT PER HIT.
// SET UP 3 MATCHES per ENEMY MONSTER
// SET UP EVOLUTION ALERT
// SET UP VICTORY SCREEN!
// SET UP TO GO BACK TO HOME!
