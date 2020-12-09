class droplet
{
    constructor()
    {
      this.x = random(0,400)
      this.y = 0
      var object_Options = 
      {
          isStatic:false,
          friction:1,
          restitution:0.2
      }

      this.body = Bodies.circle(this.x,this.y,50,object_Options);
      World.add(world,this.body);
    }

    display()
    {
      push();
      translate(this.body.position.x,this.body.position.y);
      fill(rgb(15,0,195))
      ellipseMode(CENTER);
      ellipse(0,0,50);
      pop();
    }
}