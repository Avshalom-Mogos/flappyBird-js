import Bird from "./bird.js"
import TowPipes from "./twoPipes.js"
import InputHandler from "./input.js"
import Score from "./score.js";
import Ground from "./Ground.js"
import Collision from './collision_detection.js';



const canvas = document.querySelector("#gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = canvas.offsetWidth;
const GAME_HEIGHT = canvas.offsetHeight;

//create bird
let bird = new Bird(GAME_WIDTH, GAME_HEIGHT);

//create ground
let ground = new Ground(GAME_WIDTH, GAME_HEIGHT)

//create new pipes
const numOfPipes = 100;
const allpipes = [];
for (let index = 0; index < numOfPipes; index++) {
    allpipes.push(new TowPipes(bird, GAME_WIDTH + (index * 150), GAME_HEIGHT, ground));
    
}

//handle input from user
new InputHandler(bird);

// collision handler
let collision = new Collision;

//score
let score = new Score(GAME_WIDTH, GAME_HEIGHT)

let time = 0;

//game loop
function gameLoop() {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    //bird
    bird.draw(ctx,time);
    bird.update();
    time++;

    
    //pipes 
    allpipes.forEach(pairOfPipes => {
        pairOfPipes.draw(ctx);
        pairOfPipes.update();
        score.update(bird, pairOfPipes);
        
    });
    //score
    score.draw(ctx);
    
    //ground
    ground.draw(ctx);
    ground.update();

    //stop game on collision
    if (collision.detectCollision(bird, allpipes, ground) === false) {
        
        requestAnimationFrame(gameLoop);  
    }
    
}
gameLoop();