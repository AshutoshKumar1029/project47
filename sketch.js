var background2, backgroundimage;
var cannon, cannonimage;
var bullet, bulletimage, bulletgroup;
var maincircle, circle1, circle2, circle3, circle4, circle5, circle6, edges;
var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10;
var score1, score2, score3, score4, score5, score6, score7, score8, score9, score10, mainScore;
var ball1V, ball2V, ball3V, ball4V, ball5V, ball6V, ball6V, ball7V, ball8V, ball9V, ball10V;
var gameState;
var youWon,youwon,youLose,youlose,Replay,replay; 
var nameBox, Name, startB,resetB;
var collideS, enterS, loseS, blastS,clickS,winS

function preload() {
  cannonimage = loadImage("cannon.png");
  bulletimage = loadImage("bullet.png");
  backgroundimage = loadImage("background.jpg");
  circle1 = loadImage("circle1.png");
  circle2 = loadImage("circle2.png");
  circle3 = loadImage("circle3.png");
  circle4 = loadImage("circle4.png");
  circle5 = loadImage("circle5.png");
  circle6 = loadImage("circle6.png");
  youWon = loadImage("won.png");
  youLose = loadImage("lose.png");
  Replay = loadImage("replay.jpg")
  collideS = loadSound("sound/collide.mp3")
  enterS = loadSound("sound/enter.mp3")
  loseS = loadSound("sound/end.mp3")
  clickS = loadSound("sound/click.mp3");
  winS = loadSound("sound/win.mp3")
}

function setup() {
  createCanvas(400, 600);

  background2 = createSprite(200, 300);
  background2.addImage("fbgbj", backgroundimage);
  background2.scale = 1;

  cannon = createSprite(200, 550, 50, 50);
  cannon.addImage("shxc", cannonimage);
  cannon.scale = 0.26;
  cannon.y = 540;
  cannon.debug = false;
  cannon.setCollider("rectangle", 0, 0, 230, 470);
  bulletgroup = new Group();
  edges = createEdgeSprites();

  ball1 = createSprite(-50, 100, 30, 30);
  ball1.scale = 0.13;
  ball1.addImage(circle1);
  ball1.setCollider("circle",0,0,200)
  score1 = Math.round(random(200, 100));
  ball1V = "false";

  ball2 = createSprite(520, 100, 30, 30);
  ball2.scale = 0.13;
  ball2.addImage(circle2);
  ball2.setCollider("circle",0,0,200)
  score2 = Math.round(random(200, 100));
  ball2V = "false";

  ball3 = createSprite(-50, 100, 30, 30);
  ball3.scale = 0.13;
  ball3.addImage(circle3);
  ball3.setCollider("circle",0,0,200)
  score3 = Math.round(random(300, 200));
  ball3V = "false";

  ball4 = createSprite(520, 100, 30, 30);
  ball4.scale = 0.13;
  ball4.addImage(circle4);
  ball4.setCollider("circle",0,0,200)
  score4 = Math.round(random(400, 300));
  ball4V = "false";

  ball5 = createSprite(-50, 100, 30, 30);
  ball5.scale = 0.13;
  ball5.addImage(circle5);
  ball5.setCollider("circle",0,0,200)
  score5 = Math.round(random(500, 400));
  ball5V = "false";

  ball6 = createSprite(520, 100, 30, 30);
  ball6.scale = 0.13;
  ball6.addImage(circle6);
  ball6.setCollider("circle",0,0,200)
  score6 = Math.round(random(600, 500));
  ball6V = "false";
  
  ball7 = createSprite(-50, 100, 30, 30);
  ball7.scale = 0.13;
  ball7.addImage(circle1);
  ball7.setCollider("circle",0,0,200)
  score7 = Math.round(random(600, 500));
  ball7V = "false";
  
  ball8 = createSprite(520, 100, 30, 30);
  ball8.scale = 0.13;
  ball8.addImage(circle2);
  ball8.setCollider("circle",0,0,200)
  score8 = Math.round(random(600, 500));
  ball8V = "false";
  
  ball9 = createSprite(-50, 100, 30, 30);
  ball9.scale = 0.13;
  ball9.addImage(circle6);
  ball9.setCollider("circle",0,0,200)
  score9 = Math.round(random(600, 500));
  ball9V = "false";
  
  ball10 = createSprite(520, 100, 30, 30);
  ball10.scale = 0.13;
  ball10.addImage(circle4);
  ball10.setCollider("circle",0,0,200)
  score10 = Math.round(random(600, 500));
  ball10V = "false";
  
  replay = createButton(' REPLAY ')
  replay.position(150,390);
  replay.hide();
  replay.style('color', 'black')
  replay.mousePressed(ReplayF)

  resetB = createButton(' RESET ')
  resetB.position(150,430);
  resetB.hide();
  resetB.style('color', 'black')
  resetB.mousePressed(ResetF)

  nameBox =  createInput("").attribute("placeholder", "Name");
  nameBox.position(110,280);
  nameBox.hide();

  startB = createButton(' START ')
  startB.position(155,330);
  startB.hide();
  startB.mousePressed(storeName);

  mainScore = 0;

  gameState = 0;
}

function draw() {
  background("black");
  if(gameState===0){
    nameBox.show();
    startB.show();
  }
  if (gameState=== 1 ){

    if (keyDown("space")){
      clickS.play();
      gameState = 2;
    }
  }
  if (gameState === 2) {
    cannon.x = mouseX;

    if (keyDown("space") || mousePressedOver(cannon)) {
      firebullet();
    }

    if (ball1V === "false") {
      ball1.x = 10;
      ball1.velocityX = random(-4, 4);
      ball1.velocityY = random(-4, 4);
      ball1V = "true";
      enterS.play();
    }

    if (
      ball2V === "false" &&
      ball1V === "true" &&
      frameCount % 300 === 0&&
      mainScore>2
    ) {
      ball2.x = 390;
      ball2.velocityX = random(-4, 4);
      ball2.velocityY = random(-4, 4);
      ball2V = "true";
      enterS.play();
    }

    if (
      ball3V === "false" &&
      ball2V === "true" &&
      frameCount % 100 === 0&&
      mainScore>190
      
    ) {
      ball3.x = 10;
      ball3.velocityX = random(-4, 4);
      ball3.velocityY = random(-4, 4);
      ball3V = "true";
      enterS.play();
    }

    if (
      ball4V === "false" &&
      ball3V === "true" &&
      frameCount % 100 === 0&&
      mainScore>390
    ) {
      ball4.x = 390;
      ball4.velocityX = random(-4, 4);
      ball4.velocityY = random(-4, 4);
      ball4V = "true";
      enterS.play();
    }

    if (
      ball5V === "false" &&
      ball4V === "true" &&
      frameCount % 100 === 0&&
      mainScore>699
    ) {
      ball5.x = 10;
      ball5.velocityX = random(-4, 4);
      ball5.velocityY = random(-4, 4);
      ball5V = "true";
      enterS.play();
    }

    if (
      ball6V === "false" &&
      ball5V === "true" &&
      frameCount % 400 === 0&&
      mainScore>999
    ) {
      ball6.x = 390;
      ball6.velocityX = random(-4, 4);
      ball6.velocityY = random(-4, 4);
      ball6V = "true";
      enterS.play();
    }
/////////////////
    if (
      ball7V === "false" &&
      ball6V === "true" &&
      frameCount % 600 === 0&&
      mainScore>1400
    ) {
      ball7.x = 10;
      ball7.velocityX = random(-5, 5);
      ball7.velocityY = random(-5,5);
      ball7V = "true";
      enterS.play();
    }

    if (
      ball8V === "false" &&
      ball7V === "true" &&
      frameCount % 700 === 0&&
      mainScore>1900
    ) {
      ball8.x = 390;
      ball8.velocityX = random(-5, 5);
      ball8.velocityY = random(-5,5);
      ball8V = "true";
      enterS.play();
    }

    if (
      ball9V === "false" &&
      ball8V === "true" &&
      frameCount % 350 === 0&&
      mainScore>2400
    ) {
      ball9.x = 10;
      ball9.velocityX =random(-5, 5);
      ball9.velocityY = random(-5, 5);
      ball9V = "true";
      enterS.play();
    }

    if (
      ball10V === "false" &&
      ball9V === "true" &&
      frameCount % 700 === 0&&
      mainScore>2700
    ) {
      ball10.x = 390;
      ball10.velocityX = random(-5, 5);
      ball10.velocityY = random(-5, 5);
      ball10V = "true";
      enterS.play();
    }

    if (ball1.isTouching(bulletgroup) && score1 > 0) {
      score1 = score1 - 3;
      mainScore = mainScore + 3;
      bulletgroup[0].destroy();
      collideS.play();
      collideS.setVolume(0.1)
    }
    if (ball2.isTouching(bulletgroup) && score2 > 0) {
      score2 = score2 - 3;
      mainScore = mainScore + 3;
      bulletgroup[0].destroy();
      collideS.play();
      collideS.setVolume(0.1)
    }
    if (ball3.isTouching(bulletgroup) && score3 > 0) {
      score3 = score3 - 3;
      mainScore = mainScore + 3;
      bulletgroup[0].destroy();
      collideS.play();
      collideS.setVolume(0.1)
    }
    if (ball4.isTouching(bulletgroup) && score4 > 0) {
      score4 = score4 - 3;
      mainScore = mainScore + 3;
      bulletgroup[0].destroy();
      collideS.play();
      collideS.setVolume(0.1)
    }
    if (ball5.isTouching(bulletgroup) && score5 > 0) {
      score5 = score5 -3;
      mainScore = mainScore + 3;
      bulletgroup[0].destroy();
      collideS.play();
      collideS.setVolume(0.1)
    }
    if (ball6.isTouching(bulletgroup) && score6 > 0) {
      score6 = score6 - 3;
      mainScore = mainScore + 3;
      bulletgroup[0].destroy();
      collideS.play();
      collideS.setVolume(0.1)
    }
    if (ball7.isTouching(bulletgroup) && score7 > 0) {
      score7 = score7 - 3;
      mainScore = mainScore + 3;
      bulletgroup[0].destroy();
      collideS.play();
      collideS.setVolume(0.1)
    }
    if (ball8.isTouching(bulletgroup) && score8 > 0) {
      score8 = score8 - 3;
      mainScore = mainScore + 3;
      bulletgroup[0].destroy();
      collideS.play();
      collideS.setVolume(0.1)
    }
    if (ball9.isTouching(bulletgroup) && score9 > 0) {
      score9 = score9 - 3;
      mainScore = mainScore + 3;
      bulletgroup[0].destroy();
      collideS.play();
      collideS.setVolume(0.1)
    }
    if (ball10.isTouching(bulletgroup) && score10 > 0) {
      score10 = score10 - 3;
      mainScore = mainScore + 3;
      bulletgroup[0].destroy();
      collideS.play();
      collideS.setVolume(0.1)
    }

    }
    if (score1 <= 0) {
      ball1.velocityX = 0;
      ball1.velocityY = 0;
      ball1.x = 540;
      ball1.y = 50;
    }
    if (score2 <= 0) {
      ball2.velocityX = 0;
      ball2.velocityY = 0;
      ball2.x = 540;
      ball2.y = 50;
    }
    if (score3 <= 0) {
      ball3.velocityX = 0;
      ball3.velocityY = 0;
      ball3.x = 540;
      ball3.y = 50;
    }
    if (score4 <= 0) {
      ball4.velocityX = 0;
      ball4.velocityY = 0;
      ball4.x = 540;
      ball4.y = 50;
    }
    if (score5 <= 0) {
      ball5.velocityX = 0;
      ball5.velocityY = 0;
      ball5.x = 540;
      ball5.y = 50;
    }
    if (score6 <= 0) {
      ball6.velocityX = 0;
      ball6.velocityY = 0;
      ball6.x = 540;
      ball6.y = 50;
    }
    if (score7 <= 0) {
      ball7.velocityX = 0;
      ball7.velocityY = 0;
      ball7.x = 540;
      ball7.y = 50;
    }
    if (score8 <= 0) {
      ball8.velocityX = 0;
      ball8.velocityY = 0;
      ball8.x = 540;
      ball8.y = 50;
    }
    if (score9 <= 0) {
      ball9.velocityX = 0;
      ball9.velocityY = 0;
      ball9.x = 540;
      ball9.y = 50;
    }
    if (score10 <= 0) {
      ball10.velocityX = 0;
      ball10.velocityY = 0;
      ball10.x = 540;
      ball10.y = 50;
    }
  
    //////////////////////////////////////////
 if (
    ball1.isTouching(cannon) ||
    ball2.isTouching(cannon) ||
    ball3.isTouching(cannon) ||
    ball4.isTouching(cannon) ||
    ball5.isTouching(cannon) ||
    ball6.isTouching(cannon) ||
    ball7.isTouching(cannon) ||
    ball8.isTouching(cannon) ||
    ball9.isTouching(cannon) ||
    ball10.isTouching(cannon) 
  ) {
    gameState = 3;
loseS.play();
    ball1.velocityX = 0;
    ball1.velocityY = 0;
    ball1.x = 540;
    ball1.y = 50;

    ball2.velocityX = 0;
    ball2.velocityY = 0;
    ball2.x = 540;
    ball2.y = 50;

    ball3.velocityX = 0;
    ball3.velocityY = 0;
    ball3.x = 540;
    ball3.y = 50;

    ball4.velocityX = 0;
    ball4.velocityY = 0;
    ball4.x = 540;
    ball4.y = 50;

    ball5.velocityX = 0;
    ball5.velocityY = 0;
    ball5.x = 540;
    ball5.y = 50;

    ball6.velocityX = 0;
    ball6.velocityY = 0;
    ball6.x = 540;
    ball6.y = 50;

    ball7.velocityX = 0;
    ball7.velocityY = 0;
    ball7.x = 540;
    ball7.y = 50;

    ball8.velocityX = 0;
    ball8.velocityY = 0;
    ball8.x = 540;
    ball8.y = 50;

    ball9.velocityX = 0;
    ball9.velocityY = 0;
    ball9.x = 540;
    ball9.y = 50;

    ball10.velocityX = 0;
    ball10.velocityY = 0;
    ball10.x = 540;
    ball10.y = 50;
  }
  
  

 if (gameState ===3){
   // youlose.visible = true;
   replay.show()
   resetB.show();
   console.log("..")
  }

  if (score1<=0&& score2<=0&& score3<=0&& score4<=0&& score5<=0&& score6<=0&&
    score7<=0&& score8<=0&& score9<=0&& score10<=0&& gameState==2){
    gameState = 4
    var a = 1
    if (a ===1){
      winS.play();
      winS.setVolume(0.8)
      a= 2
    }
    
  }
  if(gameState === 4){
  //  youwon.visible = true;
  console.log("...")
    replay.show();
    resetB.show();
  }
  
  drawSprites();

  ball1.bounceOff(edges);
  ball2.bounceOff(edges);
  ball3.bounceOff(edges);
  ball4.bounceOff(edges);
  ball5.bounceOff(edges);
  ball6.bounceOff(edges);
  ball7.bounceOff(edges);
  ball8.bounceOff(edges);
  ball9.bounceOff(edges);
  ball10.bounceOff(edges);

  textFont("Arial Black")
  fill("black");
  textSize(16);
  strokeWeight(3);
  stroke("white");
  text(Math.round(score1), ball1.x - 15, ball1.y + 5);
  text(Math.round(score2), ball2.x - 15, ball2.y + 5);
  text(Math.round(score3), ball3.x - 15, ball3.y + 5);
  text(Math.round(score4), ball4.x - 15, ball4.y + 5);
  text(Math.round(score5), ball5.x - 15, ball5.y + 5);
  text(Math.round(score6), ball6.x - 15, ball6.y + 5);
  text(Math.round(score7), ball7.x - 15, ball7.y + 5);
  text(Math.round(score8), ball8.x - 15, ball8.y + 5);
  text(Math.round(score9), ball9.x - 15, ball9.y + 5);
  text(Math.round(score10), ball10.x - 15, ball10.y + 5);

  if(gameState ===0||gameState ===1){
    textSize(60)
    textFont("Cooper Black")
    stroke("black")
    strokeWeight(10)
    fill("lime")
    text ("CRAZY",50,100)
    fill("yellow")
    text("CANNON",75,160)
  }

if(gameState === 2){
  textFont("Cooper Black")
  textSize(25);
  fill("yellow");
  stroke("black");
  strokeWeight(7);
  text("SCORE : " + Math.round(mainScore), 135, 30);
}

  textSize(30)
  strokeWeight(8)
  fill("cyan")
  stroke("black")
  if (gameState ===1){
    text("PRESS SPACE",90,330);
    text("TO START",110,370)
  }

  textSize(50)
  if(gameState===3){
    fill("red")
    text("YOU LOSE",70,100)
    fill("cyan")
    textSize(30)
    text("Player's Name: ",70,200)
    fill("lime")
    text(Name,70,250)
    fill("yellow")
    text("Your Score: "+mainScore,70,350)
    
  }
  textSize(50)
  if(gameState===4){
    fill("red")
    text("YOU WON",70,100)
    fill("cyan")
    textSize(30)
    text("Player's Name: ",70,200)
    fill("lime")
    text(Name,70,250)
    fill("yellow")
    text("Your Score: "+mainScore,70,350)
  }

}

function firebullet() {
  if (frameCount % 2 === 0) {
    bullet = createSprite(50, 480);
    bullet.addImage("dsad", bulletimage);
    bullet.scale = 0.085;
    bullet.velocityY = -6;
    bullet.x = mouseX;
    bullet.depth = 1;
    bullet.debug = false;
    bullet.lifetime = 75;
    bullet.setCollider("rectangle", 0, 0, 220, 50);
    bulletgroup.add(bullet);
  }
}

function ReplayF(){
  if(gameState === 3 || gameState ===4){
    gameState = 1;
    mainScore = 0;
  replay.hide();
  resetB.hide();
  clickS.play();
  score1 = 0 
  score1 = Math.round(random(200, 100))
  score2 = 0
  score2 = Math.round(random(200, 100));
  score3 = 0 
  score3 = Math.round(random(300, 200));
  score4 = 0
  score4 = Math.round(random(400, 300));
  score5 = 0 
  score5 = Math.round(random(500, 400));
  score6 = 0
  score6 = Math.round(random(600, 500));
  score7 = 0 
  score7 = Math.round(random(500, 600))
  score8 = 0
  score8 = Math.round(random(500, 600));
  score9 = 0 
  score9 = Math.round(random(500, 600));
  score10 = 0
  score10 = Math.round(random(500, 600));
  ball1V = "false"
  ball2V = "false"
  ball3V = "false"
  ball4V = "false"
  ball5V = "false"
  ball6V = "false"
  ball7V = "false"
  ball8V = "false"
  ball9V = "false"
  ball10V = "false"

  }
}

function storeName(){
  Name = nameBox.value();
  clickS.play();
  console.log(Name);
  startB.hide();
  nameBox.hide();
gameState =1
}

function ResetF(){
  if(gameState === 3 || gameState ===4){
  gameState = 0;
  mainScore = 0;
  replay.hide();
  resetB.hide();
  clickS.play();
  score1 = 0 
  score1 = Math.round(random(200, 100))
  score2 = 0
  score2 = Math.round(random(200, 100));
  score3 = 0 
  score3 = Math.round(random(300, 200));
  score4 = 0
  score4 = Math.round(random(400, 300));
  score5 = 0 
  score5 = Math.round(random(500, 400));
  score6 = 0
  score6 = Math.round(random(600, 500));
  score7 = 0 
  score7 = Math.round(random(500, 600))
  score8 = 0
  score8 = Math.round(random(500, 600));
  score9 = 0 
  score9 = Math.round(random(500, 600));
  score10 = 0
  score10 = Math.round(random(500, 600));
  ball1V = "false"
  ball2V = "false"
  ball3V = "false"
  ball4V = "false"
  ball5V = "false"
  ball6V = "false"
  ball7V = "false"
  ball8V = "false"
  ball9V = "false"
  ball10V = "false"
  }
}