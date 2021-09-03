const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	
	engine = Engine.create();
	world = engine.world;

	var bob1_options = {
		restitution: 0.95,
	  }

	  var bob2_options = {
		restitution: 0.95,
	  }

	  var bob3_options = {
		restitution: 0.95,
	  }

	  var bob4_options = {
		restitution: 0.95,
	  }

	  var bob5_options = {
		restitution: 0.95,
	  }





	  rope1 = new rope(bob1,roof,-80,0);
	  rope2 = new rope(bob2,roof,-80,0);
	  rope3 = new rope (bob3,roof,-80)


	  bob1 = Bodies.circle(100,200,20,bob1_options);
  		World.add(world,bob1);
  
  		bob2 = Bodies.circle(120,200,20,bob2_options);
  		World.add(world,bob2);
  
  		bob3 = Bodies.circle(140,200,20,bob3_options);
  		World.add(world,bob3);
  
  		bob4 = Bodies.circle(160,200,20,bob4_options);
  		World.add(world,bob4);
  
		bob5 = Bodies.circle(180,200,20,bob5_options);
  		World.add(world,bob5);
  
		  con1=Matter.Constraint.create({
			pointA:{x:200,y:50},
			bodyB:bob1,
			pointB:{x:0,y:0},
			length:100,
			stiffness:0.1
		  });
		  World.add(world,con1);

		  con2=Matter.Constraint.create({
			pointA:{x:200,y:50},
			bodyB:bob2,
			pointB:{x:0,y:0},
			length:100,
			stiffness:0.1
		  });
		  World.add(world,con2);

		  con3=Matter.Constraint.create({
			pointA:{x:200,y:50},
			bodyB:bob3,
			pointB:{x:0,y:0},
			length:100,
			stiffness:0.1
		  });
		  World.add(world,con3);

		  con4=Matter.Constraint.create({
			pointA:{x:200,y:50},
			bodyB:bob4,
			pointB:{x:0,y:0},
			length:100,
			stiffness:0.1
		  });
		  World.add(world,con4);

		  con5=Matter.Constraint.create({
			pointA:{x:200,y:50},
			bodyB:bob5,
			pointB:{x:0,y:0},
			length:100,
			stiffness:0.1
		  });
		  World.add(world,con5);



	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
	ellipseMode(RADIUS);
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
 rope1.display();
  line(rope1.pointA.x,rope1.pointA.y,bob1.position.x,bob1.position.y);
  
  
  

  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,20);

  ellipse(bob2.position.x,bob2.position.y,20);

  ellipse(bob3.position.x,bob3.position.y,20);

  ellipse(bob4.position.x,bob4.position.y,20);

  ellipse(bob5.position.x,bob5.position.y,20);





 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
