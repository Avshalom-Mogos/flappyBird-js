import Bird from "./bird.js";
import TowPipes from "./twoPipes.js";
import InputHandler from "./input.js";
import Score from "./score.js";
import Ground from "./ground.js";
import Collision from './collision_detection.js';
import GameState from './gameState.js';
import AudioHandler from "./audio.js";

let allpipes = [];
let time = 0;

const soundUrl = "https://raw.githubusercontent.com/avshalom-mogos/js-bird/master/assets/audio"
const wingSound = new AudioHandler(`${soundUrl}/wing.wav`);
const hitSound = new AudioHandler(`${soundUrl}/hit.wav`);
const dieSound = new AudioHandler(`${soundUrl}/die.wav`);
const pointSound = new AudioHandler(`${soundUrl}/point.ogg`);

const canvas = document.querySelector("#gameScreen");
console.log(document.body.offsetWidth);

const ctx = canvas.getContext("2d");

canvas.width = document.body.offsetWidth > 500 ? 500 : document.body.offsetWidth;
canvas.height = document.body.offsetHeight
const GAME_WIDTH = canvas.offsetWidth;
const GAME_HEIGHT = canvas.offsetHeight;
console.log(GAME_WIDTH, GAME_HEIGHT);

const numOfPipes = 100;
const spaceBetweenPipes = GAME_WIDTH / 1.8;

// ========================================================================== Init the game

// the state of game
const gameState = new GameState(GAME_WIDTH, GAME_HEIGHT);

//create bird
const bird = new Bird(GAME_WIDTH, GAME_HEIGHT, time, wingSound);

// score
const score = new Score(GAME_WIDTH, GAME_HEIGHT, pointSound);

//create ground
const ground = new Ground(GAME_WIDTH, GAME_HEIGHT);

// collision handler
const collision = new Collision(hitSound, dieSound);

//handle input from user
new InputHandler(bird, gameState, canvas, reset);

//create new pipes
for (let index = 0; index < numOfPipes; index++) {

    allpipes.push(new TowPipes(bird, GAME_WIDTH + (index * spaceBetweenPipes), GAME_HEIGHT, ground));
}

// ========================================================================== End

//=================================================================== Reset the game

function reset() {

    collision.reset();
    gameState.reset();
    score.reset();
    bird.reset();
    allpipes = [];

    for (let index = 0; index < numOfPipes; index++) {

        allpipes.push(new TowPipes(bird, GAME_WIDTH + (index * spaceBetweenPipes), GAME_HEIGHT, ground));
    }
}

//=================================================================== End

//=================================================================== Game loop

function gameLoop() {
    // console.log(gameState.game.currentState);
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    //bird
    bird.draw(ctx, time, gameState);
    time++;

    allpipes.forEach(pairOfPipes => {
        pairOfPipes.draw(ctx);
        score.update(bird, pairOfPipes, gameState);

        if (gameState.game.currentState === gameState.game.running) {
            // console.log("next pipe");
            pairOfPipes.update();
        }
    });

    if (gameState.game.currentState === gameState.game.running) {
        bird.update();
    }

    if (gameState.game.currentState !== gameState.game.over) {

        //stop ground on collision
        ground.update();
    }

    gameState.draw(ctx)

    //ground
    ground.draw(ctx);

    if (gameState.game.currentState === gameState.game.running) {
        if (collision.detectCollision(bird, allpipes, ground) === true) {

            gameState.game.currentState = gameState.game.over;
        }
    }
    score.drawCurrentScore(ctx, gameState);

    requestAnimationFrame(gameLoop);
}

gameLoop();

//=================================================================== End