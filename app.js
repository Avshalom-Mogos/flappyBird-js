import Bird from "./bird.js"
import TowPipes from "./twoPipes.js"
import InputHandler from "./input.js"


const canvas = document.querySelector("#gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = canvas.offsetWidth;
const GAME_HEIGHT = canvas.offsetHeight;

//create bird
let bird = new Bird(GAME_WIDTH, GAME_HEIGHT);

//create new pipes
const numOfPipes = 10;
const allpipes = [];
for (let index = 0; index < numOfPipes; index++) {
    allpipes.push(new TowPipes(bird, GAME_WIDTH + (index*150), GAME_HEIGHT),);
    
}



//handle input from user
new InputHandler(bird);


//game loop
function gameLoop() {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    //bird
    bird.draw(ctx);
    bird.update();

    //pipes 
    allpipes.forEach(pairOfPipes => {
        pairOfPipes.update();
        pairOfPipes.draw(ctx);        
    });
    

    requestAnimationFrame(gameLoop);
}
gameLoop();