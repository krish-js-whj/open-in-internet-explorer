var canvas,isMoving=true;
var music,canvas,surface1,surface2,surface3,surface4,Box,edge;
function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
    music.play()
    //create 4 different surfaces
    surface1=createSprite(100,550,175,50);
    surface2=createSprite(300,550,175,50);
    surface3=createSprite(500,550,175,50);
    surface4=createSprite(700,550,175,50);
    array=["red","blue","green","black"]
    var currentIndex = array.length, tempValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
}
    console.log("array: "+array)
    surface1.shapeColor= array[0]
    surface2.shapeColor= array[1]
    surface3.shapeColor= array[2]
    surface4.shapeColor= array[3]
    //create box sprite and give velocity
    Box=createSprite(random(50,350),250,50,50);
    Box.velocityY=7;
    Box.velocityX=5;
}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    //create edgeSprite
    edge=createEdgeSprites()
    Box.bounceOff(edge)
    //add condition to check if box touching surface and make it box
    if (isMoving==true){
    collision(Box,surface1)
    collision(Box,surface2)
    collision(Box,surface3)
    collision(Box,surface4)
    console.log(Box.velocityX,Box.velocityY)
    }
}
function collision(a,b){
  if  (a.x - b.x <= a.width/2 + b.width/2 
    && b.x - a.x <= b.width/2 + a.width/2 
    && a.y - b.y <= a.height/2 + b.height/2 
    && b.y - a.y <= b.height/2 + a.height/2){   
     if (b.shapeColor=="red"){
        a.velocityY=0;
        a.velocityX=0;
        isMoving=false 
        music.stop()
    } else if (b.shapeColor=="blue"){
        a.velocityY=-(a.velocityY-1)
    } else if (b.shapeColor=="green"){
        a.velocityY=-(a.velocityY+1);
    } else
        a.velocityY=-(a.velocityY);
}
}