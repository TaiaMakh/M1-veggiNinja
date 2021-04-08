class Veggie {
  constructor(canvas, positionX, speed, fruit) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.x = positionX;
    this.y = 0;
    this.size = 80;

    this.speed = speed;
    this.fruit = fruit;

    this.eliminate = false;
  }
  draw() {
    const entireImg = document.createElement("img");
    entireImg.src = `images/fruit-cutter-game-kit/PNG/fruits/entireFruits/entire${this.fruit}.png`;

    if (!this.eliminate) {
      this.ctx.drawImage(entireImg, this.x, this.y, this.size, this.size);
    } else {
      const slicedImg = document.createElement("img");
      slicedImg.src = `images/fruit-cutter-game-kit/PNG/fruits/slicedFruits/sliced${this.fruit}.png`;

      const splashImg = document.createElement("img");
      splashImg.src = `images/fruit-cutter-game-kit/PNG/fruits/splashFruits/splash${this.fruit}.png`;

      let quadratic = Math.sqrt(this.y / 0.05);
      this.ctx.drawImage(
        slicedImg,
        60 + this.x - quadratic,
        this.y,
        this.size,
        this.size
      );
      this.ctx.drawImage(
        entireImg,
        -60 + this.x + quadratic,
        this.y,
        this.size,
        this.size
      );
    }
  }
  drawSplash(x, y) { 
    const splashImg = document.createElement("img");
    splashImg.src = `images/fruit-cutter-game-kit/PNG/fruits/splashFruits/splash${this.fruit}.png`;
      this.ctx.drawImage(
        splashImg,
        x,
        y,
        this.size + 5,
        this.size + 5
      );
    //   splashImg.setTimeout(() => {
    //     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //   }, 6000);
  }

  updatePosition() {
    this.y += this.speed;
  }

  isInsideScreen() {
    const veggieTop = this.y;
    const screenBottom = this.canvas.height;
    const isInside = veggieTop < screenBottom;

    return isInside;
  }
}
