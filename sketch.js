
let jackJack;
 /** This function loads resources that will be used later. */
 function preload() {
  
  //makes jackjack
  jackJack = new Sprite(100,300);
  jackJack.addAni('jack jack v3.png');
  jackJack.scale = 0.2;
  jackJack.layer = 1;
  console.log(jackJack.Height)
  
}

function setup() {
  createCanvas(1650, 800);
  
  noStroke();
  let floor;
  floor = new Sprite(825,665,1650,30, 'static');
  floor.shapeColor = 'green';
  floor.layer = 0;
  world.gravity.y=10;
  
}


function drawGround (){
   //brown ground
  fill(117, 71, 39)
  rect(0,650,1650,150);
}

function draw() {
  background(94, 230, 230);
  drawGround();
  
  if (kb.pressing('right')) {
    jackJack.x+= 5;
  } else if (kb.pressing('left')) {
    jackJack.vel.x = -5;
  } else {
    jackJack.vel.x = 0;
  } 
  
  

}
