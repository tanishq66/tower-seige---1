
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
	polygon_img = loadImage("polygon.png");
}

function setup() {

createCanvas(800, 700);

engine = Engine.create();

world = engine.world;
Engine.run(engine);

ground = new Ground(1,650,1000,10);

stand1 = new Stand(430,300,200,10);
stand2 = new Stand(700,380,200,10);

block1 = new Block(380,175,30,40);
block2 = new Block(410,175,30,40);
block3 = new Block(440,175,30,40);
block4 = new Block(470,175,30,40);
block5 = new Block(500,175,30,40);

block6 = new Block(410,135,30,40);
block7 = new Block(440,135,30,40);
block8 = new Block(470,135,30,40);

block9 = new Block(440,95,30,40);



//set 2
blocks1 = new Block(640,175,30,40);
blocks2 = new Block(670,175,30,40);
blocks3 = new Block(700,175,30,40);
blocks4 = new Block(730,175,30,40);
blocks5 = new Block(760,175,30,40);

blocks6 = new Block(670,135,30,40);
blocks7 = new Block(700,135,30,40);
blocks8 = new Block(730,135,30,40);

blocks9 = new Block(700,95,30,40);

ball = Bodies.circle(50,200,20);

World.add(world,ball);

slingShot = new SlingShot(this.ball,{x:200,y:200});
  

}

function draw() {
background("brown");
 //Engine.update(engine);

fill("red");
stand1.display();
fill("red");
stand2.display();

stroke(15);
fill("red");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
stroke(15);
fill("blue")
block6.display();
block7.display();
block8.display();
stroke(15);
fill("pink");
block9.display();

stroke(15);
fill("red");
blocks1.display();
blocks2.display();
blocks3.display();
blocks4.display();
blocks5.display();
stroke(15);
fill("pink");
blocks6.display();
blocks7.display();
blocks8.display();
stroke(15);
fill("blue");
blocks9.display();

ellipse(ball.position.x,ball.position.y);
slingShot.display();

}

/*function mouseDragged(){
	Matter.body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	slingShot.fly();
}*/