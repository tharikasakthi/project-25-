class paper
{
	constructor(x,y,r)
	{
		var options={
			//isStatic:   ,
			//restitution:  ,
			//friction:  ,
			//density:

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		loadImage("paper.png");

		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image

			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}