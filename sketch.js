//criar constantes\\
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//criar variáveis\\
var world,engine;
var ball,ground,left,right;

function setup() {
	
	createCanvas(3000, 700);

	engine = Engine.create();
	world = engine.world;

	//criar opções\\
	ball_options = {
		isStatic:false,
		friction:0,
		restitution:0.3,
		density:1.2,
	}
	ground_options = {
		isStatic:true,
	}

	//criar corpos\\
	ball = Bodies.circle(200,200,50,ball_options);
	left  = Bodies.rectangle(700,610,25,150,ground_options);
	right = Bodies.rectangle(900,610,25,150,ground_options);
	ground = Bodies.rectangle(500,700,1000,40,ground_options);

	//adicionar no mundo\\
	World.add(world,ball);
	World.add(world,left);
	World.add(world,right);
	World.add(world,ground);

	Engine.run(engine);
}

function draw() {

	background(0);
	
	//defina o começo no centro\\
	ellipseMode(CENTER)
    rectMode(CENTER);
  
	//desenhe as formas\\
	push();
		fill("yellow");
		ellipse(ball.position.x,ball.position.y,50);
	pop();
	
	push();
		fill("red");
		rect(left.position.x,left.position.y,25,150);
		rect(right.position.x,right.position.y,25,150);	
		rect(ground.position.x,ground.position.y,1000,40);
	pop();

	//se seta para cima for pressionada\\
if(keyCode === 32){
	Body.applyForce(ball,{x:0,y:0},{x:3,y:-10});
}
	drawSprites(); 
}
