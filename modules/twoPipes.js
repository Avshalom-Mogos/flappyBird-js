export default class TowPipes {

    constructor(bird, gameWidth, gameHeight, ground) {

        this.width = 55;
        this.height = gameHeight;
        this.jumpHeight = 35;
        this.speed = 2;
        this.gap = bird.height * 3.4;
        this.pipeTopImg = document.querySelector("#pipeTopImg");
        this.pipeBottomImg = document.querySelector("#pipeBottomImg");

        const minPipeHeight = (10 * this.height) / 100;
        const min = gameHeight - ground.height - minPipeHeight;
        const max = this.gap + minPipeHeight;
        const randomPosition = Math.floor(Math.random() * (max - min + 1) + min);

        this.pipeTopPosition = {
            x: gameWidth,
            y: randomPosition - gameHeight - this.gap
        };

        this.pipeBottomPosition = {
            x: gameWidth,
            y: randomPosition
        };
    };

    draw(ctx) {

        ctx.drawImage(this.pipeTopImg, this.pipeTopPosition.x, this.pipeTopPosition.y, this.width, this.height);
        ctx.drawImage(this.pipeBottomImg, this.pipeBottomPosition.x, this.pipeBottomPosition.y, this.width, this.height);
    }

    update() {
        
        this.pipeTopPosition.x -= this.speed;
        this.pipeBottomPosition.x -= this.speed;
    }
};