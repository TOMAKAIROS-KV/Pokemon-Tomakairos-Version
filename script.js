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
  chosenPikachu.applyToOperator();
}

function showMonster2() {
  chosenCharmander.applyToOperator();
}

function showMonster3() {
  chosenSquirtle.applyToOperator();
}

function showMonster4() {
  chosenBulbasaur.applyToOperator();
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
    secretEncounter();
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

let primalKyogre = {
  name: "Primal Kyogre",
  img: "./images/PrimalKyogre.gif",
  get lvl() {
    return levelResult + 10;
  },
  applyToOperator: function () {
    imgElementEnemy.src = this.img;
    enemyMonster.appendChild(imgElementEnemy);
    enemyMonsterName.style.setProperty(
      "--before-content",
      "'" + this.name + "'"
    );
    enemyMonster.style.marginRight = "115px";

    let levelResult = primalKyogre.lvl; // Define levelResult here

    function elevelAction() {
      let elevelText = document.querySelector("#elevelText");
      elevelText.setAttribute("data-value", levelResult);
      console.log("Your level is " + levelResult);
    }

    elevelAction();
  },
};

let chosenPikachu = {
  name: "Pikachu",
  img: "./images/PikachuBack.gif",
  lvl: 15,
  applyToOperator: function () {
    imgElementChosen.src = this.img;
    chosenMonster.appendChild(imgElementChosen);
    chosenMonsterName.style.setProperty(
      "--before-content",
      "'" + this.name + "'"
    );
    console.log("Oh, it's so cute, it's the best of all!...Oh, hi Pikachu.");

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
  },
};

function monsterBattle1() {
  section3.style.display = "block";
  section3.classList.add("visible");
  primalKyogre.applyToOperator();
}

let celebi = {
  name: "Celebi",
  img: "./images/Celebi.gif",
  get lvl() {
    return levelResult + 10;
  },
  applyToOperator: function () {
    imgElementEnemy.src = this.img;
    enemyMonster.appendChild(imgElementEnemy);
    enemyMonsterName.style.setProperty(
      "--before-content",
      "'" + this.name + "'"
    );
    enemyMonster.style.marginRight = "";

    let levelResult = celebi.lvl; // Define levelResult here

    function elevelAction() {
      let elevelText = document.querySelector("#elevelText");
      elevelText.setAttribute("data-value", levelResult);
      console.log("Your level is " + levelResult);
    }

    elevelAction();
  },
};

let chosenCharmander = {
  name: "Charmander",
  img: "./images/CharmanderBack.gif",
  lvl: 15,
  applyToOperator: function () {
    imgElementChosen.src = this.img;
    chosenMonster.appendChild(imgElementChosen);
    chosenMonsterName.style.setProperty(
      "--before-content",
      "'" + this.name + "'"
    );
    console.log(
      "Ohh, well that's no problem, because my Pokémon will be... Charmander."
    );

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
  },
};

function monsterBattle2() {
  section3.style.display = "block";
  section3.classList.add("visible");
  celebi.applyToOperator();
}

let moltres = {
  name: "Moltres",
  img: "./images/Moltres.gif",
  get lvl() {
    return levelResult + 10;
  },
  applyToOperator: function () {
    imgElementEnemy.src = this.img;
    enemyMonster.appendChild(imgElementEnemy);
    enemyMonsterName.style.setProperty(
      "--before-content",
      "'" + this.name + "'"
    );
    enemyMonster.style.marginRight = "100px";
    enemyMonster.style.marginBottom = "100px";

    let levelResult = moltres.lvl; // Define levelResult here

    function elevelAction() {
      let elevelText = document.querySelector("#elevelText");
      elevelText.setAttribute("data-value", levelResult);
      console.log("Your level is " + levelResult);
    }

    elevelAction();
  },
};

let chosenSquirtle = {
  name: "Squirtle",
  img: "./images/SquirtleBack.gif",
  lvl: 15,
  applyToOperator: function () {
    imgElementChosen.src = this.img;
    chosenMonster.appendChild(imgElementChosen);
    chosenMonsterName.style.setProperty(
      "--before-content",
      "'" + this.name + "'"
    );
    console.log(
      " I thought about it a lot, and it took me along time, but I finally decided to choose... Squirtle! Ohhh!"
    );

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
  },
};

function monsterBattle3() {
  section3.style.display = "block";
  section3.classList.add("visible");
  moltres.applyToOperator();
}

let suicune = {
  name: "Suicune",
  img: "./images/Suicune.gif",
  get lvl() {
    return levelResult + 10;
  },
  applyToOperator: function () {
    imgElementEnemy.src = this.img;
    enemyMonster.appendChild(imgElementEnemy);
    enemyMonsterName.style.setProperty(
      "--before-content",
      "'" + this.name + "'"
    );
    enemyMonster.style.marginRight = "10px";

    let levelResult = suicune.lvl; // Define levelResult here

    function elevelAction() {
      let elevelText = document.querySelector("#elevelText");
      elevelText.setAttribute("data-value", levelResult);
      console.log("Your level is " + levelResult);
    }

    elevelAction();
  },
};

let chosenBulbasaur = {
  name: "Bulbasaur",
  img: "./images/BulbasaurBack.gif",
  lvl: 15,
  applyToOperator: function () {
    imgElementChosen.src = this.img;
    chosenMonster.appendChild(imgElementChosen);
    chosenMonsterName.style.setProperty(
      "--before-content",
      "'" + this.name + "'"
    );
    console.log(
      "Oh, I wish I hadn't overslept. But now I would choose as my Pokémon... Bulbasaur!"
    );

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
  },
};

function monsterBattle4() {
  section3.style.display = "block";
  section3.classList.add("visible");
  suicune.applyToOperator();
}

let trainer = {
  name: "Red",
  img: "./images/trainerRed-throw.png",
  applyToOperator: function () {
    imgElementChosen.src = this.img;
    chosenMonster.appendChild(imgElementChosen);
    chosenMonsterName.style.setProperty("--before-content", "'Red'");
  },
};

let missingNo = {
  name: "MissingNo",
  img: "./images/MissingNo.gif",
  get lvl() {
    return levelResult + 85; // due to the getter function we are able to grab variables from outside of this missingNo variable and use the levelResult variable's value. By doing so we can now add any number to it and recall/create levelResult below and it will show the latest result.
  },
  applyToOperator: function () {
    imgElementEnemy.src = this.img;
    enemyMonster.appendChild(imgElementEnemy);
    enemyMonster.style.scale = ".4";
    enemyMonster.style.marginTop = "25px";
    enemyMonster.style.marginBottom = "50px";
    enemyMonster.style.marginRight = "50px";
    enemyMonsterName.style.setProperty(
      "--before-content",
      "'" + this.name + "'"
    );
    console.log("BATTLE START! MissingNo!");
    let levelResult = missingNo.lvl; // Define levelResult here

    function elevelAction() {
      let elevelText = document.querySelector("#elevelText");
      elevelText.setAttribute("data-value", levelResult);
      console.log("Your level is " + levelResult);
    }

    elevelAction();
  },
};

function secretEncounter() {
  section3.style.display = "block";
  section3.classList.add("visible");
  missingNo.applyToOperator();
  trainer.applyToOperator();
}

startGame.addEventListener("click", startGameAction);

let chosenMonsterName = document.getElementById("chosenMonsterName");
let enemyMonsterName = document.getElementById("enemyMonsterName");
let attackBtn = document.getElementById("attackBtn");
let healthBar = document.getElementById("healthBar");
let expBar = document.getElementById("expBar");
let levelText = document.getElementById("levelText");

let levelResult = 15; // this levelResult is separate from the ones in the operators. this one defines the chosen monsters current level. everyone starts out at the same level.
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
    attackBtn1.style.pointerEvents = "none";
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
// SET UP NAME, HEALTH-BAR, and LEVEL FOR ENEMY MONSTER! --- DONE! monster levels will be 10 higher than chosen Monsters.
// SET ATTACK ANIMATION FOR CHOSEN MONSTER PER ATTACK BUTTON PER MONSTER.
// SET UP SO THAT ATTACK BUTTONS DAMAGE ENEMY, NOT YOURSELF!
// SET A DELAY AFTER YOUR ATTACK FOR ENEMY ATTACK TO START AND ANIMATE.
// SET THE ENEMIES ATTACK TO INFLICT DAMAGE ON YOUR HEALTH.
// SET IT UP SO EXP IS GAINED PER BATTLE NOT PER HIT.
// SET UP 3 MATCHES per ENEMY MONSTER
// SET UP EVOLUTION ALERT
// SET UP VICTORY SCREEN!
// SET UP TO GO BACK TO HOME!
