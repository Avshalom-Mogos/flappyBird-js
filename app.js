import Bird from "./modules/bird.js";
import TowPipes from "./modules/twoPipes.js";
import InputHandler from "./modules/input.js";
import Score from "./modules/score.js";
import Ground from "./modules/ground.js";
import Collision from './modules/collisionDetection.js';
import GameState from './modules/gameState.js';
import AudioHandler from "./modules/audio.js";

let pipes = [];
let time = 0;

const soundUrl = "https://raw.githubusercontent.com/avshalom-mogos/flappyBird-js/master/assets/audio";
const wingSound = new AudioHandler(`${soundUrl}/wing.wav`);
const hitSound = new AudioHandler(`${soundUrl}/hit.wav`);
const dieSound = new AudioHandler(`${soundUrl}/die.wav`);
const pointSound = new AudioHandler(`${soundUrl}/point.ogg`);

const canvas = document.querySelector("#gameScreen");
const ctx = canvas.getContext("2d");

canvas.width = document.body.offsetWidth > 500 ? 500 : document.body.offsetWidth;
canvas.height = document.body.offsetHeight;
const GAME_WIDTH = canvas.offsetWidth;
const GAME_HEIGHT = canvas.offsetHeight;
export const PIPE_WIDTH = 55;
export const SPACE_BETWEEN_PIPES = PIPE_WIDTH * 4;


// ========================================================================== Init the game

// the state of game
const gameState = new GameState(GAME_WIDTH, GAME_HEIGHT);

//create bird
const bird = new Bird(GAME_WIDTH, GAME_HEIGHT, time, wingSound);

//create score
const score = new Score(GAME_WIDTH, pointSound);

//create ground
const ground = new Ground(GAME_WIDTH, GAME_HEIGHT);

// collision handler
const collision = new Collision(hitSound, dieSound);

//handle input from user
new InputHandler(bird, gameState, canvas, reset);


//========================================================================== End

//=================================================================== Reset the game

function initPipes() {
    console.log(GAME_WIDTH);
    const minPipesForScreen = Math.ceil(GAME_WIDTH / (PIPE_WIDTH + (SPACE_BETWEEN_PIPES)));
    const newPipes = Array.from({ length: minPipesForScreen }, (_, idx) => new TowPipes(bird, GAME_WIDTH, GAME_HEIGHT, ground, idx));
    return newPipes;
}


function reset() {

    collision.reset();
    gameState.reset();
    score.reset();
    bird.reset();
    pipes = initPipes();
}

pipes = initPipes();

//=================================================================== End

//=================================================================== Game loop

function gameLoop() {

    //clear canvas before next draw
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    const gameIsRunning = gameState.game.currentState === gameState.game.running;
    const gameIsOver = gameState.game.currentState === gameState.game.over;

    //bird
    bird.draw(ctx, time, gameState);
    time++;

    pipes.forEach(pairOfPipes => {
        score.update(bird, pairOfPipes, gameState);
        pairOfPipes.draw(ctx);
        if (gameIsRunning) pairOfPipes.update();
    });

    if (gameIsRunning) bird.update();


    //stop ground on collision
    if (!gameIsOver) ground.update();

    gameState.draw(ctx);

    //ground
    ground.draw(ctx);


    if (gameIsRunning && collision.detectCollision(bird, pipes, ground)) {
        //end game on collision
        gameState.game.currentState = gameState.game.over;
    };

    score.draw(ctx, gameState);

    requestAnimationFrame(gameLoop);
};

gameLoop();

//=================================================================== End