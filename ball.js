class Ball {
constructor(x,y){
    var options = {
        isStatic: true
      };
      this.r = 30;
      this.x = 300;
      this.y = 600
      this.body = Bodies.circle(x, y, this.r, options);
      World.add(world, this.body);
    }
}