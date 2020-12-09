const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;

var rain;

function preload(){
    
}

function setup(){
   createCanvas(200,800)
   rain = new droplet();
}

function draw()
{
    background(200,30,255)
    
    rain.display();
}   

