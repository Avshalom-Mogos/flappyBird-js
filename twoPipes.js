export default class TowPipes {
    constructor(bird, gameWidth, gameHeight) {
        this.width = 40;
        this.height = gameHeight;
        this.gap = bird.height * 4;

        let randPose = Math.floor(Math.random() * ((this.gap + 100) - 400 + 1) + 400);
        //Math.floor(Math.random() * (max - min + 1) + min);
      


        this.pipeTopPosition = {
            x: gameWidth,
            y: randPose - gameHeight - this.gap

        };

        this.pipeBottomPosition = {
            x: gameWidth,
            y: randPose
        };

        console.log(`TOP: x:${this.pipeTopPosition.x} y:${this.pipeTopPosition.y}`);
        console.log(`BOTTOM: x:${this.pipeBottomPosition.x} y:${this.pipeBottomPosition.y}`);


        this.jumpHeight = 35;
        this.speed = 1;
    };

    pipeTopImg = document.querySelector("#pipeTopImg");
    pipeBottomImg = document.querySelector("#pipeBottomImg");

    draw(ctx) {
        ctx.drawImage(this.pipeTopImg, this.pipeTopPosition.x, this.pipeTopPosition.y, this.width, this.height);
        ctx.drawImage(this.pipeBottomImg, this.pipeBottomPosition.x, this.pipeBottomPosition.y, this.width, this.height);


    }

    update() {

        this.pipeTopPosition.x -= this.speed;
        this.pipeBottomPosition.x -= this.speed;
    }


};