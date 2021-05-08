class Paper{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(200,500,30,options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,100,100);
    }
}