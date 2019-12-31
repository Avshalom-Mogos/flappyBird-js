import Bird from "./bird.js"
import TowPipes from "./twoPipes.js"
import InputHandler from "./input.js"
import Score from "./score.js";
import Ground from "./Ground.js"
import Collision from './collision_detection.js';
import GameState from './gameState.js'



const canvas = document.querySelector("#gameScreen");
let ctx = canvas.getContext("2d");
const GAME_WIDTH = canvas.offsetWidth;
const GAME_HEIGHT = canvas.offsetHeight;

let time = 0;


//create bird
let bird = new Bird(GAME_WIDTH, GAME_HEIGHT,time);

//create ground
let ground = new Ground(GAME_WIDTH, GAME_HEIGHT);

// menu state 
let gameState = new GameState(GAME_WIDTH,GAME_HEIGHT)

console.log(gameState)

//handle input from user
let Input = new InputHandler(bird,gameState);


// collision handler
let collision = new Collision;

//score
let score = new Score(GAME_WIDTH, GAME_HEIGHT)


//create new pipes
const numOfPipes = 100;
const allpipes = [];
for (let index = 0; index < numOfPipes; index++) {
    allpipes.push(new TowPipes(bird, GAME_WIDTH + (index * 150), GAME_HEIGHT, ground));

}



//game loop
function gameLoop() {
    console.log(gameState.game.currentState);
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    //bird
    bird.draw(ctx, time,gameState);
    time++;
  
    gameState.draw(ctx)

    if (gameState.game.currentState === gameState.game.running)
     {
        allpipes.forEach(pairOfPipes => {
                pairOfPipes.draw(ctx);
                score.update(bird, pairOfPipes);
                pairOfPipes.update();
        });
       bird.update();
       score.draw(ctx);  
   }
 


    //ground
    ground.update();
    ground.draw(ctx);
    //stop game on collision
    if (collision.detectCollision(bird, allpipes, ground) === false) {

        requestAnimationFrame(gameLoop);
    }

}
gameLoop();