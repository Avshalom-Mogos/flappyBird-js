let index = 0;

function detectCollision(bird, allpipes, ground)
{
    let collisionGround = ground.partOnePosition.y - bird.height;

    if (bird.position.y == collisionGround)
    {
        console.log("Crushed on Ground");  
    }

    if(index < allpipes.length)
    {
        let rangeBottomCollition =  allpipes[index].height - allpipes[index].pipeBottomPosition.y;
        let rangeTopCollition =  allpipes[index].height + allpipes[index].pipeTopPosition.y;
        let collitionPipes = allpipes[index].pipeTopPosition.x - bird.position.x;
        
        if(collitionPipes == bird.width && bird.position.y < rangeTopCollition)
        {
           
            console.log("collitionTopPipe");
            return true;
        }
        
        if(allpipes[index].pipeTopPosition.x < bird.position.x - bird.width)
        {
            console.log("Next pipe!!!");
            index++;
        }
        
        if(collitionPipes < bird.width && bird.position.y < rangeTopCollition)
        {
            console.log("top gap");
            return true;
        }

        if(collitionPipes == bird.width && bird.position.y - allpipes[index].height > -rangeBottomCollition - bird.height)
        {
            console.log("collitionBottomPipe");
            return true;
        }
        
        if(collitionPipes < bird.width && bird.position.y - allpipes[index].height + bird.height > -rangeBottomCollition)
        {
            console.log("bottom gap");
            return true;
        }
    }
}

export default detectCollision;