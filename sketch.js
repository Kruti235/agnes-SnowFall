const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var snow,snowFlake;
var girl;

var snow=[];
var engine , world;

function preload()
{
  snowFlakeImg = loadImage("snow5.webp")
  snowBg = loadImage("snow2.jpg")
  girl1 = loadImage("Girl1.png")
}

function setup()
{
  createCanvas(1000,400)

  engine= Engine.create();
  world = engine.world;
  //CREATING BACKGROUND
  //snowbg=createSprite(500,25);
  //snowbg.addImage(snowBg);

}

function draw(){
  background(snowBg);
  // CREATING FUNCTION FOR SNOWFLAKES
 
  // if (frameCount%80 == 0){
  // createSnowFlakes();
  //}
  
  Engine.update(engine);
  
  girl = createSprite(650,300,10,10);
  girl.scale = 1;
  girl.addImage(girl1)
  
  if(frameCount%40 === 0)
  {
    snow.push(new Snow(random(10-20,990),10,10));
  }
  
  for(i = 0 ; i< snow.length ; i ++)
  {
    snow[i].display();
  } 

  drawSprites();
}

//function createSnowFlake()
//{
//snowFall = createSprite(random(50,350),40,10,10);
//snowFall.scale= 0.09;
//snowFall.addImage(snowFlakeImg);
//}
