
export default class GameState {
    constructor(GAME_WIDTH,GAME_HEIGHT) {
        this.width = 184 ,
        this.height = 240,
        
        this.img = document.querySelector('#menu');
        this.state = {
            getReady: 1,
            gameRuning: 2,
            gameOver: 3
        }
         
        this.menuPosition = {
            x :  GAME_WIDTH / 2 - this.width / 2  ,
            y :  50
        }


    }


    draw(ctx){    
        ctx.drawImage(this.img, this.menuPosition.x, this.menuPosition.y, this.width, this.height);
    }


}


