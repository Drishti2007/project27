
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2,bobObject3,bobObject4,bobObject5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	rope1 = new rope(bobObject1.body, roofObject.body,-bobDiameter*2,0);
	//Create the Bodies Here
	bobObject1 = new bobObject(200,50,100,200);
	bobObject2 = new bobObject(200,50,100,200);
	bobObject3 = new bobObject(200,50,100,200);
	bobObject4 = new bobObject(200,50,100,200);
	bobObject5 = new bobObject(200,50,100,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



