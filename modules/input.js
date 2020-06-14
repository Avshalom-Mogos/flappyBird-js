export default class InputHandler {

    constructor(bird, gameState, canvas, reset) {

        document.addEventListener('keypress', (e) => {

            const gameIsGetReady = gameState.game.currentState === gameState.game.getReady;
            const gameIsOver = gameState.game.currentState === gameState.game.over;

            if (e.keyCode === 32) {
                if (gameIsGetReady) gameState.game.currentState = gameState.game.running;
                if ((bird.position.y - bird.height) > 0 && !gameIsOver) bird.jump();
            };
        });

        canvas.addEventListener('click', function (e) {

            const gameIsOver = gameState.game.currentState === gameState.game.over;
            const gameIsGetReady = gameState.game.currentState === gameState.game.getReady;
            const { restartBtn } = gameState.gameOverObj;
            const restartBtnHeight = restartBtn.position.y + restartBtn.height;
            const restartBtnWidth = restartBtn.position.x + restartBtn.width;


            if (gameIsGetReady) gameState.game.currentState = gameState.game.running;
            if ((bird.position.y - bird.height) > 0 && !gameIsOver) bird.jump();

            if (gameIsOver) {
                if ((e.offsetY > restartBtn.position.y && e.offsetY < restartBtnHeight)
                    &&
                    (e.offsetX > restartBtn.position.x && e.offsetX < restartBtnWidth)) {
                    //change the state from game over to get ready
                    gameState.game.currentState = gameState.game.getReady;

                    reset();
                };
            };
        });
    }
}