export default class TowPipes {

    constructor(bird, gameWidth, gameHeight,ground) {

        this.width = 40;
        this.height = gameHeight;
        this.jumpHeight = 35;
        this.speed = 2;
        this.gap = bird.height * 4;
        this.pipeTopImg = document.querySelector("#pipeTopImg");
        this.pipeBottomImg = document.querySelector("#pipeBottomImg");

        let minPipeHeight = (10 * this.height) / 100;
        let min = gameHeight - ground.height - minPipeHeight;
        let max = this.gap + minPipeHeight;
        let randPose = Math.floor(Math.random() * (max - min + 1) + min);

        this.pipeTopPosition = {
            x: gameWidth,
            y: randPose - gameHeight - this.gap

        };

        this.pipeBottomPosition = {
            x: gameWidth,
            y: randPose
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