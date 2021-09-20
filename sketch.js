const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour,minutes;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(25);

    if(hour>12){
        text("Time - "+ hour%12 + ":"+ minutes + " PM", 50,50);
        fill(143, 0, 0);
        text("Never stop learning, because Life never stops teaching..", 250,200);

    }else if(hour==0){
        text("Time - 12 AM",50,50);
        fill("black");
        text("Night is a time of rigor, but also of mercy...", 250,200);
    }else{
        text("Time - "+ hour%12 + ":"+ minutes + " AM", 50,50);
        fill(112, 105, 255);
        text("With a new day comes new Strength and new Thoughts!", 250,200);
    }


}

async function getBackgroundImg(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    hour = datetime.slice(11,13);
    minutes = datetime.slice(14,16);

    if(hour>0 && hour<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
}
