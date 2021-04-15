class paperBall
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,	
            restitution:0.3,
            friction:0,
            density:1.2		
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
        this.image=loadImage("paper.png")
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperBallPos=this.body.position;		

			push()
			translate(paperBallPos.x,paperBallPos.y);
			ImageMode(CENTER);
			image(0,0,this.w, this.h);
			pop()
			
	}

}