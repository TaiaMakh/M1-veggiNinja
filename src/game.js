let probability = 0.95;

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
      if (this.veggies.length < 4) {
        if (Math.random() > 0.47) {
          const randomX = Math.floor((this.canvas.width - 20) * Math.random());
          const newVeggie = new Veggie(this.canvas, randomX, 5);
          this.veggies.push(newVeggie);
        }
      }
      this.checkCollisions();

      this.veggies = this.veggies.filter((veggie) => {
        veggie.updatePosition();
        return veggie.isInsideScreen();
      });

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.veggies.forEach((veggie) => {
        veggie.draw();
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
        this.score += 1;
        console.log("the score is", this.score);
        // this.score.innerHtml = this.score;
        //temporary fruit disappears out of canvas
        veggie.y = this.canvas.width + veggie.size;
      } else {
           this.player.removeLives();
           console.log();
    //     if (this.player.lives === 0) {
    //       this.gameOver();
    //     }
       }
    });
  }

  gameOver() {
    this.gameIsOver = true;
    endGame(this.score);
  }
  updateGameStatus() {
    this.livesElement.innerHtml = this.player.lives;
  }
}
