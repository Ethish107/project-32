
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var a;
var circles=[];
var engine,world;
var ball,polygonImage;
var sling;
var ground;
var standA,standB;
var score;
var bg;

function preload(){
polygonImage = loadImage("polygon.png");
}

function setup() {
  createCanvas(1200,500);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  score = 0;
   
   ground = new Ground(600,490,1200,20);
   
   standA = new Stand(450,400,300,10);
   standB = new Stand(850,240,300,10);
  
  ball = Bodies.circle(140,300,15);
  World.add(world,ball);
  
  // standA blocks 

  //first row
  block1 = new Box(350,375,30,40);
  block2 = new Box(380,375,30,40);
  block3 = new Box(410,375,30,40);
  block4 = new Box(440,375,30,40);
  block5 = new Box(470,375,30,40);
  block6 = new Box(500,375,30,40);
  block7 = new Box(530,375,30,40);
   //second row
  block8 = new Box(380,350,30,40);
  block9 = new Box(410,350,30,40);
  block10 = new Box(440,350,30,40);
  block11 = new Box(470,350,30,40);
  block12 = new Box(500,350,30,40);
  //third row
  block13 = new Box(410,325,30,40);
  block14 = new Box(440,325,30,40);
  block15 = new Box(470,325,30,40);
  // fourth row
  block16 = new Box(440,300,30,40);

  //standB blocks
  //first row

  bloc1 = new Box(750,215,30,40);
  bloc2 = new Box(780,215,30,40);
  bloc3 = new Box(810,215,30,40);
  bloc4 = new Box(840,215,30,40);
  bloc5 = new Box(870,215,30,40);
  bloc6 = new Box(900,215,30,40);
  bloc7 = new Box(930,215,30,40);
   //second row
   
   bloc8 = new Box(780,190,30,40);
   bloc9 = new Box(810,190,30,40);
   bloc10 = new Box(840,190,30,40);
   bloc11= new Box(870,190,30,40);
   bloc12 = new Box(900,190,30,40);
  //third row
  bloc13 = new Box(810,165,30,40);
  bloc14 = new Box(840,165,30,40);
  bloc15 = new Box(870,165,30,40);
  // fourth row
  bloc16 = new Box(840,140,30,40);

  sling = new SlingShot(this.ball,{x:140,y:300});

 
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(100);
  
  Engine.update(engine);
  

  //to display blocks
  //standA
  //first row
  push()
  fill("lightBlue");
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  pop()
  //second row
  push()
  fill("red");
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  pop()
  //third row
  push()
  fill("lightGreen");
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  pop()
  //fourth row
  push()
  fill("pink");
  block16.display();
  block16.score();
   pop()
  //standB
  //first row
  push()
  fill("pink");
  bloc1.display();
  bloc1.score();
  bloc2.display();
  bloc2.score();
  bloc3.display();
  bloc3.score();
  bloc4.display();
  bloc4.score();
  bloc5.display();
  bloc5.score();
  bloc6.display();
  bloc6.score();
  bloc7.display();
  bloc7.score();
  pop()
  //second row
  push()
  fill("red");
  bloc8.display();
  bloc8.score();
  bloc9.display();
  bloc9.score();
  bloc10.display();
  bloc10.score();
  bloc11.display();
  bloc11.score();
  bloc12.display();
  bloc12.score();
  pop()
 //third row
 push()
 fill("lightBlue");
  bloc13.display();
  bloc13.score();
  bloc14.display();
  bloc14.score();
  bloc15.display();
  bloc15.score();
  pop()
  //fourth row
  push()
  fill("lightGreen");
  bloc16.display();
  bloc16.score();
  pop()
  ground.display();
  standA.display();
  standB.display();


// polygon
push()
strokeWeight(0);
imageMode(CENTER);
image(polygonImage,this.ball.position.x,this.ball.position.y,50,50);
pop()


//sling
sling.display();

 drawSprites();
 fill(0,100,240);
 textSize(20);
 text("Drag the polygon and release to hit the blocks!",360,50);
 fill(0,250,200);
 textSize(25);
 text("score :" + score,890,60);
}
function mouseDragged()
{
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
  sling.fly();
}
function keyPressed(){
  if(keyCode === 32){
   
      sling.attach(this.ball);
  }
}