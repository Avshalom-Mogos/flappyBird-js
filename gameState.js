
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

            height: 240,
            width: 184,

            position: {
                // x: GAME_WIDTH / 2 - this.width / 2, REFACTOR LATER!
                x: GAME_WIDTH / 2 - 184 / 2,
                y: 50
            }
        }

        this.gameOverObj = {

            imgGameOver: document.querySelector("#gameOverImg"),
            imgRestart: document.querySelector("#restartImg"),
            gameOverWidth: 200,
            gameOverHeight: 45,
            restartWidth: 120,
            restartHeight: 40,
    
            //current position of "Game Over" image
            gameOverPosition: {
    
                x: ((GAME_WIDTH / 2) - (200 / 2)),
        
                y: GAME_HEIGHT / 3,
            },
            
            //current position of "Restart Button" image
            restartPosition: {
    
                x: ((GAME_WIDTH / 2) - (120 / 2)),
    
                y: GAME_HEIGHT / 2,
            }
        }
    }

    draw(ctx) {

        if (this.game.currentState === this.game.getReady) {

            ctx.drawImage(
                this.getReadyObj.img,
                this.getReadyObj.position.x, this.getReadyObj.position.y,
                this.getReadyObj.width, this.getReadyObj.height
            );
        }

        else if(this.game.currentState === this.game.over)
        {
            ctx.drawImage(
                this.gameOverObj.imgGameOver,
                this.gameOverObj.gameOverPosition.x, this.gameOverObj.gameOverPosition.y,
                this.gameOverObj.gameOverWidth, this.gameOverObj.gameOverHeight
            );

            ctx.drawImage(
                this.gameOverObj.imgRestart,
                this.gameOverObj.restartPosition.x, this.gameOverObj.restartPosition.y,
                this.gameOverObj.restartWidth, this.gameOverObj.restartHeight
            );
        }
    }

    reset() {
        
        this.currentState = 1;
    }
}