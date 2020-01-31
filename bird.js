export default class Bird {

    constructor(gameWidth, gameHeight, time, sound) {

        this.gameHeight = gameHeight;
        this.width = 44;
        this.height = 34;
        this.time = time;
        this.sound = sound;

        this.position = {

            x: 25,
            y: gameHeight / 2 - this.height / 2
        }

        this.jumpHeight = 4.5;
        this.fallSpeed = 1;
        this.gravity = 0.2;
        this.deg = 0;

        this.image = 0;
        this.images = [
            document.querySelector("#birdUpFlap"),
            document.querySelector("#birdMidFlap"),
            document.querySelector("#birdDownFlap"),
            document.querySelector("#birdMidFlap")
        ]
    }

    jump() {

        this.sound.play();
        this.fallSpeed = -this.jumpHeight;
        this.deg = -25;
    }

   

    

    draw(ctx, time, gameState) {

        //flap animation
        if (this.deg > 89) {
            this.image = 1
        }

        else if (time % 5 === 0 && this.image < 4) {

            // צריך לעבור על זה
            if (gameState.game.currentState !== gameState.game.over) {

                this.image++;

                if (this.image === 4) {
                    this.image = 0;
                }
            }
        }

        let horC = this.position.x + this.width / 2;
        let verC = this.position.y + this.height / 2;

        ctx.save();
        ctx.translate(horC, verC);
        ctx.rotate(this.deg * Math.PI / 180);
        ctx.translate(-horC, -verC);

        ctx.drawImage(this.images[this.image], this.position.x, this.position.y, this.width, this.height);
        ctx.restore();

        if (gameState.game.currentState === gameState.game.running) {

            if (this.deg < 90) {

                if (this.deg > 0) {

                    this.deg += 4;
                }

                this.deg += 1;
            }
        }
    }

    update() {

        this.fallSpeed += this.gravity;
        this.position.y += this.fallSpeed;
    }

    reset() {

        this.position.y = this.gameHeight / 2 - this.height / 2;
        this.deg = 0;
    }
}