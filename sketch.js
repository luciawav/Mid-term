let swanFilled;
let swanUnfilled;
let swanTitle;
let itWasPerfectImg;
let iWasPerfectImg;
let leftSwanX, leftSwanY;
let rightSwanX, rightSwanY;
let leftSwanIsHovered = false;
let startTime;

function preload() {
  swanFilled = loadImage('swan_filled.png');
  swanUnfilled = loadImage('swan_unfilled.png');
  swanTitle = loadImage('swan_title.png');
  itWasPerfectImg = loadImage('itwasperfect.png');
  iWasPerfectImg = loadImage('iwasperfect.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis();

  let gapBetweenSwans = 20;
  leftSwanX = width / 2 - swanUnfilled.width - gapBetweenSwans / 2;
  leftSwanY = height / 2 - swanUnfilled.height / 2;
  rightSwanX = width / 2 + gapBetweenSwans / 2;
  rightSwanY = height / 2 - swanUnfilled.height / 2;
}

function draw() {
  background(255);

  if (
    mouseX >= leftSwanX &&
    mouseX <= leftSwanX + swanUnfilled.width &&
    mouseY >= leftSwanY &&
    mouseY <= leftSwanY + swanUnfilled.height
  ) {
    leftSwanIsHovered = true;
  } else {
    leftSwanIsHovered = false;
  }

  if (leftSwanIsHovered) {
    push();
    scale(-1, 1);
    image(swanFilled, -leftSwanX - swanFilled.width, leftSwanY);
    pop();
  } else {
    push();
    scale(-1, 1);
    image(swanUnfilled, -leftSwanX - swanUnfilled.width, leftSwanY);
    pop();
  }

  image(swanUnfilled, rightSwanX, rightSwanY);

  let showSwan = millis() - startTime;

  // After 1.05 seconds, "itwasperfect.png" gradually revealed
  if (showSwan > 1050 && showSwan <= 1300) {
    push();
    tint(255, map(showSwan, 1500, 1300, 0, 255)); // Adjust transparency
    image(itWasPerfectImg, width / 2 - itWasPerfectImg.width / 8, 10, itWasPerfectImg.width / 4, itWasPerfectImg.height / 4); // 1/2 size
    pop();
  } else if (showSwan > 1300) {
    image(itWasPerfectImg, width / 2 - itWasPerfectImg.width / 8, 10, itWasPerfectImg.width / 4, itWasPerfectImg.height / 4); // 1/2 size
  }

  // 2 seconds after "itwasperfect.png" is revealed, "iwasperfect.png" revealed
  if (showSwan > 2000) {
    image(iWasPerfectImg, width / 2 - iWasPerfectImg.width / 8, 10 + itWasPerfectImg.height / 4 + 20, iWasPerfectImg.width / 4, iWasPerfectImg.height / 4); // 1/2 size, increased gap
  }

  // Positioning swanTitle to touch the lower edge of the canvas and centered
  image(swanTitle, (width - swanTitle.width + 50) / 2, height - swanTitle.height + 200);
}
