export default class Score {

    constructor(GAME_WIDTH, GAME_HEIGHT, sound) {

        this.width = 30;
        this.best = localStorage.getItem("best") || 0;
        this.score = 0;
        this.lineWidth = 2;
        this.font = "55px Teko";
        this.strokeStyle = "black";
        this.fillStyle = "white";
        this.sound = sound;

        this.scorePosition = {

            x: ((GAME_WIDTH / 2) - (this.width / 2)),
            y: 70
        }

        this.bestPosition = {
            
            x: ((GAME_WIDTH) / 2 - (this.width / 2)),
            y: 130
        }
    }

    drawCurrentScore(ctx) {
        
        ctx.strokeStyle = this.strokeStyle;
        ctx.fillStyle = this.fillStyle;
        ctx.lineWidth = this.lineWidth;
        ctx.font = this.font;
        ctx.fillText(this.score, this.scorePosition.x, this.scorePosition.y, this.width);
        ctx.strokeText(this.score, this.scorePosition.x, this.scorePosition.y, this.width);
    }

    drawBestScore(ctx) {

        ctx.strokeStyle = this.strokeStyle;
        ctx.fillStyle = this.fillStyle;
        ctx.lineWidth = this.lineWidth;
        ctx.font = this.font;
        ctx.fillText(this.best, this.bestPosition.x, this.bestPosition.y, this.width);
        ctx.strokeText(this.best, this.bestPosition.x, this.bestPosition.y, this.width);
    }

    update(bird, pairOfPipes) {
        
        let pipePositioFromTop = (pairOfPipes.pipeTopPosition.y + pairOfPipes.height);
        let pipePositioFromBottom = (pairOfPipes.pipeBottomPosition.y - bird.height);

        if (bird.position.x === pairOfPipes.pipeTopPosition.x &&
            bird.position.y > pipePositioFromTop && bird.position.y < pipePositioFromBottom) {
                this.sound.play();
            this.score++

            if(this.score > this.best)
            {
                localStorage.setItem("best", this.score);
                this.best = localStorage.getItem("best");
            }
        }
    }

    reset() {
        
        this.score = 0;
    }
}