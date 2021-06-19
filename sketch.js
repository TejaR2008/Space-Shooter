var Astronaut, AstronautImage
var Background1, Background1Image

function setup() {
  createCanvas(800,400);
  Background1 = createSprite(400, 200);
  Background1.addImage(Background1Image);
  Background1.scale = 2;
  Astronaut = createSprite(400, 200, 50, 50);
  Astronaut.addAnimation("player", AstronautImage);
}

function preload(){
  Background1Image = loadImage("Space.webp");

  AstronautImage = loadAnimation("unnamed-0.png", "unnamed-1.png", "unnamed-2.png", "unnamed-3.png","unnamed-4.png",
   "unnamed-5.png","unnamed-6.png", "unnamed-7.png", "unnamed-8.png");
}

function draw() {
  background(255,255,255);  
  drawSprites();
}