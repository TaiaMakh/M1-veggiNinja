const orangeImg = document.createElement('img');
orangeImg.src = `../images/fruit-cutter-game-kit/PNG/fruits/elementos-06.png`

class Veggie {
  constructor(canvas, positionX, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.x = positionX;
    this.y = 0;
    this.size = 20;

    this.speed = speed;
  }
    draw() {
        //fill style img
        this.ctx.drawImage(orangeImg, this.x, this.y, this.size, this.size );
    }

    updatePosition(){
        this.y += this.speed;
    }

    isInsideScreen(){


    }
}