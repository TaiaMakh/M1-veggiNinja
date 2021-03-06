let probability = 0.98;

class Game {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.canvas = null;
    this.ctx = null;
    this.veggies = [];
    this.player = null;
    this.score = 0;
    this.livesElement = undefined;
    this.scoreElement = undefined;
    this.gameIsOver = false;
    this.sound = new Sounds();
    this.collideX = null;
    this.collideY = null;
  }
  start() {
    this.livesElement = this.gameScreen.querySelector(".lives .value");
    this.scoreElement = this.gameScreen.querySelector(".score .value");

    this.canvas = this.gameScreen.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.canvasContainer = this.gameScreen.querySelector(".canvas-container");
    this.containerWidth = this.canvasContainer.clientWidth;
    this.containerHeight = this.canvasContainer.clientHeight;
    this.canvas.setAttribute("width", this.containerWidth);
    this.canvas.setAttribute("height", this.containerHeight);

    this.player = new Player(this.canvas, 5);
    

    function handleMouseOver(event) {
      this.player.x = event.clientX;
      this.player.y = event.clientY;
    }
    const boundMouseOver = handleMouseOver.bind(this);
    const mainDivMouse = document.querySelector(".main-div");
    mainDivMouse.addEventListener("mousemove", boundMouseOver);

    this.startLoop();
  }

  startLoop() {
    const loop = () => {
      if (this.veggies.length < 3) {
        if (Math.random() > probability) {
          const randomX = Math.floor((this.canvas.width - 100) * Math.random());
          const randomFruit = Math.floor(Math.random()*13 + 1);
          const newVeggie = new Veggie(this.canvas, randomX, 3.5, randomFruit);
          this.veggies.push(newVeggie);
        }
      }
      this.checkCollisions();

      this.veggies = this.veggies.filter((veggie) => {
        veggie.updatePosition();
        if (!veggie.isInsideScreen() && veggie.eliminate === false) {
          this.player.removeLives();
          if (this.player.lives === 0) {
            this.gameOver();
          }
        }
        return veggie.isInsideScreen();
      });

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.veggies.forEach((veggie) => {
        veggie.draw();
        if(veggie.eliminate){
          veggie.drawSplash(this.collideX, this.collideY);
        }
      });

      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      }
      this.updateGameStatus();
    };
    loop();
  }
  checkCollisions() {
    this.veggies.forEach((veggie) => {
      if (this.player.didCollide(veggie)) { 
        this.sound.playCut();

        this.collideX = veggie.x;
        this.collideY = veggie.y;
        
        if (!veggie.eliminate)this.score += 1;
        veggie.eliminate = true;
      }
    });
  }

  gameOver() {
    this.gameIsOver = true;
    endGame(this.score);
  }
  updateGameStatus() {
    this.scoreElement.innerHTML = this.score;
    this.livesElement.innerHTML = this.player.lives;
  }
}
