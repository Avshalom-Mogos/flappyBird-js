
export default class GameState {

    constructor(GAME_WIDTH, GAME_HEIGHT) {

        this.game = {
            currentState: 1,
            getReady: 1,
            running: 2,
            over: 3
        }

        this.getReadyObj = {

            img: document.querySelector('#getReadyImg'),
            width: 250,
            height: GAME_HEIGHT / 2,

            position: {
                x: GAME_WIDTH / 2 - 250 / 2,
                y: 50
            }
        }

        this.gameOverObj = {

            img: document.querySelector("#gameOverImg"),
            width: 250,
            height: 50,

            position: {
                x: ((GAME_WIDTH / 2) - (250 / 2)),
                y: GAME_HEIGHT / 4
            },

            scoreBoard: {

                img: document.querySelector("#scoreBoardImg"),
                width: 250,
                height: 120,

                position: {
                    x: ((GAME_WIDTH / 2) - (250 / 2)),
                    y: (GAME_HEIGHT / 2.7)
                }
            },

            restartBtn: {

                img: document.querySelector("#restartImg"),
                width: 150,
                height: 50,

                position: {
                    x: ((GAME_WIDTH / 2) - (150 / 2)),
                    y: (GAME_HEIGHT / 1.7)
                }
            }
        }
    }

    draw(ctx) {

        if (this.game.currentState === this.game.getReady) {
            //draw get ready img
            ctx.drawImage(
                this.getReadyObj.img,
                this.getReadyObj.position.x, this.getReadyObj.position.y,
                this.getReadyObj.width, this.getReadyObj.height
            );
        }

        else if (this.game.currentState === this.game.over) {

            //draw game over img
            ctx.drawImage(
                this.gameOverObj.img,
                this.gameOverObj.position.x, this.gameOverObj.position.y,
                this.gameOverObj.width, this.gameOverObj.height
            );

            //draw scoreBoard img
            ctx.drawImage(
                this.gameOverObj.scoreBoard.img,
                this.gameOverObj.scoreBoard.position.x, this.gameOverObj.scoreBoard.position.y,
                this.gameOverObj.scoreBoard.width, this.gameOverObj.scoreBoard.height
            );

            //draw restart button img
            ctx.drawImage(
                this.gameOverObj.restartBtn.img,
                this.gameOverObj.restartBtn.position.x, this.gameOverObj.restartBtn.position.y,
                this.gameOverObj.restartBtn.width, this.gameOverObj.restartBtn.height
            );
        }
    }

    reset() {

        this.currentState = 1;
    }
}