var database;
var player,game,playerCount;
var gameState=0;



function setup(){
  database = firebase.database();
  
  createCanvas(500,500);
  game=new game();
  game.getState();
  game.start();

  
}

function draw(){
  background("white");
  
   
  
}

