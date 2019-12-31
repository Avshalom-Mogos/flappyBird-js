import AudioHandler from "./audio.js";

export default class Score {

    constructor(GAME_WIDTH, GAME_HEIGHT) {
            this.width = 60,
            this.score = 0,
            this.lineWidth = 2,
            this.font = "55px Teko",
            this.strokeStyle = "black",
            this.fillStyle = "white",
            this.sound = new AudioHandler("/assets/audio/point.ogg");

            this.position =
            {
                x: GAME_WIDTH / 2 - this.width / 2,
                y: 70
            }
    }
    draw(ctx) {
        ctx.strokeStyle = this.strokeStyle;
        ctx.fillStyle = this.fillStyle;
        ctx.lineWidth = this.lineWidth;
        ctx.font = this.font;
        ctx.fillText(this.score, this.position.x, this.position.y, this.width);
        ctx.strokeText(this.score, this.position.x, this.position.y, this.width)
        
    }
    update(bird, pairOfPipes) {
        let pipePositioFromTop = (pairOfPipes.pipeTopPosition.y + pairOfPipes.height);
        let pipePositioFromBottom = (pairOfPipes.pipeBottomPosition.y - bird.height);


        if (bird.position.x === pairOfPipes.pipeTopPosition.x &&
            bird.position.y > pipePositioFromTop && bird.position.y < pipePositioFromBottom) {
                this.sound.play();
            this.score++

        }

    }

}

