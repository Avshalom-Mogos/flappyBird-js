export default class gameOver{

    constructor(game_width, game_Height){
        
        this.image = document.querySelector("#gameOverImg");
        this.imageRestart = document.querySelector("#restartImg");
        this.game_width = game_width;
        this.game_Height = game_Height;
        this.gameOverWidth = 200;
        this.gameOverHeight = 45;
        this.restartWidth = 120;
        this.restartHeight = 40;

        //current position of "Game Over" image
        this.gameOverPosition = {

            x: ((game_width / 2) - (this.gameOverWidth / 2)),
    
            y: game_Height / 3,
        }
        
        //current position of "Restart Button" image
        this.restartPosition = {

            x: ((game_width / 2) - (this.restartWidth / 2)),

            y: game_Height / 2,
        }
    }

    //draw to canvas
    draw(ctx)
    {
        ctx.drawImage(this.image, this.gameOverPosition.x, this.gameOverPosition.y, this.gameOverWidth, this.gameOverHeight);
        ctx.drawImage(this.imageRestart, this.restartPosition.x, this.restartPosition.y, this.restartWidth, this.restartHeight);
    }
}