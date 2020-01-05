export default class Ground {
    
    constructor(gameWidth, gameHeight) {

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.width = this.gameWidth;
        this.height = 60;
        this.img = document.querySelector("#groundImg");

        this.partOnePosition = {
            x: 0,
            y: this.gameHeight - this.height,
        }

        this.partTwoPosition = {
            x: this.partOnePosition.x + this.width,
            y: this.gameHeight - this.height,
        }

        this.speed = 1;
    }

    draw(ctx) {

        ctx.drawImage(this.img, this.partOnePosition.x, this.partOnePosition.y, this.width, this.height);
        ctx.drawImage(this.img, this.partTwoPosition.x, this.partTwoPosition.y, this.width, this.height);

    }

    update() {
        this.partOnePosition.x -= this.speed;
        this.partTwoPosition.x -= this.speed;

        if (this.partOnePosition.x + this.width === 0) {
            this.partOnePosition.x = this.gameWidth;
        }
        if (this.partTwoPosition.x + this.width === 0) {
            this.partTwoPosition.x = this.gameWidth ;
        }
    }
}