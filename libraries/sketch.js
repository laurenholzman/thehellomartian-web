let img;
function preload() {
  img = loadImage('IMG_6112.PNG');
  


}
function setup() {
  createCanvas(600,600);
}

var resize = 2;
function draw() {
  background(50)
  
  textSize(36);
  fill(119,20,50);
 text('Click to see a photo of my dog.',200,200,200,200)
  
   if (mouseIsPressed) {
    image(img, mouseX, mouseY,75*resize,135*resize);
  } else {
    text('Click to see a photo of my dog.',200,200,200,200)
  }

  print(mouseIsPressed);


}