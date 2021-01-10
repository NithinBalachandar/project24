class Bird extends BaseClass{
  constructor(x,y){
    //super will used to call the base class constructor
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
    //calling display function on the baseClass
  }
}