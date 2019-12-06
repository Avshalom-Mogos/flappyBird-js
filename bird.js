export default class Bird {
    constructor(gameWidth, gameHeight) {
        this.width = 34;
        this.height = 24;

        this.position = {
            x: 25,
            y: gameHeight / 2 - this.height / 2
        };

        this.jumpHeight = 35;
        this.speed = 1;
    };

    jump() {
        this.position.y -= this.jumpHeight;
    }

    draw(ctx, birdImg) {
        ctx.drawImage(birdImg, this.position.x, this.position.y, this.width, this.height);
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if (!deltaTime) return;
        this.position.y += this.speed;
    }
};
