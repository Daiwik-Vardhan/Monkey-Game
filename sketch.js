var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
  
   monkey = createSprite(80,315,20,20);
   monkey . addAnimation("moving",monkey_running);
   monkey.scale = 0.1;
  
   ground = createSprite(400,350,1000,10);
   ground.velocityX = -4;
   ground.x = ground.width /2;
   console.log(ground.x);
  
   FoodGroup = createGroup();
   obstacleGroup = createGroup();
  
   score = 0;
   survivalTime = 0;
}


function draw() {
  
   background("white");
  
  ground.x = ground.width /2;
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :",+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time :" + survivalTime,100,50);
  
  Food();
  obstacle();
  
  if(keyDown("space") && monkey.y >= 180) {
  monkey.velocityY = - 10; 
}
  monkey.velocityY = monkey.velocityY + 0.7

  monkey.collide(ground);
  
  drawSprites();
}

function Food(){
  
   if(frameCount % 80 === 0){ 
   var banana = createSprite (400,120,20,20);
   banana.y = Math.round(random(120,200));
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.velocityX = -4;
   banana.lifetime = 70;
   FoodGroup.add(banana);
    
}
}

function obstacle(){
  
  if(frameCount % 80 === 0){ 
  var obstacle = createSprite(400,330,20,20);
  obstacle.x = Math.round(random(350,350));
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -4;
  obstacle.lifetime = -1;
  obstacleGroup.add(obstacle);
}
}