class Particle {
    constructor(x, y,radius) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
       this.radius=radius
      this.body = Bodies.circle(x, y,radius,options);
      this.color=color(random(0, 255), random(0, 255), random(0, 255));
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        //ellipse(0, 0, this.r,this.r);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
        pop();
        
  
    }
  
  };
  