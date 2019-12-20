import AudioHandler from "./audio.js";


export default class Bird {
    constructor(gameWidth, gameHeight) {
        this.width = 34;
        this.height = 24;
        this.sound = new AudioHandler("/assets/audio/wing.wav");

        this.position = {
            x: 25,
            y: gameHeight / 2 - this.height / 2
        };

        this.jumpHeight = 35;
        this.fallSpeed = 1;
    };

    jump() {
        this.sound.play();
        this.position.y -= this.jumpHeight;
        // AVSHALOM animaton test
        // const canvas = document.querySelector("#gameScreen");
        // let ctx = canvas.getContext("2d");
        // ctx.save();
        // ctx.rotate(120 * Math.PI / 180);
        // ctx.translate(10, 20); // change origin
        // ctx.drawImage(this.imgArr[0].img, this.position.x, this.position.y, this.width, this.height);
        // ctx.restore();
        // 
    }
    
    imgArr = [
        { img: document.querySelector("#birdUpFlap") },
        { img: document.querySelector("#birdMidFlap") },
        { img: document.querySelector("#birdDownFlap") },
        { img: document.querySelector("#birdMidFlap") }

    ];


    index = 0
    draw(ctx, time) {
        //flap animation
        if (time % 5 === 0 && this.index < 4) {
            this.index++
            if (this.index === 4) {
                this.index = 0;
            }
        }
        ctx.drawImage(this.imgArr[this.index].img, this.position.x, this.position.y, this.width, this.height);

    }

    update() {
        this.position.y += this.fallSpeed;
    }
};
