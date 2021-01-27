
var dustbin1, dustbin2, dustbin3, ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Ground(width/2-100,590,20,100);

	
	dustbin2 = new Ground(width/2+100,590,20,100);

	dustbin3 = new Ground(width/2,630,220,20);
	dustbin = new Dustbin(width/2,530,220,200);
	//Create the Bodies Here.
	ball = new Ball(100,600,30);
	ground = new Ground(width/2,height-55,width,15);

	Engine.run(engine);
  
}


function draw() {
	background("white");
  
  
  ball.display();
  
  ground.display();

  //dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
  dustbin.display();
  
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:85, y:-85})
	}
}



