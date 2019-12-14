export default class Bird {
    constructor(gameWidth, gameHeight) {
        this.width = 34;
        this.height = 24;

        this.position = {
            x: 25,
            y: gameHeight / 2 - this.height / 2
        };

        this.jumpHeight = 35;
        this.fallSpeed = 1;
    };

    jump() {
        this.position.y -= this.jumpHeight;
    }

    imgArr = [
        { img: document.querySelector("#birdUpFlap") },
        { img: document.querySelector("#birdMidFlap") },
        { img: document.querySelector("#birdDownFlap") },
        { img: document.querySelector("#birdUpFlap") }
    ];


    draw(ctx) {

        ctx.drawImage(this.imgArr[0].img, this.position.x, this.position.y, this.width, this.height);


    }

    update() {
        this.position.y += this.fallSpeed;
    }
};
