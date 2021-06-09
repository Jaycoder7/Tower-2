const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var slingshot,polygon;
var polygon_img;
var ground;
var ball;
function preload(){


  polygon_img = loadImage("polygon.png");


}

function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
ground = new Ground(400,305,400,20);
ground1 = new Ground(800,165,400,20);
box1 = new Box(300,275,30,40);
box2 = new Box(330,275,30,40);
box3 = new Box(360,275,30,40);
box4 = new Box(390,275,30,40);
box5 = new Box(420,275,30,40);
box6 = new Box(450,275,30,40);
box7 = new Box(480,275,30,40);
//level 2 
box8 = new Box(330,235,30,40);
box9 = new Box(360,235,30,40);
box10 = new Box(390,235,30,40);
box11 = new Box(420,235,30,40);
box12 = new Box(450,235,30,40);
//level 3
box13 = new Box(360,195,30,40);
box14 = new Box(390,195,30,40);
box15 = new Box(420,195,30,40);
//top
box16 = new Box(390,155,30,40);

//box17 = new Box(400,380,30,40);


box18 = new Box(730,135,30,40);
box19 = new Box(760,135,30,40);
box20 = new Box(790,135,30,40);
box21 = new Box(820,135,30,40);
box22 = new Box(850,135,30,40);
//level 3
box23 = new Box(760,95,30,40);
box24 = new Box(790,95,30,40);
box25 = new Box(820,95,30,40);
//top
box26 = new Box(790,55,30,40);

ball = Bodies.circle(50,200,10,20);
World.add(world,ball);

 slingshot = new Slingshot(this.ball,{x:100,y:200});


}

 
function draw() {
 
  background(255,255,255);  
  Engine.update(engine)


 ground.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
ground1.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();
 box18.display();
 box19.display();
 box20.display();
 box21.display();
 box22.display();
 box23.display();
 box24.display();
 box25.display();
 box26.display();
 
 imageMode(CENTER);
 image(polygon_img,ball.position.x,ball.position.y,40,40);
 //box11.display();
 //box11.display();
 //box11.display();
  drawSprites();
}



function mouseDragged(){

  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  
   }
  
function keyPressed()
{
  if(keyCode==32){
slingshot.attach(this.ball);
  }
}
  function mouseReleased(){
    slingshot.fly();
  }
  