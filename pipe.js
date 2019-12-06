export default class Pipe {
    constructor(gameWidth, gameHeight) {
        this.width = 40;
        this.height = 160;

        this.position = {
            x: gameWidth,
            y: gameHeight - this.height
        };

        this.jumpHeight = 35;
        this.speed = 1;
    };


    draw(ctx, pipeImg) {
        ctx.drawImage(pipeImg, this.position.x, this.position.y, this.width, this.height);
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if (!deltaTime) return;
        this.position.x -= this.speed;
    }
    addNew(gameWidth, gameHeight) {
        if (this.position.x === 0 - this.width){
            this.position.x=gameWidth + this.width,
            this.position.y= gameHeight - this.height
            // ctx.drawImage(pipeImg, this.position.x, this.position.y, this.width, this.height);

        }
    }
};