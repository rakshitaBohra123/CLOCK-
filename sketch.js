var hr,mn,sc;
var hrAngle,mnAngle,scAngle;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);

  
   

   angleMode(DEGREES);
  
  
}

function draw() {
  background(0); 
  translate(200,200);
  rotate(-90) 
   hr=hour();
   mn=minute();
   sc=second();
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);
  
  //second
  push();
  rotate(scAngle)
  stroke(255, 0, 0);
  strokeWeight(7)
  line(0,0,100,0)
  pop();
  //minute
  push();
  rotate(mnAngle)
  stroke("yellow");
  strokeWeight(7)
  line(0,0,75,0)
  pop();
//hour
  push();
  rotate(hrAngle)
  stroke("green");
  strokeWeight(7)
  line(0,0,50,0)
  pop();
  
  stroke(255,0,255); 
  point(0,0); 
  //drawing the arcs 
  strokeWeight(10); 
  noFill(); 
  //Seconds 
  stroke("red"); 
  arc(0,0,300,300,0,scAngle); 
  //Minutes 
  stroke("yellow"); 
  arc(0,0,280,280,0,mnAngle); 
  //Hour 
  stroke("green");
   arc(0,0,260,260,0,hrAngle);

}

