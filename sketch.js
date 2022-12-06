// the frame rate or how often it updates
defaultFrameRate = 120;

//sprite vars for preload
let jackJack, ladder, secondGround, bridge, thirdGround, trampoline, sky, ground4, slide, ground5, ground6,
  longLadder, startingSign, endingSign, verticalGroundBetween4and5, verticalGroundBetween4AndTop,
  verticalGroundRightMovingGround, verticalGroundAboveMovingGround, coin, smallBridge1, smallBridge2, STARTSCREEN,
  instructionsScreen, endScreenSprite, deadGroundUnderBridge, deadGroundUnderMovingGround, startButton, rightUpArrow1;

//the var that changes the game screens 
var mode = 'startScreen';
/** This function loads resources that will be used later. */
function preload() {
  //makes it s that the dead screen goes away when you restart
  mode = 'startScreen'
  // sky
  sky = loadImage('sky.jpeg');

  //start Button
  startButton = new Sprite(820, 500, 300, 300, 'kinematic');
  startButton.addAni('startButton.png');
  startButton.scale = 0.17;
  startButton.layer = 3




  // makes jackjack
  jackJack = new Sprite(70, 300, 265, 465,);
  jackJack.addAni('jack jack v3.png');
  jackJack.scale = 0.2;
  jackJack.layer = 1;
  jackJack.rotationLock = true;


  // first ladder
  ladder = new Sprite(150, 528, 10, 505, 'static');
  ladder.addAni('ladder.png')
  ladder.scale = 0.5;
  ladder.layer = 1;

  // to the left of the bridge
  secondGround = new Sprite(280, 390, 250, 25, "static")
  secondGround.shapeColor = 'green';
  secondGround.layer = 0;

  // the small one directly to the right of the bridge
  thirdGround = new Sprite(685, 383, 100, 25, 'static')
  thirdGround.shapeColor = 'green';
  thirdGround.layer = 0

  // bridge
  bridge = new Sprite(525, 375, 329, 5, 'static')
  bridge.addAni('bridge.png')
  bridge.scale = 0.7;
  bridge.layer = 1;

  // trampoline
  trampoline = new Sprite(820, 619, 400, 100, 'static')
  trampoline.addAni('trampoline.png')
  trampoline.scale = 0.3;
  trampoline.layer = 1;
  trampoline.bounciness = 1.5;

  //the highest ground to the left of the trampoline
  ground4 = new Sprite(495, 110, 480, 25, 'static')
  ground4.shapeColor = 'green'
  ground4.layer = 0;

  // the ground right under ground 4
  ground5 = new Sprite(360, 230, 750, 25, 'static')
  ground5.color = 'green';
  ground5.layer = 0;

  smallLaddersForQuestions();

  //ground6 the one after moving ground
  ground6 = new Sprite(1433, 230, 200, 25, 'static');
  ground6.color = 'green';
  ground6.layer = 0;

  //last ladder to get to the end     
  longLadder = new Sprite(1530, 450, 20, 100, 'static');
  longLadder.addAni('longLadder.png');
  longLadder.scale = 0.5;
  longLadder.layer = 0;

  //starting sign
  startingSign = loadImage('startSignPost.png');

  //ending sign
  endingSign = loadImage('finishSign.png');

  //vertical peace in between ground 4 and 5 
  verticalGroundBetween4and5 = new Sprite(723, 169, 25, 100, 'static')
  verticalGroundBetween4and5.color = 'green';
  verticalGroundBetween4and5.layer = 0;

  //vertical ground to the left of moving ground so you can't cheat
  verticalGroundLeftMovingGround = new Sprite(959, 448, 25, 410, 'static')
  verticalGroundLeftMovingGround.color = 'green';
  verticalGroundLeftMovingGround.layer = 0;

  //vertical ground to the right of moving ground
  verticalGroundRightMovingGround = new Sprite(1317, 448, 25, 410, 'static');
  verticalGroundRightMovingGround.color = 'green';
  verticalGroundRightMovingGround.layer = 0;

  //vertical ground above moving ground so you can't cheat
  verticalGroundAboveMovingGround = new Sprite(959, 120, 25, 250, 'static');
  verticalGroundAboveMovingGround.color = 'green';
  verticalGroundAboveMovingGround.layer = 0;

  //coin sprite
  // coin = new Sprite(190,355,13,'static')
  // coin.addAni('coin.png');
  // coin.scale = 1.7

  // the 2 small brides for the second math question
  smallBridge1 = new Sprite(138, 762, 200, 100, 'kinematic');
  smallBridge1.addAni('bridge.png')
  smallBridge1.scale = 0.4;
  smallLadder1.layer = 0;
  smallBridge1.visible = false;

  smallBridge2 = new Sprite(360, 762, 200, 100, 'kinematic');
  smallBridge2.addAni('bridge.png')
  smallBridge2.scale = 0.4;
  smallLadder2.layer = 0;
  smallBridge2.visible = false;

  // the grounds where you can die at 
  deadGroundUnderBridge = new Sprite(450, 665, 550, 30, 'static')
  deadGroundUnderBridge.color = 'red';
  deadGroundUnderBridge.layer = 1;

  deadGroundUnderMovingGround = new Sprite(1139, 665, 350, 30, 'static');
  deadGroundUnderMovingGround.color = 'red';
  deadGroundUnderMovingGround.layer = 1;

  //the instruction screen
  instructionsScreen = new Sprite(825, 400, 1, 1, 'static')
  instructionsScreen.addAni('instructionsScreen.jpg')
  instructionsScreen.visible = false
  instructionsScreen.layer = 2

  rightUpArrow1 = loadImage('rightUpArrow.png');

}

function drawVerticalGroundBetween4AndTop() {
  //vertical peace inbetween ground4 and top of screen so you can't go back
  verticalGroundBetween4AndTop = new Sprite(722, 51, 25, 100, 'static');
  verticalGroundBetween4AndTop.color = 'green';
}

function drawStartScreen() {
  var mode = 'instructions'

  if (mode == 'instructions') {
    instructionsScreen.visible = true
    //makes the buttton and instrections disapear
    if (startButton.mouse.pressed()) {
      instructionsScreen.remove()
      startButton.remove()
    }
  }



}


//makes the ladder sprites for the first question
let smallLadder1, smallLadder2;
function smallLaddersForQuestions() {
  // small ladder to the left that is correct
  smallLadder1 = new Sprite(138, 772, 70, 505, 'kinematic');
  smallLadder1.addAni('ladder.png')
  smallLadder1.scale = 0.3;
  smallLadder1.layer = 0;
  smallLadder1.rotation = 90;
  smallLadder1.visible = false
  //small ladder to the right that is wrong
  smallLadder2 = new Sprite(360, 772, 70, 505, 'kinematic');
  smallLadder2.addAni('ladder.png')
  smallLadder2.scale = 0.3;
  smallLadder2.layer = 0;
  smallLadder2.rotation = 90;
  smallLadder2.visible = false
}

//the ground that apers above the trampoline
function drawground6() {
  ground6 = new Sprite(840, 230, 250, 25, 'static')
  ground6.color = 'green';
}

//makes the sprite for moving ground
let movingGround;
function drawMovingGround() {
  movingGround = new Sprite(1000, 230, 100, 25, 'static')
  movingGround.color = 'green';
  movingGround.layer = 0

}

function drawArrows() {
  stroke('black');
  strokeWeight(3);
  //line(106, 504, 122, 389);
  

  noStroke();

  image(rightUpArrow1,111,405,50,50)

  
}
function setup() {
  createCanvas(1650, 800);

  //green ground
  noStroke();
  //makes the boottom green ground
  let floor;
  floor = new Sprite(825, 665, 1650, 30, 'static');
  floor.shapeColor = 'green';
  floor.layer = 0;

  //sets gravity
  world.gravity.y = 10;
  drawMovingGround();

}


let groundBrownLayer;
function drawGroundBrown() {
  // brown ground
  fill(117, 71, 39)
  groundBrownLayer = rect(0, 650, 1650, 150);
  groundBrownLayer.layer = 2;
}

function makeBoundaries() {
  // boundary of screen on the right
  if (jackJack.x > width) {
    jackJack.x = width - 1;
    jackJack.vel.x = abs(jackJack.vel.x);
  }
  // boundary on bottom
  if (jackJack.y > height) {
    jackJack.y = height - 1;

  }
  //boundary top
  if (jackJack.y < 0) {
    jackJack.y = 1;
    jackJack.vel.y = abs(jackJack.vel.y);
  }
  //boundary left
  if (jackJack.x < 0) {
    jackJack.x = 1;
    jackJack.vel.x = abs(jackJack.vel.x);
  }
}

//lets me turn on and off jackjack movement
var canJackJackMove = true;
function jackjackMovement() {
  if (canJackJackMove) {
    if (kb.pressing('right')) {
      jackJack.x += 5;
    } else if (kb.pressing('left')) {
      jackJack.x -= 5;
      //no double jump
    } else if (kb.pressed('up') && jackJack.vel.y == 0) {
      jackJack.vel.y -= 5;
    } else {
      jackJack.vel.y += 0.01;
    }
  }

}

//shows the hight of the ladder when jackjack colides with ladder
function ladderHeight() {
  stroke('black');
  strokeWeight(3);
  //vertical line
  line(195, 636, 195, 418);
  //top horizontal line
  line(195, 418, 180, 418)
  //bottom horizontal line
  line(195, 636, 180, 636);

  noStroke();
  fill('black');
  textSize(20);
  text('10ft', 210, 522);
}

const STATIC = 0;
const LEFT = 1;
const RIGHT = 2;
let groundMovingDirection = STATIC;
function animatingMovingGround() {
  let isGroundMoving = groundMovingDirection != STATIC;
  // boundery on right side for movingGround
  if (isGroundMoving && movingGround.x > width - 350) {
    groundMovingDirection = LEFT;

  }
  //boundery on left side for movingGround
  if (isGroundMoving && movingGround.x < width - 650) {
    groundMovingDirection = RIGHT;

  }
  //make ground5 appear
  if (jackJack.collide(ground4)) {
    //start ground moving
    if (groundMovingDirection == STATIC) {
      groundMovingDirection = RIGHT;
    }
    drawground6();
    //make the ground diaper
    verticalGroundBetween4and5.remove();
    //makes vertical wall so you can go back out the way you came
    drawVerticalGroundBetween4AndTop();
    //makes the ground disappear
    verticalGroundAboveMovingGround.remove();
  }
  //move movingGround tho the right
  if (groundMovingDirection == RIGHT) {
    movingGround.x += 2;

  }
  //move movingGround to the left
  if (groundMovingDirection == LEFT) {
    movingGround.x -= 2;

  }
}

//Draws the first question
let isLadderQuestion = false;
async function drawFirstLadderQuestion() {
  if (isLadderQuestion) {
    smallLadder1.visible = true
    smallLadder2.visible = true
    fill('black')
    textSize(25);
    //right small ladder
    text('20/2', 142, 750);
    // left small ladder
    text('30/2', 350, 750)
    text('which ladder is the correct hight? click the smalls ladder to find out.', 70, 672);
    ladderHeight();
  }

  //left ladder clicking action the right choose
  if (smallLadder1.mouse.pressed()) {
    jackJack.vel.y -= 10;
    isFirstLadderQuestionRightDelayed = true;
    //makes the text for saying you are right stay up for 3 sec
    await sleep(3000);
    //after time is up this is what make the text turn off
    isFirstLadderQuestionRightDelayed = false;
  }

  // right ladder clicking action the wrong chose
  if (smallLadder2.mouse.pressing()) {
    isFirstLadderQuestionWrongDelayed = true;
    // await will only work if I make the function async
    await sleep(3000);
    isFirstLadderQuestionWrongDelayed = false;

  }
}

function bridgeMeasurement() {
  stroke('black');
  strokeWeight(3);
  //horesontal line
  line(414, 423, 630, 423);
  //vertical line to the left
  line(414, 423, 414, 405);
  //vertical line to the right
  line(630, 423, 630, 400);
  //shows how long bridge is

  noStroke();
  textSize(20);
  fill('black')
  text('27ft', 520, 443);
}
var isBridgeQuestion = false;
async function SecondMathQuestion() {
  if (isBridgeQuestion) {
    bridgeMeasurement();
    smallBridge1.visible = true;
    smallBridge2.visible = true;
    //the question
    textSize(24);
    text('which bridge is the correct length? click one of the small bridges to find out.', 10, 670)
    //the left ladder the wrong aswere
    text('90/6', 125, 731);
    //the right ladder the wright aswere
    text('162/6', 342, 731)
  }
  if (smallBridge1.mouse.pressed()) {
    isFirstBrideQuestionWrongDelayed = true;
    await sleep(3000);
    isFirstBrideQuestionWrongDelayed = false;
  }
  if (smallBridge2.mouse.pressed()) {
    isFirstBridgeQuestionRightDelayed = true;
    await sleep(3000);
    isFirstBridgeQuestionRightDelayed = false;
  }
}

function deadScreen() {
  background('white');
  fill('red');
  strokeWeight(20);
  text('you died :) click the restart button', 825, 400)

}
//make the first ladder question disappear when I am not touching the ladder
var makeMathQuestionsDisappearWhenNotOn = {
  1: drawFirstLadderQuestion,
  2: SecondMathQuestion
}
//when latNum is 1 then it executes drawFirstLadderQuestion
var makeMathQuestionsDisappearWhenNotOnNum = 0;

//part of the async function proses
var isFirstLadderQuestionRightDelayed = false;
var isFirstLadderQuestionWrongDelayed = false;
//this will only run when I click on the left small ladder for the first question
//this is for the first ladder question
function firstAnswerToQuestionDelay() {
  //right answer 
  if (isFirstLadderQuestionRightDelayed) {
    fill('black')
    textSize(45)
    text('YESSSS 20/2=10!!!!!', 800, 400)
    //wrong answer
  } else if (isFirstLadderQuestionWrongDelayed) {
    textSize(45)
    text('NO 30/2=15 try again!', 800, 400);
  }
}

var isFirstBridgeQuestionRightDelayed = false;
var isFirstBrideQuestionWrongDelayed = false;
function secondAnswearToQuestionDelay() {
  if (isFirstBridgeQuestionRightDelayed) {
    textSize(45);
    fill('black');
    text('YES! 162/6=27!!!!', 800, 400);
    //makes it so that jackjack can move when the question is right
    canJackJackMove = true;
  } else if (isFirstBrideQuestionWrongDelayed) {
    fill('black');
    textSize(45);
    text('wrong 90/6=15', 800, 400);
  }
}




async function draw() {


  //draws sky
  image(sky, 0, 0, 1650, 1000);
  image(startingSign, -43, 520, 160, 160);
  image(endingSign, 1526, 520, 160, 160)
  drawGroundBrown();
  allSprites.draw();

  if (mode == 'startScreen') {
    drawStartScreen();
    
  }

  if (mode == 'game') {
    preload();
    setup();
    draw();
  }

  //makes it so that if you donn't make the gap between the top and ground 4
  if (verticalGroundBetween4AndTop && jackJack.collide(verticalGroundBetween4AndTop)) {
    //pushes jackjack to the left a bit
    jackJack.x -= 30
  }

  if (jackJack.collide(deadGroundUnderMovingGround) || jackJack.collide(deadGroundUnderBridge)) {
    // malkes it so that you don't die instantly when you hit the red ground
    await sleep(500)
    // trigers the end screen
    mode = 'gameEnd';
  }

  if (mode == 'gameEnd') {
    deadScreen();
  }

  jackjackMovement();



  // first ladder make up go up
  if (jackJack.colliding(ladder)) {
    isLadderQuestion = true;
    //where it is called when the ladder question diapers
    makeMathQuestionsDisappearWhenNotOnNum = 1;
    makeMathQuestionsDisappearWhenNotOn[makeMathQuestionsDisappearWhenNotOnNum]();

  } else {
    smallLadder1.visible = false;
    smallLadder2.visible = false;
  }
  //makes jackjack move with moving ground
  if (jackJack.colliding(movingGround)) {
    jackJack.x = movingGround.x;
  }

  //make the bridge question show up
  if (jackJack.colliding(bridge)) {
    //make jackjack not be able to move when touching the bridge
    canJackJackMove = false;

    isBridgeQuestion = true;
    makeMathQuestionsDisappearWhenNotOnNum = 2;
    makeMathQuestionsDisappearWhenNotOn[makeMathQuestionsDisappearWhenNotOnNum]();
  } else {
    smallBridge1.visible = false;
    smallBridge2.visible = false;
  }




  animatingMovingGround();
  makeBoundaries();
  firstAnswerToQuestionDelay();
  secondAnswearToQuestionDelay();
  drawArrows();
}

async function sleep(ms) {
  await setTimeout(function () { }, ms)
}

// the button that restarts the game
function restartButton() {
  
  //clears all the sprites 
  allSprites.remove();
  //cales these functions again to redraw the sene
  preload();
  setup();
  draw();
  deadScreen();
}
