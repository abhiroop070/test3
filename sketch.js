const eng=Matter.Engine
const world=Matter.World
const bodies=Matter.Bodies
const con=Matter.Constraint

var eg,wr,bod
var boxes,grd
var b1,b2,b3,b4,b5
var l1,l2,l3,l4
var p1,p2
var bird1
var bgimg
var grd2
var slingshot
var bgr="sprites/bg1.png"
var gamestate="onsling"
function preload() {
  getTime()
  
  
}

function setup() {
  createCanvas(1200,400);
 // createSprite(400, 200, 50, 50);
  eg=eng.create()
  wr=eg.world
 // bod=body.rectangle(200,200,40,50)
 // world.add(wr,bod)
 
 b1=new Box(700,320,70,70)
 b2=new Box(920,320,70,70)
 b3=new Box(700,240,70,70)
 b4=new Box(920,240,70,70)
 b5=new Box(810,160,70,70)

 l1=new Log(810,260,20,300,PI/2)
 l2=new Log(810,180,20,300,PI/2)
 l3=new Log(760,120,20,150,PI/7)
 l4=new Log(870,120,20,150,-PI/7)

 p1=new Pig(810,350,50,50)
 p2=new Pig(810,220,50,50)

bird1=new Birds(200,50,50,50)

 grd=new Ground(600,400,1200,20)
 grd2=new Ground(150,305,300,170)
 slingshot=new Slingshot(bird1.body,{x:200,y:50})
 
 
}

function draw() {
  if(bgr)
  background(bgr);  
  eng.update(eg)
  //rect(bod.position.x,bod.position.y,40,50)
b1.displays()
b2.displays()
b3.displays()
b4.displays()
b5.displays()
grd.displays()
p1.displays()
  p2.displays()
  l1.displays()
  l2.displays()
  l3.displays()
  l4.displays()
  bird1.displays()
  grd2.displays()
  slingshot.displays()
  

  

  
}
function mouseDragged() {
  if(gamestate!=="launch"){
    Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY})



  }
 

}
function mouseReleased() {
  slingshot.fly()
  gamestate="launch"
  
}
function keyPressed(){
  if(keyCode===32){
    bird1.trajectory=[]
    slingshot.attach(bird1.body)
    console.log(gamestate)
  }


}

async function getTime(){
  var res=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var js=await res.json()
  var datetime=js.datetime
  console.log()
  var rr=datetime.slice(11,13)
  var bg
  if(rr>=06 && rr<=19){
    bg="sprites/bg1.png"

  }
  else{bg="sprites/bg2.png"}
  console.log(bgr)

  bgr=loadImage(bg)
 

}