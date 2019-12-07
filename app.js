import Bird from "./bird.js"
import Pipe from "./pipe.js"
import InputHandler from "./input.js"


const canvas = document.querySelector("#gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 325;
const GAME_HEIGHT = 450;

//ctx.fillRect(x,y,width,height);
// ctx.fillRect(20, 20, 100, 100);
const imgArr = [
    { img: document.querySelector("#birdUpFlap") },
    { img: document.querySelector("#birdMidFlap") },
    { img: document.querySelector("#birdDownFlap") }
];


let bird = new Bird(GAME_WIDTH, GAME_HEIGHT);
//this.width = 40;
//this.height = 160;

//pipe bottom
const pipeBottomImg = document.querySelector("#pipeBottomImg");
let pipeBottom = new Pipe(GAME_WIDTH, GAME_HEIGHT - 160);
//pipe top
const pipeTopImg = document.querySelector("#pipeTopImg");
let pipeTop = new Pipe(GAME_WIDTH, 0);

//handle input from user
new InputHandler(bird);


let lastTime = 0;

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

let index =Math.floor(Math.random() * 3);
    //bird
    bird.update(deltaTime);
    bird.draw(ctx, imgArr[index].img);
    
    
    console.log(timeStamp);
    
    
    //bottomPipe
    pipeBottom.update(deltaTime);
    pipeBottom.draw(ctx, pipeBottomImg);
    pipeBottom.addNew(GAME_WIDTH, GAME_HEIGHT - 160);
    //topPipe
    pipeTop.update(deltaTime);
    pipeTop.draw(ctx, pipeTopImg);
    pipeTop.addNew(GAME_WIDTH, 0);



    requestAnimationFrame(gameLoop);
}
gameLoop();