export default class Score {

    constructor(GAME_WIDTH, GAME_HEIGHT, sound) {

        this.width = 30;
        this.bestWidth = 120;
        this.best = localStorage.getItem("best") || 0;
        this.score = 0;
        this.lineWidth = 2;
        this.font = "75px Teko";
        this.strokeStyle = "black";
        this.fillStyle = "white";
        this.sound = sound;

        this.scorePosition = {

            x: ((GAME_WIDTH / 2) - (this.width / 2)),
            y: 90
        }

        this.bestPosition = {

            x: ((GAME_WIDTH) / 2 - (this.bestWidth / 2)),
            y: 130
        }
    }

    drawCurrentScore(ctx, gameState) {

        if (gameState.game.currentState === gameState.game.running) {

            ctx.strokeStyle = this.strokeStyle;
            ctx.fillStyle = this.fillStyle;
            ctx.lineWidth = this.lineWidth;
            ctx.font = this.font;

            ctx.fillText(this.score, this.scorePosition.x, this.scorePosition.y, this.width);
            ctx.strokeText(this.score, this.scorePosition.x, this.scorePosition.y, this.width);
        } else if (gameState.game.currentState === gameState.game.over) {

            let scoreBoardObj = gameState.gameOverObj.scoreBoard;
            let newPose = {
                x: scoreBoardObj.position.x + scoreBoardObj.width - 55,
                y: scoreBoardObj.position.y + 47
            };


            ctx.lineWidth = 1;
            ctx.strokeStyle = "black";
            ctx.fillStyle = "white";
            ctx.font = "38px Teko";

            ctx.fillText(this.score, newPose.x, newPose.y + 10, this.width);
            ctx.strokeText(this.score, newPose.x, newPose.y + 10, this.width);

            //draw best score



            ctx.fillText(this.best, newPose.x, newPose.y + 57, this.width);
            ctx.strokeText(this.best, newPose.x, newPose.y + 57, this.width);
        }

    }

    update(bird, pairOfPipes, gameState) {

        let centerOfGap = (pairOfPipes.pipeTopPosition.x + pairOfPipes.width) / 2;

        if (gameState.game.currentState === gameState.game.running) {

            if (bird.position.x === Math.floor(centerOfGap)) {

                this.sound.play();
                this.score++

                if (this.score > this.best) {

                    localStorage.setItem("best", this.score);
                    this.best = localStorage.getItem("best");
                }
            }
        }
    }

    reset() {

        this.score = 0;
    }
}