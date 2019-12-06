import Bird from "./bird.js"
import Pipe from "./pipe.js"
import InputHandler from "./input.js"


const canvas = document.querySelector("#gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 325;
const GAME_HEIGHT = 450;

//ctx.fillRect(x,y,width,height);
ctx.fillRect(20, 20, 100, 100);

const birdImg = document.querySelector("#birdImg");
let bird = new Bird(GAME_WIDTH, GAME_HEIGHT);

const pipeImg = document.querySelector("#pipeImg");
let pipe = new Pipe(GAME_WIDTH, GAME_HEIGHT);


new InputHandler(bird);

let lastTime = 0;

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;



    lastTime = timeStamp;
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    //bird
    bird.update(deltaTime);
    bird.draw(ctx, birdImg);
    //pipe
    pipe.update(deltaTime);
    pipe.draw(ctx, pipeImg);
    pipe.addNew(GAME_WIDTH, GAME_HEIGHT);

    console.log(pipe.position.x);
    
    



    requestAnimationFrame(gameLoop);
}
gameLoop();