//Background
var backgroundSprite, backgroundImage, backgroundImage2;

//balloons
var rballoon, gballoon, bballoon, yballoon;

//balloon images
var rimage, gimage, bimage, yimage;

//bow
var bowSprite, bowImage;

//Arrow
var arrow, arrowImage, arrowGroup;

// random Ballon Select
var selectBallon;

//Score
var score;
score = 0;

//Ballon Groups
var rGroup, bGroup, gGroup, yGroup;

function preload() {
 //load your images here
  
  //background images
  backgroundImage = loadImage("background0.png");
  backgroundImage2 = loadImage("background20.png");
  
  //Balloon Image
  rimage = loadImage("red_balloon0.png");
  gimage = loadImage("green_balloon0.png");
  bimage = loadImage("blue_balloon0.png");
  yimage = loadImage("pink_balloon0.png");
  
  //Bow image
  bowImage = loadImage("bow0.png");
  
  //Arrow Image
  arrowImage = loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
  
  //add code here
  
  //background
  backgroundSprite = createSprite(300, 200, 600, 600);
  backgroundSprite.addImage(backgroundImage);
  backgroundSprite.scale = 2;
  backgroundSprite.velocityX = -0.5;
  backgroundSprite.x = backgroundSprite.width/2
  
  //Bow
  bowSprite = createSprite(550, 300, 10, 50);
  bowSprite.addImage(bowImage);
  
  //Groups
  rGroup = new Group();
  bGroup = new Group();
  gGroup = new Group();
  yGroup = new Group();
  arrowGroup = new Group();
}

function draw() {
  background("white");

  //add code here
  
  //background change
  if (backgroundSprite.x < 197) {
    backgroundSprite.x = 300
  }
  
  //Bow Movement
  bowSprite.y = World.mouseY
  
  //Shoot Arrow
  shootArrow();
  
  // Select Balloon
  selectBalloon = Math.round(random(1, 4));
  console.log(selectBalloon);
  
  if (frameCount % 80 === 0) {
    if (selectBalloon === 1) {
      rBalloon();
    } else if (selectBallon === 2) {
      gBalloon();
    } else if (selectBallon === 3) {
      bBalloon();
    } else {
      pBalloon();
    }
  }
  
  if (arrowGroup.isTouching(rGroup)) {
    arrowGroup.destroyEach();
    rGroup.destroyEach();
    score += 1;
  } else if (arrowGroup.isTouching(gGroup)) {
    gGroup.destroyEach();
    arrowGroup.destroyEach();
    score += 2;
  } else if (arrowGroup.isTouching(bGroup)) {
    bGroup.destroyEach();
    arrowGroup.destroyEach();
    score += 3;
  } else if (arrowGroup.isTouching(yGroup)) {
    yGroup.destroyEach();
    arrowGroup.destroyEach();
    score += 0.5;
  }
    
  drawSprites();
  
  textSize(20);
  text("Score: " + score, 270, 30);
}

function shootArrow() {
  if (keyDown("space")) {
    arrow = createSprite(520, 300, 50, 5);
    arrow.addImage(arrowImage);
    arrow.y = bowSprite.y;
    arrow.velocityX = -6;
    arrow.scale = 0.25;
    arrow.lifetime = 90
    arrowGroup.add(arrow);
  }
}

function rBalloon() {
  rballoon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  rballoon.addImage(rimage);
  rballoon.velocityX = 3;
  rballoon.lifetime = 150;
  rballoon.scale = 0.1;
  rGroup.add(rballoon);
}

function gBalloon() {
  gballoon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  gballoon.addImage(gimage);
  gballoon.velocityX = 3;
  gballoon.lifetime = 150;
  gballoon.scale = 0.1;
  gGroup.add(gballoon);
}

function bBalloon() {
  bballoon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  bballoon.addImage(bimage);
  bballoon.velocityX = 3;
  bballoon.lifetime = 150;
  bballoon.scale = 0.1;
  bGroup.add(bballoon);
}

function pBalloon() {
  yballoon = createSprite(0, Math.round(random(20, 370)), 10, 10);
  yballoon.addImage(yimage);
  yballoon.velocityX = 3;
  yballoon.lifetime = 150;
  yballoon.scale = 1.25;
  yGroup.add(yballoon);
}