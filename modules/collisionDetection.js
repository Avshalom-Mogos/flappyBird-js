export default class Collision {

    constructor(hitSound, dieSound) {

        this.hitSound = hitSound;
        this.dieSound = dieSound;
        this.index = 0;
    }


    detectCollision(bird, pipes, ground) {
        return false;
        const collisionGround = ground.partOnePosition.y - bird.height;

        //checking bird collision ground
        if (bird.position.y >= collisionGround) {
            this.hitSound.play();
            this.dieSound.play();
            return true;
        };

        //running all over the pipes
        if (this.index < pipes.length) {

            //range collition definition
            const rangeBottomCollition = pipes[this.index].height - pipes[this.index].pipeBottomPosition.y;
            const rangeTopCollition = pipes[this.index].height + pipes[this.index].pipeTopPosition.y;
            const collitionPipes = pipes[this.index].pipeTopPosition.x - bird.position.x;

            //checking bird collition top pipe
            if (collitionPipes == bird.width && bird.position.y < rangeTopCollition) {
                this.hitSound.play();
                this.dieSound.play();
                return true;
            };

            //increment the index to catch the next pipe position if the bird passed one.
            //each index represent the current pipe in the array ("allpipes")!!!
            if (pipes[this.index].pipeTopPosition.x < bird.position.x - bird.width) {
                const nextPipeIdx = (this.index + pipes.length - 1) % pipes.length;
                this.index = nextPipeIdx;
            };

            //checking bird collision on ceiling on the top pipes
            if (collitionPipes < bird.width && bird.position.y < rangeTopCollition) {
                this.hitSound.play();
                this.dieSound.play();
                return true;
            };

            //checking bird collition bootom pipe
            if (collitionPipes == bird.width && bird.position.y - pipes[this.index].height > -rangeBottomCollition - bird.height) {
                this.hitSound.play();
                this.dieSound.play();
                return true;
            };

            //checking bird collision on ceiling on the bottom pipes
            if (collitionPipes < bird.width && bird.position.y - pipes[this.index].height + bird.height > -rangeBottomCollition) {
                this.hitSound.play();
                this.dieSound.play();
                return true;
            };
        };
        return false;
    }

    reset() {
        this.index = 0;
    }
}