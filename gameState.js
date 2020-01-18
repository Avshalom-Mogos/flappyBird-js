
export default class GameState {

    constructor(GAME_WIDTH, GAME_HEIGHT) {

        this.game = {

            currentState: 1,
            getReady: 1,
            running: 2,
            over: 3
        }

        this.spaceBetween = 50;

        this.getReadyObj = {

            img: document.querySelector('#getReadyImg'),
            width: 184,
            height: 240,

            position: {
                // x: GAME_WIDTH / 2 - this.width / 2, REFACTOR LATER!
                x: GAME_WIDTH / 2 - 184 / 2,
                y: 50
            }
        }

        this.gameOverObj = {

            img: document.querySelector("#gameOverImg"),
            width: 200,
            height: 45,

            position: {

                //current position of "Game Over" image
                x: ((GAME_WIDTH / 2) - (200 / 2)),
                y: GAME_HEIGHT / 4
            },

            scoreBoard: {

                img: document.querySelector("#scoreBoardImg"),
                width: 200,
                height: 100,

                position: {

                    //current position of "scoreBoard" image
                    x: ((GAME_WIDTH / 2) - (200 / 2)),
                    y: (GAME_HEIGHT / 2.5) 
                }
            },

            restartBtn: {

                img: document.querySelector("#restartImg"),
                width: 120,
                height: 40,

                position: {

                    //current position of "Restart Button" image
                    x: ((GAME_WIDTH / 2) - (120 / 2)),
                    y: (GAME_HEIGHT / 1.5) 
                }
            }
        }
        this.one = 0;
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

            if(!this.one){

                console.log("gameOver");
                console.log(this.gameOverObj.position.x, this.gameOverObj.position.y);
                console.log("scoreBoard");
                console.log(this.gameOverObj.scoreBoard.position.x, this.gameOverObj.scoreBoard.position.y);
                console.log("restartBtn");
                console.log(this.gameOverObj.restartBtn.position.x, this.gameOverObj.restartBtn.position.y);
                this.one++;
            }

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