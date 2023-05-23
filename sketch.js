let x=100
let y=100
function setup() {
  createCanvas(800, 600);

  let inpX = createInput('');
  inpX.position(50, 550);
  inpX.size(100);
  inpX.input(myInputEventX);
  
  let inpY = createInput('');
  inpY.position(50, 570);
  inpY.size(100);
  inpY.input(myInputEventY);
  
}

function draw(){
  background(220);
  rectMode(CENTER);
   fill(255)
  rect (width/2,height/2,x,y);
    fill(0)
  text("width",10,565)
  text("length",10,585)
  
  

  fill(220)
  rect(700,550,100,50)
  fill(0)
  text("save image",660,555)
  if(mouseIsPressed&&mouseX>650&&mouseX<700&&mouseY>525&&mouseY<575){
  save("test.png")
  }
}

function myInputEventX() {
  x= this.value();
}

function myInputEventY() {
  y= this.value();
}