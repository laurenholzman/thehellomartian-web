let img;
let img2;
var value = 0;
var dim = 600;
var value2 = 0;
var rad = 11;
let current;

var places = [[208,37],[198,54],[240,106],[229,124],[316,128],[231,205],[249,328],[234,445]];
var descriptions = ['A muddy field that is redeemed by the adjacent dog park.','The best place for cheap coffee!','The best street for dangerously fast sledding','Play a game of pickleball or search for the Geocache I have hidden here!', 'A summertime favorite for swimming and paddleboarding.','Excellent Bahn Mi and super friendly service!','They have possibly my favorite donuts to date and sell out quickly!','A fun park with excellent views at sunset.'];

function preload() {
  img1 = loadImage('libraries/IMG_6112.PNG');
  img2 = loadImage('libraries/seattleMap2.JPG');
  


}
function setup() {
  createCanvas(dim,dim);
  imageMode(CENTER);
}
 function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value=1;
  }else {
    value = 0;
  }
}
function keyReleased() {
  if (keyCode=== LEFT_ARROW) {
    value = 0;
  }
}
function mousePressed() {
  for (let i = 0; i < places.length; i++) {
    current = places[i];
   // print(current[1],current[2], current[1]+rad,current[1]-rad,current[2]+rad,current[2]-rad)
    var p1 = mouseX<current[0]+rad;
    var p2 = mouseX > current[0]-rad;
    var p3 = mouseY<current[1]+rad ;
    var p4 = mouseY > current[1]-rad;
   // print(p1,p2,p3,p4,'\n')
    
    if ((mouseX<current[0]+rad && mouseX > current[0]-rad) && (mouseY<current[1]+rad && mouseY > current[1]-rad) ) {
      value2 = i+1;
      print(i+1)
    }
}
}
function mouseReleased() {
  value2 = 0;
}

var resize = 2;
function draw() {
  background(50)
  image(img2,dim/3,dim/2.5,119*3,159*3)
  
  textSize(36);
  fill(119,20,50);
 text('Press the left arrow to see a photo of my dog!',50,500,500,200)
 
  text('Click a red icon on the map to see more details below',2*dim/3,dim/10,dim/3)
  if (value) {
  image(img1, mouseX, mouseY,75*resize,135*resize);
  }
  if (value2 != 0) {
    textSize(18)
    fill(10,10,10)
    rect(2*dim/3-10,6*dim/10-5,dim/3,dim/6-5);
    fill(119,20,50);
    text(descriptions[value2-1],2*dim/3,6*dim/10,dim/3);
   
  }
  
  //text(str(mouseX)+', ' + str(mouseY),2*dim/3,7*dim/10)
  
   


}
