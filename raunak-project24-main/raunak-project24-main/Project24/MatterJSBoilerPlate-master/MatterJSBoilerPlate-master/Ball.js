class Ball{
    constructor(x,y,r){
    var option = {
     isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2

        }
    this.body = Bodies.circle(x,y,r,option) ;
    World.add(world,this.body);
    this.x = x;
    this.y = y;
    this.r = r;
    this.image  = loadImage("paper.png");
    }
    display(){
        var pos = this.body.position;
        push ()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);

        pop()
    }
}