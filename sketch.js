defaultFrameRate = 60;
//vars for preload
let jackJack, ladder, secondGround, bridge, thirdGround, trampoline;
 /** This function loads resources that will be used later. */
 function preload() {
  
  //makes jackjack
  jackJack = new Sprite(30,300,265,465);
  jackJack.addAni('jack jack v3.png');
  jackJack.scale = 0.2;
  jackJack.layer = 1;
  
  //first ladder
  ladder = new Sprite(150,528,10,505, 'static');
  ladder.addAni('ladder.png')
  ladder.scale = 0.5;
  ladder.layer = 0;
  
  //second ground
  secondGround = new Sprite(280,390,250,25, "static")
  secondGround.shapeColor = 'green';

  //third ground
  thirdGround = new Sprite(685,378,100,25,'static')
  thirdGround.shapeColor = 'green';
  // bridge
  bridge = new Sprite(525,375,329,5, 'static')
  bridge.addAni('bridge.png')
  bridge.scale = 0.7;
  //trampoline
  trampoline = new Sprite(798,619,60, 'static')
  trampoline.addAni('trampoline.png')
  trampoline.scale = 0.3;
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
  // first latter make up go up
  jackJack.collide(ladder, function() {
		jackJack.vel.y += 50;
		
	});
  
  jackJack.collide(trampoline, function() {
		jackJack.vel.y += 70;
		
}


function groundBrown (){
   //brown ground
  fill(117, 71, 39)
  rect(0,650,1650,150);
}

function jackjackMovment(){
  if (kb.pressing('right')) {
    jackJack.x+= 5;
  } else if (kb.pressing('left')) {
    jackJack.vel.x = -5;
  } else if (kb.pressed('up')) {
    jackJack.vel.y = -5;
  }
  else {
    jackJack.vel.x = 0;
  } 
}



function draw() {
  background(94, 230, 230);
  groundBrown();
  jackjackMovment();
  
  

}
