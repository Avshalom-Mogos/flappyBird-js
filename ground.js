export default class Ground {
    
    constructor(gameWidth, gameHeight) {

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.width = this.gameWidth;
        this.height = (gameHeight *10)/100
        this.img = document.querySelector("#groundImg");
        this.speed = 2;

        this.partOnePosition = {
            x: 0,
            y: this.gameHeight - this.height,
        }

        this.partTwoPosition = {
            x: this.partOnePosition.x + this.width,
            y: this.gameHeight - this.height,
        }
        

    }

    draw(ctx) {

        ctx.drawImage(this.img, this.partOnePosition.x, this.partOnePosition.y, this.width, this.height);
        ctx.drawImage(this.img, this.partTwoPosition.x, this.partTwoPosition.y, this.width, this.height);
    }

    update() {
        //move each part of the ground to the left
        this.partOnePosition.x -= this.speed;
        this.partTwoPosition.x -= this.speed;

        //if one of the parts move out of the screen move it back to right of the screen
        if (this.partOnePosition.x + this.width <= 0 + this.speed ) {
            
            this.partOnePosition.x = this.gameWidth;
        }

        if (this.partTwoPosition.x + this.width <= 0 + this.speed) {
            
            this.partTwoPosition.x = this.gameWidth ;
        }
    }
}