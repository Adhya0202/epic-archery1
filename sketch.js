const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
cBase = new ComputerBase(1100,random(450,height-300),90,190);
pBase = new PlayerBase(300,random(450,height-300),90,190);
player = new Player(285, pBase.body.position.y - 153, 50, 180);
computer = new Player(1085, cBase.body.position.y - 153, 50, 180);
 }

function draw() {

  background(180);

  Engine.update(engine);
 cBase.width = 170;
 pBase.width = 170;
 player.width = 100;
 computer.width = 100;

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
cBase.display();
pBase.display();
   //display Player and computerplayer
player.display();
computer.display();
}
