export default class InputHandler {
    constructor(bird) {
      
    document.addEventListener("keydown", (event) => {

            if (event.keyCode === 32 && bird.position.y - bird.height > 0) {
            this.keyboardevent = event.isTrusted
                bird.jump();
               console.log(event)
            };

        });

      document.addEventListener("click", (event) => {
            if (bird.position.y - bird.height > 0) {
               this.mouseevent = event.isTrusted
                bird.jump();
                console.log(this.mouseevent);
            }
        });
    };
};