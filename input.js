export default class InputHandler {
    constructor(bird) {
        document.addEventListener("keydown", (event) => {

            if (event.keyCode === 32 && bird.position.y - bird.height > 0) {

                bird.jump();
                // console.log("space");
            };

        });

        document.addEventListener("click", (event) => {
            if (bird.position.y - bird.height > 0) {
                bird.jump();
                // console.log("tap");
            }
        });
    };
};