

class Player{
    constructor(canvas, lives){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        this.x = 0;
        this.y = 0;

        this.lives = lives;

    }
    removeLives(){
        this.lives = this.lives - 1;
    }

    didCollide(veggie){
        const veggieTop = veggie.y;
        const veggieBottom = veggie.y + veggie.size;
        const veggieRight = veggie.x + veggie.size;
        const veggieLeft = veggie.x;

        if (this.x > veggieLeft && this.x < veggieRight 
        && this.y > veggieTop && this.y < veggieBottom){
            return true;
        }else{
            return false;
        }
    }
}
