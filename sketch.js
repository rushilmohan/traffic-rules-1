var gameState = 1;
var bg,bgImage;
var canvas;
var car,carImage;
var sign1,sign1img;
var sign2,sign2img;
var sign;
var score;


function preload(){
  bgImage = loadImage("road.png");
  carImage = loadImage("car.png")
  sign1img = loadImage("schoolAhead.jpg");
  sign2img = loadImage("noMotorVehicles.jpg");
}

function setup(){
  canvas = createCanvas(800,600)
  bg = createSprite(400,200,600,400);
  bg.addImage(bgImage);
  bg.scale = 1.3;
  bg.velocityY = 5;

  car = createSprite(390,350,50,50);
  car.addImage(carImage);
  car.scale = 0.2
    
}

function draw(){
  background(0);

  if(gameState === 1){
    textSize(25);
    stroke("black")
    strokeWeight(4)
    textFont("Comic Sans MS");
    fill("white");
    text("Hello, Welcome to Traffic Sign Game",180,200);
    text("Here you will learn some of the rules of driving",140,300);
    text("Press A to continue",290,400)
    car.visible = false;
    bg.visible = false;
  }

  if(keyDown("a")&& gameState === 1){
     gameState = 2;
  }

  if(gameState === 2){
    textSize(25);
    stroke("black")
    strokeWeight(4)
    textFont("Comic Sans MS");
    fill("white");
    text("Rules of the game are as follows :",60,60);
    text(" > Initially you will be given with Rs.10,000",80,140);
    text(" > Rs.2000 will be deducted if traffic signs are not followed",80,200);
    text(" > Rs.2000 will be credited if traffic signs are followed",80,260);
    text(" > Do not press unncessary keys during the game",80,320);
    push();
    textSize(20);
    text(" > You can quit the game whenever you want to by closing the browser,",80,380)
    pop();
    text("Press S to continue",300,540);
    car.visible = false;
    bg.visible = false;
  }

  if(keyDown("S")&& gameState === 2){
    gameState = 3
  }

  if(gameState === 3){
    textSize(25);
    stroke("black")
    strokeWeight(4)
    textFont("Comic Sans MS");
    fill("white");
    text("Please read the following as you will be using these in the game",30,60);
    push();
    textSize(21);
    text("Once you have read all the instructions press on D to start the game",50,540)
    pop();
    car.visible = false;
    bg.visible = false;
  }

  if(keyDown("d") && gameState === 3){
    gameState = 4
  }

  if(gameState === 4){
    car.visible = true;
    bg.visible = true;
  }
  

  if(bg.y > 400){
      bg.y = 210
  }
  
  drawSprites();
}

function schoolAhead(){
  sign1 = createSprite(750,300,50,50);
  sign1.addImage(sign1img);
  sign1.scale = 0.5
 // sign1.velocityY = 5;

}

function noMotorVehicles(){
  
  sign2 = createSprite(50,200,50,50);
  sign2.addImage(sign2img);
  sign2.scale = 0.1
 // sign2.velocityY = 5;;
 //sign2.lifetime = 300;
}

