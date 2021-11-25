let ground;
let lander;
var lander_img;
var bg_img;
var gameState=0;
var invisibleGround
var vx = -5;
var g = 0.05;
var vy = -5;


function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  rectMode(CENTER);
  textSize(15);
  invisibleGround=createSprite(200,600,500,100)
  invisibleGround.visible=false;
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();


//fall down
vy +=g;
lander.position.y+=vy;
 
  drawSprites();
  keyPressed();
}

function keyPressed(){
  if (lander.collide(invisibleGround)){
    vy =7
    }
  if(keyCode==UP_ARROW){
    vy-=g;
    lander.position.y-=vy;
  }
  if(keyCode==LEFT_ARROW){
    vx+=g;
    lander.position.x+=vx;
  }
  if(keyCode==RIGHT_ARROW){
    vx-=g;
    lander.position.x-=vx;
  }
}
