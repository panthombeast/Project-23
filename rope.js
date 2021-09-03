class rope{
	constructor(body1,body2,pointA,pointB)
	{

		this.pointA=pointA
		this.pointB=pointB

		let options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA,y:this.pointB}
		}

		//create rope constraint here
		

	}



	  //create display() here 
	  display(){
		let pointA=this.rope.bodyA.position;
		
		let pointB=this.rope.bodyB.position;

		strokeWeight(2);

		line(pointA.x,pointA.y,pointB.x,pointB.y);
  
		
		 
	}

}
