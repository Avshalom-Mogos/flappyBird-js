export default class InputHandler {
    constructor(bird,gameState) {


        document.addEventListener("keydown", (event) => {

            if (gameState.game.currentState === gameState.game.getReady) {
                //change the  state from ready to running
                gameState.game.currentState = gameState.game.running
            }

            if (event.keyCode === 32 && bird.position.y - bird.height > 0) {
               
                bird.jump();
                
            };

        });

        document.addEventListener("click", (event) => {

            if (gameState.game.currentState === gameState.game.getReady) {
                //change the  state from ready to running
                gameState.game.currentState = gameState.game.running
            }

            if (bird.position.y - bird.height > 0) {
              
                bird.jump();

            }
        });

        
        
    };
};