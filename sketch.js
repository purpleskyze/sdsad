const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var comBase, complayer, playerbase, player

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
comBase = new Computerbase(300,400,180,150)
complayer = new Computerplayer(300,270,180,150)
playerbase = new Playerbase(1000,400,180,150)
player = new Player(1000,280,120,150)
 }

function draw() {

  background(62,212,152);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   comBase.display()
   complayer.display()
   playerbase.display()
   player.display()
   //display Player and computerplayer


}
