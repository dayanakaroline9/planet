let detailY;

var sol,
  terra,
  marte,
  jupiter,
  neturno,
  plutao,
  urano,
  venus,
  saturno,
  mercurio,
  lua,
  nave;

posiX=100;
posiY=200;
posiZ=250;

function preload() {
  sol = loadImage('sol.jpg')
  terra = loadImage('terra.jpg')
  marte = loadImage('marte.jpg')
  jupiter = loadImage('jupiter.jpg')
  neturno = loadImage('neturno.jpg')
  plutao = loadImage('plutao.jpg')
  urano = loadImage('urano.jpg')
  venus = loadImage('venus.jpg')
  saturno = loadImage('saturno.jpg')
  mercurio = loadImage('mercurio.jpg')
  lua = loadImage('lua.jpg')
  nave = loadImage('nave.png')
}

function setup() {
  createCanvas(1920, 1080, WEBGL);

}

function draw() {
  background(20);
  
  normalMaterial();
  //sol 
  translate(-500, 0, 0);
  push();
  rotateY(millis() / 10000);
  texture(sol);
  sphere(80,100);
  pop();
  
    
  //mercurio
  translate(-100, 0, 0);
  push()
  rotateY(millis()/10000);
  texture(mercurio);
  sphere(5, 40);
  pop()

  //venus
  translate(50, 0, 0);
  push()
  texture(venus);
  sphere(10, 40);
  pop()
  
  //Terra
  translate(70, 0, 0);
  push()
  texture(terra);
  sphere(15, 30);
   //lua
  translate(50, 0, 0);
  texture(lua);
  rotateY(millis()/1000)
  sphere(2, 30);
  pop()

  //nave
  translate(posiX,posiY,posiZ);
  push();
  texture(nave);
  plane(500,250);
  pop();
  
  //controle da nave
  
  if (keyIsDown(LEFT_ARROW)) {
    posiX -= 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    posiX += 10;
  }
  if (keyIsDown(UP_ARROW)) {
    posiZ -= 10;
    posiY -=10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    posiZ += 10;
    posiY +=10;
  }
  
  
  
 
}
