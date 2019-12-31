import AudioHandler from "./audio.js";

export default class Collision {

    hitSound = new AudioHandler("/assets/audio/hit.wav");
    dieSound = new AudioHandler("/assets/audio/die.wav");

    index = 0;

    detectCollision(bird, allpipes, ground) {
        let collisionGround = ground.partOnePosition.y - bird.height;

        if (bird.position.y >= collisionGround) {
            console.log("Crushed on Ground");
            this.hitSound.play();
            this.dieSound.play();
            return true;
        }

        if (this.index < allpipes.length) {
            let rangeBottomCollition = allpipes[this.index].height - allpipes[this.index].pipeBottomPosition.y;
            let rangeTopCollition = allpipes[this.index].height + allpipes[this.index].pipeTopPosition.y;
            let collitionPipes = allpipes[this.index].pipeTopPosition.x - bird.position.x;

            if (collitionPipes == bird.width && bird.position.y < rangeTopCollition) {

                console.log("collitionTopPipe");
                this.hitSound.play();
                this.dieSound.play();
                return true;
            }

            if (allpipes[this.index].pipeTopPosition.x < bird.position.x - bird.width) {
                // console.log("Next pipe!!!");
                this.index++;
            }

            if (collitionPipes < bird.width && bird.position.y < rangeTopCollition) {
                console.log("top gap");
                this.hitSound.play();
                this.dieSound.play();
                return true;
            }

            if (collitionPipes == bird.width && bird.position.y - allpipes[this.index].height > -rangeBottomCollition - bird.height) {
                console.log("collitionBottomPipe");
                this.hitSound.play();
                this.dieSound.play();
                return true;
            }

            if (collitionPipes < bird.width && bird.position.y - allpipes[this.index].height + bird.height > -rangeBottomCollition) {
                console.log("bottom gap");
                this.hitSound.play();
                this.dieSound.play();
                return true;
            }
        }
        return false;
    }
}
