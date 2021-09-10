import { PIPE_WIDTH, SPACE_BETWEEN_PIPES } from '../app.js';

export default class TowPipes {

    constructor(bird, gameWidth, gameHeight, ground, idx) {

        this.idx = idx;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.ground = ground;
        this.width = PIPE_WIDTH;
        this.height = gameHeight;
        this.jumpHeight = 35;
        this.speed = 2;
        this.gap = bird.height * 3.4;
        this.pipeTopImg = document.querySelector("#pipeTopImg");
        this.pipeBottomImg = document.querySelector("#pipeBottomImg");

        this.pipeTopPosition = { x: 0, y: 0 };
        this.pipeBottomPosition = { x: 0, y: 0 };

        this.setNewRandomPosition();
    };

    setNewRandomPosition(exitedScreen) {

        const minPipeHeight = (10 * this.height) / 100;
        const min = this.gameHeight - this.ground.height - minPipeHeight;
        const max = this.gap + minPipeHeight;
        const randomPosition = Math.floor(Math.random() * (max - min + 1) + min);
        const xWithSpaces = this.gameWidth + (this.idx * SPACE_BETWEEN_PIPES);

        const x = exitedScreen ? this.gameWidth : xWithSpaces;

        this.pipeTopPosition.x = x;
        this.pipeTopPosition.y = randomPosition - this.gameHeight - this.gap;

        this.pipeBottomPosition.x = x;
        this.pipeBottomPosition.y = randomPosition;
    }

    handelScreenExit() {

        const exitedScreen = (this.pipeTopPosition.x + this.width) <= 0 || (this.pipeBottomPosition.x + this.width) <= 0;
        if (exitedScreen) {
            this.setNewRandomPosition(true);
        };
    }

    draw(ctx) {

        ctx.drawImage(this.pipeTopImg, this.pipeTopPosition.x, this.pipeTopPosition.y, this.width, this.height);
        ctx.drawImage(this.pipeBottomImg, this.pipeBottomPosition.x, this.pipeBottomPosition.y, this.width, this.height);
    }

    update() {

        this.pipeTopPosition.x -= this.speed;
        this.pipeBottomPosition.x -= this.speed;
        this.handelScreenExit();
    }
};