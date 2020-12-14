const World = Matter.World
const Bodies = Matter.Bodies
const Engine = Matter.Engine




var engine, world;
var ground;
var ball;

function setup() {

     var canvas = createCanvas(400,400);
     engine = Engine.create();
     world = engine.world;

     var ground_options = {

        isStatic:true
     }

     ground = Bodies.rectangle(200,390,200,20,ground_options);
     World.add(world,ground);


     var ball_options = {
     restitution:0.5
     }

     ball = Bodies.circle(200,100,20,ball_options);
     World.add(world,ball);
}

function draw() {
  background("cyan"); 
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,200,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}