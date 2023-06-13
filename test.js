function changeImageDown() {
  trainerElement.src = imagesDown[currentIndex];
  currentIndex = (currentIndex + 1) % imagesDown.length;
}

// Function to start the animation for left key
function startAnimationDown() {
  animationInterval = setInterval(changeImageDown, 150);
}

// Function to stop the animation for left key and revert back to the default image
function stopAnimationDown() {
  clearInterval(animationInterval);
  trainerElement.src = "./images/idle-down.png";
}

// Event listeners for keydown and keyup events for left key
window.addEventListener("keydown", function (event) {
  if (
    (event.key === "s" || event.key === "ArrowDown") &&
    !isLeftKeyDown &&
    !isKeyDown
  ) {
    isLeftKeyDown = true;
    startAnimationDown();
  }
});

window.addEventListener("keyup", function (event) {
  if (event.key === "s" || event.key === "ArrowDown") {
    isLeftKeyDown = false;
    stopAnimationDown();
  }
});
