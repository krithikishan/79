var player, background, help1, help1Image;
var score = 0;

function preload(){
  // tomStartImage = loadAnimation("images/Back.png");
  walkingBackAnimation = loadAnimation("Back.png", "walkingBack2.png", "Back3.png", "walkingBack4.png", "Back5.png", "walkingBack6.png");
  walkingFrontAnimation = loadAnimation("Front.png", "walkingFront2.png", "Front3.png", "walkingFront4.png");
  walkingLeftAnimation = loadAnimation("Left.png", "walkingLeft2.png", "Left3.png", "walkingLeft4.png", "Left5.png", "walkingLeft6.png", "Left7.png", "walkingLeft8.png", "Left9.png", "walkingLeft10.png");
  walkingRightAnimation = loadAnimation("Right.png", "walkingRight2.png", "Right3.png", "walkingRight4.png", "Right5.png", "walkingRight6.png", "Right7.png", "walkingRight8.png", "Right9.png", "walkingRight10.png");

  back = loadImage("images/background.jpg");

  help1Image = loadImage("images/poor.png");
  textImage = loadImage("Help.jpg");
  // jerryImage = loadAnimation("images/jerryOne.png");
  // jerryTeasing = loadAnimation("images/jerryTwo.png", "images/jerryThree.png");
  // jerryEndImage = loadAnimation("images/jerryFour.png");
}

function setup(){
createCanvas(1200, 600);

text = createSprite(100, 300, 50, 50);
text.addImage("text", textImage);

help1 = createSprite(1300, 450, 50, 50);
help1.addImage("help1", help1Image);
help1.scale = 0.3;

player = createSprite(500, 500, 50, 50);
player.addAnimation("walking", walkingBackAnimation);
player.scale = 1.3;

}

function draw(){
  background(back);

  camera.position.x = player.x;
  camera.position.y = displayHeight / 2;

  text.visible = false;

  if(keyWentDown(player.y > 460 && UP_ARROW)){
    player.y -= 20;
    player.addAnimation("walking", walkingBackAnimation);
    player.scale = 1.3;
  }

  if(player.y < 550 && keyWentDown(DOWN_ARROW)){
    player.y += 20;
    player.addAnimation("walking", walkingFrontAnimation);
    player.scale = 0.6;
  }

  if(keyWentDown(LEFT_ARROW)){
    player.x -= 20;
    player.addAnimation("walking", walkingLeftAnimation);
    player.scale = 0.6;
  }

  if(keyWentDown(RIGHT_ARROW)){
    player.x += 20;
    player.addAnimation("walking", walkingRightAnimation);
    player.scale = 0.6;
  }

  if (player.x == 1160 || player.x == 1180 || player.x == 1200){
  text.visible = true;
  text.x = player.x - 300;

  if(mouseX = help1){
  score += 2;
  }

  }

  // console.log(player.x);
  // console.log(mouseX);
  // console.log(mouseY);

drawSprites();

stroke("yellow");
// text("Hello", 600, 100);

}