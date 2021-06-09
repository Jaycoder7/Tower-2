class Box {
  constructor(x,y,width,height) {
    var options = {
        restitution : 0.4,
        friction :1.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visibility = 255; 
  }
  display(){

    if(this.body.speed < 3){
      var angle = this.body.angle;
      push();
      rect(this.body.position.x, this.body.position.y);
      rotate(angle);
      pop();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       pop();
     }
   
  }
};
