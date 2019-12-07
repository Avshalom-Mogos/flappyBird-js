export default class Pipe {
    constructor(x, y) {
        this.width = 40;
        this.height = 160;

        this.position = {
            x: x,
            y: y
        };

        this.jumpHeight = 35;
        this.speed = 1;
    };


    draw(ctx, Img) {
        ctx.drawImage(Img, this.position.x, this.position.y, this.width, this.height);
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    }

    update(deltaTime) {
        if (!deltaTime) return;
        this.position.x -= this.speed;
    }

    addNew(x, y) {
        if (this.position.x === 0 - this.width) {
            this.position.x = x;
            this.position.y = y;
            // ctx.drawImage(pipeImg, this.position.x, this.position.y, this.width, this.height);

        }
    }
};