export default class InputHandler {

    constructor(bird, gameState, canvas, reset) {

        document.addEventListener("keypress", (e) => {

            if (gameState.game.currentState === gameState.game.getReady) {
                //change the state from ready to running
                gameState.game.currentState = gameState.game.running;
            }

            if ((e.keyCode === 32) && (bird.position.y - bird.height > 0) &&
                (gameState.game.currentState !== gameState.game.over)) {
  
                bird.jump();
            }
        });

        canvas.addEventListener("click", (e) => {

            if (gameState.game.currentState === gameState.game.getReady) {

                //change the  state from ready to running
                gameState.game.currentState = gameState.game.running
            }

            if ((bird.position.y - bird.height > 0) &&
                (gameState.game.currentState !== gameState.game.over)) {

                bird.jump();
            }
        });

        canvas.addEventListener("click", function (e) {

            if (gameState.game.currentState === gameState.game.over) {
                if (
                    (
                        e.offsetY > gameState.gameOverObj.restartBtn.position.y &&
                        e.offsetY < gameState.gameOverObj.restartBtn.position.y + gameState.gameOverObj.restartBtn.height
                    ) &&
                    (e.offsetX > gameState.gameOverObj.restartBtn.position.x &&
                        e.offsetX < gameState.gameOverObj.restartBtn.position.x + gameState.gameOverObj.restartBtn.width)
                ) {
                    //change the state from game over  to get ready
                    gameState.game.currentState = gameState.game.getReady;

                    reset();
                }
            }
        });
    }
}