export default class InputHandler {
    constructor(bird) {
        document.addEventListener("keydown", (event) => {
            if (event.keyCode === 32) {
                bird.jump();
                console.log("space");
            };

        });

        document.addEventListener("click", (event) => {
            bird.jump();
            console.log("tap");
        });
    };
};