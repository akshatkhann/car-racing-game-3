var canvas,backgroundimage,allplayers,car1,car2,car3,car4,cars,carimg,carimg2,carimg3,carimg4,trackimg;
var gameState=0;
function preload() {
 
    carimg=loadImage("images/car1.png")
    carimg2=loadImage("images/car2.png")
    carimg3=loadImage("images/car3.png")

    carimg4=loadImage("images/car4.png")
    trackimg=loadImage("images/track.jpg")
}





var playerCount,database,form,game,player;
function  setup(){
canvas=createCanvas(displayWidth,displayHeight)
database=firebase.database()
game = new Game();
game.getstate();
game.start();

}    





function  draw(){
if(playerCount===4){
game.update(1)

}
if(gameState===1){
clear()
game.play()

}

if(gameState===2){

game.end()

}
}
    






