
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
    const entireImg = document.createElement('img');
      entireImg.src = `images/fruit-cutter-game-kit/PNG/fruits/entireFruits/entire${this.fruit}.png`

    if(!this.eliminate){     
      this.ctx.drawImage(entireImg, this.x, this.y, this.size, this.size);
    }else{
      const slicedImg = document.createElement('img');
      slicedImg.src = `images/fruit-cutter-game-kit/PNG/fruits/slicedFruits/sliced${this.fruit}.png`
    
      let quadratic = Math.sqrt(this.y/0.05)
      this.ctx.drawImage(slicedImg, 60+this.x-quadratic, this.y, this.size, this.size);
      this.ctx.drawImage(entireImg, -60+this.x+quadratic, this.y, this.size, this.size);
      
    }
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

