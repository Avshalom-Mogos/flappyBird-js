export default class InputHandler {
    
    constructor(bird, gameState, canvas, gameOver, reset) {
        
        document.addEventListener("keypress", (event) => {
                        
            if (gameState.game.currentState === gameState.game.getReady) {
                //change the  state from ready to running
                gameState.game.currentState = gameState.game.running;
            }

            if ((event.keyCode === 32) && (bird.position.y - bird.height > 0) &&
            (gameState.game.currentState !== gameState.game.over)) {
                // console.log("inside");
                
                bird.jump();
            }
        });

        canvas.addEventListener("click", (event) => {

            if (gameState.game.currentState === gameState.game.getReady) {

                //change the  state from ready to running
                gameState.game.currentState = gameState.game.running
            }

            if ((bird.position.y - bird.height > 0) &&
                (gameState.game.currentState !== gameState.game.over)) {
              
                bird.jump();
            }
        });

        canvas.addEventListener("click", function(event){
        
            if (gameState.game.currentState === gameState.game.over)
            {
                if((event.offsetY > gameOver.restartPosition.y && event.offsetY < gameOver.restartPosition.y + gameOver.gameOverHeight) &&
                (event.offsetX > gameOver.restartPosition.x && event.offsetX < gameOver.restartPosition.x + gameOver.restartWidth))
                {
                    //change the  state from ready to get ready
                    gameState.game.currentState = gameState.game.getReady;
    
                    reset();
                }
            }
        });  
    }
}