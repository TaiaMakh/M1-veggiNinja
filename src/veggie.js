
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
    const orangeImg = document.createElement('img');
    orangeImg.src = `../images/fruit-cutter-game-kit/PNG/fruits/entireFruits/entire${this.fruit}.png`
    /*orangeImg.onload = () => */
    this.ctx.drawImage(orangeImg, this.x, this.y, this.size, this.size);

    //cuando draw image partida src = .. ${this.fruit}

  }
  updatePosition(){
      this.y += this.speed;
  }

  isInsideScreen(){
    const veggieTop = this.y;
    const screenBottom = this.canvas.height;
    const isInside = veggieTop < screenBottom;

    return isInside;
  }
}

