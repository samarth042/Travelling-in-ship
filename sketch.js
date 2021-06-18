 var sea,ship;

 function preload(){
 
 seaImg = loadImage("sea.png");
 ship1Img = loadImage("ship-1.png");
 ship2Img = loadImage("ship-2.png");
 ship3Img = loadImage("ship-3.png");
 ship4Img = loadImage("ship-4.png");

 }

 function setup(){

 createCanvas(400,400);
  
 Sea();
 Ship();

 }

 function draw() {

 background("blue");
 
 drawSprites();

 }
 
 function Sea() {
   
 var sea = createSprite(200,200);
 sea.addImage(seaImg);
 sea.velocityX = 2;
 }

 function Ship() {
   
 var ship = createSprite(200,300);
 ship.scale = 0.2;
 ship.addImage(ship1Img);
 
 }