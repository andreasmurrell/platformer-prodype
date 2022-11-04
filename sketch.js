// the frame rate or how often it updates
defaultFrameRate = 120;

//vars for preload
let jackJack, ladder, secondGround, bridge, thirdGround, trampoline, sky, ground4, slide, ground5, ground6,
longLadder;

/** This function loads resources that will be used later. */ 
function preload() {
  // sky
  sky = loadImage('sky.jpeg');
  
  // makes jackjack
  jackJack = new Sprite(30,300,265,465);
  jackJack.addAni('jack jack v3.png');
  jackJack.scale = 0.2;
  jackJack.layer = 2;
  jackJack.rotationLock =  true;
  
  // first ladder
  ladder = new Sprite(150,528,10,505, 'static');
  ladder.addAni('ladder.png')
  ladder.scale = 0.5;
  ladder.layer = 0;
  
  // second ground
  secondGround = new Sprite(280,390,250,25, "static")
  secondGround.shapeColor = 'green';

  // third ground
  thirdGround = new Sprite(685,383,100,25,'static')
  thirdGround.shapeColor = 'green';
  
  // bridge
  bridge = new Sprite(525,375,329,5, 'static')
  bridge.addAni('bridge.png')
  bridge.scale = 0.7;
  
  // trampoline
  trampoline = new Sprite(820,619,400,100, 'static')
  trampoline.addAni('trampoline.png')
  trampoline.scale = 0.3;
  trampoline.layer = 1;
  trampoline.bounciness = 1.5;
  
  //4th ground
  ground4 = new Sprite(495,110,480,25,'static')
  ground4.shapeColor = 'green'
  
  //ground5
  ground5 = new Sprite (360,230,750,25, 'static')
  ground5.color = 'green';

  smallLaddersForQuestions(); 

  //ground6 the one after moving ground
  ground6 = new Sprite(1433,230,200,25,'static');
  ground6.color = 'green';

  //last ladder to get to the end     //420
  longLadder = new Sprite(1530,450,20 ,100, 'static');
  longLadder.addAni('longLadder.png');
  longLadder.scale = 0.5;
  longLadder.layer = 0
  
  //longLadder.h = 10;
  
  
}


let smallLadder1, smallLadder2;
function smallLaddersForQuestions(){
   // small ladder to the left that is correct
   smallLadder1 = new Sprite(138,772,70,505, 'kinematic');
   smallLadder1.addAni('ladder.png')
   smallLadder1.scale = 0.3;
   smallLadder1.layer = 0;
   smallLadder1.rotation = 90;
   smallLadder1.visible =false
   //small ladder to the right that is wrong
   smallLadder2 = new Sprite(360,772,70,505, 'kinematic');
   smallLadder2.addAni('ladder.png')
   smallLadder2.scale = 0.3;
   smallLadder2.layer = 0;
   smallLadder2.rotation = 90;
   smallLadder2.visible =false
}

function drawground6(){
  ground6 = new Sprite(840,230,250,25, 'static')
  ground6.color = 'blue';
}

let movingGround;
function drawMovingGround (){
  movingGround = new Sprite(1000,230,100,25, 'static')
  movingGround.color = 'red';
  movingGround.layer = 0
  
}

function setup() {
  createCanvas(1650, 800);
  
  //green ground
  noStroke();
  
  let floor;
  floor = new Sprite(825,665,1650,30, 'static');
  floor.shapeColor = 'green';
  floor.layer = 0;
  
  //sets gravity
  world.gravity.y=10;
  drawMovingGround();
}


let groundBrownLayer;
function drawGroundBrown (){
  // brown ground
  fill(117, 71, 39)
  groundBrownLayer = rect(0,650,1650,150);
  groundBrownLayer.layer = 2;
}

function makeBoundaries(){
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

function jackjackMovment(){
  if (kb.pressing('right')) {
    jackJack.x+= 5;
  } else if (kb.pressing('left')) {
    jackJack.x -= 5;
                              //no double jump
  } else if (kb.pressed('up') && jackJack.vel.y == 0) {
    jackJack.vel.y -= 5;
  } else {
    jackJack.vel.y += 0.01;
  }
}

function ladderHeight (){
  stroke('black');
  strokeWeight(3);
  //vertical line
  line(195,636,195,418);
  //top horizontal line
  line(195,418,180,418)
  //bottom horizontal line
  line(195,636,180,636);

  noStroke();
  fill('black');
  textSize(20);
  text('10ft',210,522);
}




const STATIC = 0;
const LEFT = 1;
const RIGHT = 2;
let groundMovingDirection = STATIC;
function animatingMovingGround (){
  let isGroundMoving = groundMovingDirection != STATIC;
  // boundery on right side for movingGround
  if (isGroundMoving && movingGround.x > width-350) {
    groundMovingDirection = LEFT;
    
  }
  //boundery on left side for movingGround
  if (isGroundMoving && movingGround.x < width-650) {
    groundMovingDirection = RIGHT;
    
  }
  //make ground5 appear
  if (jackJack.collide(ground4)){
    //start ground moving
    if (groundMovingDirection == STATIC){
      groundMovingDirection = RIGHT;
    }
    drawground6();
  }
  //move movingGround tho the right
  if (groundMovingDirection == RIGHT){
    movingGround.x+=2;
    
  }
  //move movingGround to the left
  if (groundMovingDirection == LEFT){
    movingGround.x-=2;
    
  }
}
let isLadderQuestion = false;
function drawFirstLadderQuestion (){
  if(isLadderQuestion){
    smallLadder1.visible = true
    smallLadder2.visible = true
    fill('black')
    textSize(25);
    //right small ladder
    text('20/2',142,750);
    // left small ladder
    text('30/2',350,750)                                                        
    text('which ladder is the correct hight? click the small ladder to find out.',70,672);
    ladderHeight();
  }
   //left ladder clicking action 
  if (smallLadder1.mouse.pressed()){
    // alert = 'YESSSSSS   20/2=10!!';
    // sleep(5000).then(function() {
    //   alert = "";
    textSize(45)
    text('YESSSS 20/2=10!!!!!',600,400)
    answerIsTrue = true;
    jackJack.vel.y -= 10;
    }//);
    
  
  // right ladder clicking action the wrong chose
  if (smallLadder2.mouse.pressing()){
    textSize(45)
    text('NO 30/2=15 try again!',600,400)
    
  }

  
}



var makeLadderQuestionDisappear = {
  1: drawFirstLadderQuestion
}
var latNum = 0;

//let alert = "";
let answerIsTrue = false;
function draw() {
  //draws sky
  image(sky,0,0,1650,1000)
  textSize(100);
  text(alert);
  jackjackMovment();
  drawGroundBrown();
  allSprites.draw();
   // first ladder make up go up
  if (jackJack.colliding(ladder)){
    isLadderQuestion = true;
    latNum = 1;
    makeLadderQuestionDisappear[latNum]();
  } else {
    smallLadder1.visible = false;
    smallLadder2.visible = false;
  }

  if (jackJack.colliding(secondGround)) {
    
    
  }
  
  
  //drawFirstLadderQuestion();
  animatingMovingGround();
  makeBoundaries();
}
  
// async function sleep(ms){
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
//}
