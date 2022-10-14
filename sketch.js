


function setup() {
  createCanvas(1650, 800);
  jackJack = loadImage('jack jack v3.png');
  
  
}


function drawGround (){
  //brown ground
  fill(117, 71, 39)
  noStroke();
  rect(0,650,1650,150);
  //green ground
  fill(61, 238, 37);
  rect(0,650,1650,50);
  
}

function draw() {
  background(94, 230, 230);
  drawGround();
  // scale(.3);
  
  let x = 100
  let y = 100
  image(jackJack, x, y);
  if (kb.pressing('a')) {
    x+= 5;
  } /*else if (kb.pressing('d')) {
    jackJack.vel.x = 5;
  } else {
    jackJack.vel.x = 0;
  } 
  */
  

}
