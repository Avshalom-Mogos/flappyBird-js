
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

    }

    draw(ctx) {
        if (this.game.currentState === this.game.getReady) {
            ctx.drawImage(
                this.getReadyObj.img,
                this.getReadyObj.position.x, this.getReadyObj.position.y,
                this.getReadyObj.width, this.getReadyObj.height
            );
        }
    }

}


