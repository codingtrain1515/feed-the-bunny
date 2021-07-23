const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit;
var fruit_connection;
function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
rope = new Rope(5,{x:250,y:30});

fruit = Matter.Bodies.circle(20,20,20);
World.add(world,fruit);

Matter.Composite.add(rope.body,fruit);

fruit_connection = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
rope.show();
  Engine.update(engine);
  
ellipse(fruit.position.x, fruit.position.y,30,30);
 
   
}
