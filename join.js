class Link{
    constructor(bodyA,bodyB){
     
        var lastlink  = bodyA.body.bodies.length-2;
     
        var option={
    
    bodyA : bodyA.body.bodies[lastlink],
    pointA:{x:0,y:0},
    bodyB : bodyB,
    pointB:{x:0,y:0},
    length: -10,
    stiffness:0.1
     }
     this.link =Constraint.create(option);
     World.add(world,this.link)
    }
}