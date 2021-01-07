var fixedRect, movingRect, fixedRect1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect1 = createSprite(300, 200, 50, 80);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.x - fixedRect.x);
  console.log(fixedRect.width/2 + movingRect.width/2)

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  if(isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor = "red";
    fixedRect1.shapeColor = "red";
  }else{
    movingRect.shapeColor = "blue";
    fixedRect1.shapeColor = "blue";
  }
 
  drawSprites();
}

function isTouching(walk,run){
  if (walk.x - run.x < run.width/2 + walk.width/2
    && run.x - walk.x < run.width/2 + walk.width/2
     && walk.y - run.y < run.height/2 + walk.height/2
     && run.y - walk.y < run.height/2 + walk.height/2) 
    {
  return true;
 }
 else {
  return false;
 }
}