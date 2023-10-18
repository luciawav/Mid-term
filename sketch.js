let leftSwanX, leftSwanY, leftSwanDirection;
let leftSwanIsHovered = false; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  leftSwanX = width / 2 - 200;
  leftSwanY = height / 2;
  leftSwanDirection = 1;
  noFill();
  stroke(0); 
  drawSwan(leftSwanX, leftSwanY, leftSwanDirection); 
  noFill();
  stroke(0); 
  drawSwan(width / 2 + 200, height / 2, -1); 
}

function draw() {
  background(225);


  if (
    mouseX >= leftSwanX - 50 &&
    mouseX <= leftSwanX + 50 &&
    mouseY >= leftSwanY - 200 &&
    mouseY <= leftSwanY + 50
  ) {
    leftSwanIsHovered = true;
  } else {
    leftSwanIsHovered = false;
  }

  if (leftSwanIsHovered) {
    fill(0); 
  } else {
    noFill(); 
  }
  drawSwan(leftSwanX, leftSwanY, leftSwanDirection);

  noFill();
  drawSwan(width / 2 + 200, height / 2, -1);

}

function drawSwan(x, y, direction) {
  push();
  translate(x, y);
  scale(direction, 1);

  // Body
  beginShape();
  vertex(-100, 20);
  vertex(0, 80);
  vertex(30, 0);
  vertex(0, -50);
  vertex(-140, -70);
  endShape(CLOSE);

  // Neck
 

  // Head 
  beginShape();
  vertex(30, -130);
  vertex(60, -130);
  vertex(60, -100);
  vertex(30, -100);
  endShape(CLOSE);

  // Beak 
  triangle(60, -100, 90, -100, 60, -120);

  pop();

}
