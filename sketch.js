var thickness, wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor=color(255,255,255);

  wall = createSprite(1200, 200,thickness, height/2);
  wall.shapeColor=color(80,80,80);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,80);
}

function draw() {
  background("black"); 

 bullet.velocityX = speed;

  if(hasCollided(bullet,wall)){
      bullet.velocityX = 0;

      var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
      console.log("Damage is   "+damage)

      if(damage>10) {
        bullet.shapeColor=color(255,0,0);
      }
      if(damage<=10) {
        bullet.shapeColor=color(0,255,0);
      }

  }

  
  drawSprites();
}

function hasCollided(lbullet,lwall){
    var bulletrightEdge = lbullet.x + lbullet.width;
    var wallleftEdge = lwall.x;

    if(bulletrightEdge>=wallleftEdge){
      return true;
    }
      return false;
}