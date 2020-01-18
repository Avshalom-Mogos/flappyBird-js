import Bird from "./bird.js";
import TowPipes from "./twoPipes.js";
import InputHandler from "./input.js";
import Score from "./score.js";
import Ground from "./Ground.js";
import Collision from './collision_detection.js';
import GameState from './gameState.js';
import AudioHandler from "./audio.js";

let allpipes = [];
let time = 0;

const wingSound = new AudioHandler("/assets/audio/wing.wav");
const hitSound = new AudioHandler("/assets/audio/hit.wav");
const dieSound = new AudioHandler("/assets/audio/die.wav");
const pointSound = new AudioHandler("/assets/audio/point.ogg");

const canvas = document.querySelector("#gameScreen");
const ctx = canvas.getContext("2d");
const GAME_WIDTH = canvas.offsetWidth;
const GAME_HEIGHT = canvas.offsetHeight;
const numOfPipes = 100;
const spaceBetweenPipes = 165;

// localStorage.clear();
// console.log(localStorage);

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

    console.log("reset");
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
        score.update(bird, pairOfPipes,gameState);

        if (gameState.game.currentState === gameState.game.running) {
            // console.log("next pipe");
            pairOfPipes.update();
        }
    });

    if (gameState.game.currentState === gameState.game.running) {
        bird.update();
        score.drawCurrentScore(ctx);
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

            console.log(gameState.game.currentState);

            gameState.game.currentState = gameState.game.over;
        }
    }
    // if game over
    else if (gameState.game.currentState === gameState.game.over) {
        score.drawCurrentScore(ctx);
        score.drawBestScore(ctx);
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();

//=================================================================== End