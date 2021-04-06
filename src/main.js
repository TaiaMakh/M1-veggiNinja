let splashScreen;
let gameScreen;
let gameOverScreen;
const mainDiv = document.querySelector(".main-div");

function buildDom(htmlString) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  console.log(tempDiv.children[0]);
  return tempDiv.children[0]; //???
}
function createSplashScreen() {
  splashScreen = buildDom(`
    <main class="splash-container">
        <h1>Veggie Ninja</h1>
        <span class = "begin-span"><h2>Slice to begin!</h2></span>
        <div class= "div-btn-start"><button class ="btn-start"></button></div> 
    </main>
    `);
  mainDiv.appendChild(splashScreen);
  const startBtn = splashScreen.querySelector("button");

  startBtn.addEventListener("mouseover", startGame);
}

function removeSplashScreen() {
  splashScreen.remove();
}

function createGameScreen() {
  gameScreen = buildDom(
    `<main class="game container">
        <header>
          <div class="score">
              <span class="label">Score:</span>
              <span class="value"></span>
            </div>

          <div class="lives">
            <span class="label">Lives:</span>
            <span class="value"></span>
          </div>
        </header>

        <div class="canvas-container">
          <canvas></canvas>
        </div>
      </main>`
  );
  mainDiv.appendChild(gameScreen);
  return gameScreen;
}

function removeGameScreen(){
    gameScreen.remove();
}

function createGameOverScreen(score) {
  gameOverScreen = buildDom(
    `<main class="game-over">
        <h1>GAME OVER</h1>
        <p>Your score: <span>${score}</span> </p>
        <span>Slice to restart!</span>
        <div class= "div-btn-start"><button class ="btn-start"></button></div>
    </main>`
);
  const button = gameOverScreen.querySelector("button");
  button.addEventListener("mouseover", startGame);
  mainDiv.appendChild(gameOverScreen);
}

function removeGameOverScreen(){
    gameOverScreen.remove();
}

function startGame(){
    removeSplashScreen();
    if(gameOverScreen){
        removeGameOverScreen();
    }
    createGameScreen();
      game = new Game(gameScreen);
      game.start();
}
function endGame(score){
    removeGameScreen();
    createGameOverScreen(score);
}

// function mouseEspada(){
//     document.documentElement.style.cursor = "url(./images/fruit-cutter-game-kit/PNG/slash-effects/faca-diagonal-2.png)"
//}
// window.addEventListener('load', mouseEspada)
window.addEventListener('load', createSplashScreen)
