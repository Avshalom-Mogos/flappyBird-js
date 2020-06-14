export default class Score {

    constructor(GAME_WIDTH, sound) {

        this.width = 75;
        this.best = localStorage.getItem('best') || 0;
        this.score = 0;
        this.sound = sound;

        this.position = {
            x: ((GAME_WIDTH / 2) - (this.width / 2)),
            y: 90
        }
    }

    draw(ctx, gameState) {

        if (gameState.game.currentState === gameState.game.running) {

            ctx.strokeStyle = 'black';
            ctx.fillStyle = 'white';
            ctx.lineWidth = 2;
            ctx.font = '75px Teko';

            ctx.fillText(this.score, this.position.x, this.position.y, this.width);
            ctx.strokeText(this.score, this.position.x, this.position.y, this.width);

        } else if (gameState.game.currentState === gameState.game.over) {

            const { scoreBoard } = gameState.gameOverObj;
            const newPosition = {
                x: scoreBoard.position.x + scoreBoard.width - 55,
                y: scoreBoard.position.y + 47
            };

            ctx.lineWidth = 1;
            ctx.strokeStyle = 'black';
            ctx.fillStyle = 'white';
            ctx.font = '38px Teko';

            //draw score on the scoreBoard
            ctx.fillText(this.score, newPosition.x, newPosition.y + 10, this.width);
            ctx.strokeText(this.score, newPosition.x, newPosition.y + 10, this.width);

            //draw best score on the scoreBoard
            ctx.fillText(this.best, newPosition.x, newPosition.y + 57, this.width);
            ctx.strokeText(this.best, newPosition.x, newPosition.y + 57, this.width);
        };
    }

    update(bird, pairOfPipes, gameState) {

        const centerOfGap = (pairOfPipes.pipeTopPosition.x + pairOfPipes.width) / 2;

        if (gameState.game.currentState === gameState.game.running) {

            if (bird.position.x === Math.floor(centerOfGap)) {

                this.sound.play();
                this.score++;

                if (this.score > this.best) {

                    localStorage.setItem('best', this.score);
                    this.best = localStorage.getItem('best');
                };
            };
        };
    }

    reset() {

        this.score = 0;
    }
}