const BRICK_WIDTH = 50;
const BRICK_HEIGHT = 20;
const DELAY = 50;
let brick;
let brickY = getHeight()-BRICK_HEIGHT;
let brickX = 0;


function main(){
    //setTimer(drawBrick , DELAY );
    //drawBrick(BRICK_WIDTH , BRICK_HEIGHT , brick1X , brick1Y)
    setTimer(makeWall , DELAY);
}

function drawBrick(width , height , x , y){
    let rect = new Rectangle(width , height);
    rect.setColor(Color.randomRed());
    rect.setPosition(x , y);
    add(rect);
    
    return rect;
}


function makeWall(){
    if (brickX < getWidth()){
        drawBrick(BRICK_WIDTH , BRICK_HEIGHT , brickX , brickY);
        brickX = brickX + BRICK_WIDTH;
    }else{
        brickX = 0;
        if (brickY <=0){
            stopTimer(makeWall);
        }
        brickY = brickY - BRICK_HEIGHT;
    }
}
main();
