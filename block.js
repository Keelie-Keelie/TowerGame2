class Block{
    constructor(x, y, width, height) {
        var options = {
               
        }
         
        this.image = loadImage("block.png");
        this.Visibility=255;    
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }

      display(){
        if(this.body.velocity < 3) {
          super.display();

        }else {
          push();
          World.remove(world,this.body);
          this.Visibility = this.Visibility-5;
          tint(255,this.Visibility);
          pop();
        }


        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
}
