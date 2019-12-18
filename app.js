import Bird from "./bird.js"
import TowPipes from "./twoPipes.js"
import InputHandler from "./input.js"
import Score from "./score.js";



const canvas = document.querySelector("#gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = canvas.offsetWidth;
const GAME_HEIGHT = canvas.offsetHeight;

//create bird
let bird = new Bird(GAME_WIDTH, GAME_HEIGHT);

//create new pipes
const numOfPipes = 150;
const allpipes = [];
for (let index = 0; index < numOfPipes; index++) {
    allpipes.push(new TowPipes(bird, GAME_WIDTH + (index*150), GAME_HEIGHT),);
    
}


console.log(allpipes[0].height);
//handle input from user
new InputHandler(bird);


let score = new Score(GAME_WIDTH,GAME_HEIGHT)

//game loop
function gameLoop() {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    // console.log(allpipes[0].pipeTopPosition)

    //bird
    bird.draw(ctx);
    bird.update();
  
    //pipes 
    allpipes.forEach(pairOfPipes => {
        pairOfPipes.draw(ctx);        
        pairOfPipes.update();  
        score.update(bird,pairOfPipes);
         
    });

    score.draw(ctx);
    

    requestAnimationFrame(gameLoop);
}
gameLoop();