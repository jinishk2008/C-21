var rect1, rect2,rect3;

function setup() {
  createCanvas(800,400);
 rect1 = createSprite(400, 100, 50, 50);
 rect2 = createSprite(400, 300, 50, 50);
 rect3 = createSprite(100,300,50,50);
 
 rect1.velocityY = 4;
 rect2.velocityX = -1;
 rect3.velocityX = 1;

 rect1.debug = true;
 rect2.debug = true;
 rect3.debug = true;
}


function draw() {
  background(255,255,255);  
  
  if(isTouching(rect2,rect3)){
    rect2.shapeColor = "blue";
    rect3.shapeColor = "red";

  }
  else{
    rect2.shapeColor = "green";
    rect3.shapeColor = "green";
  }

  //bounceOff(rect2,rect3);
  
  drawSprites();
}

