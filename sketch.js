const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1 , box2, box3 , box4 , box5 , box6,box7,box8,box9,box10,box11,box12 , box13 , box14 , box15;
var ground;
var ball;
var rope;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,50)
    box1 = new BoxClass(900,200,40,50)
    box2 = new BoxClass(800,200,40,50)
    box3 = new BoxClass(700,200,40,50)
    box4 = new BoxClass(900,150,40,50)
    box5 = new BoxClass(800,150,40,50)
    box6 = new BoxClass(700,150 ,40,50)
    box7 = new BoxClass(900,100,40,50)
    box8 = new BoxClass(800,100,40,50)
    box9 = new BoxClass(700,100 ,40,50)
    box10 = new BoxClass(900,50,40,50)
    box11 = new BoxClass(800,50,40,50)
    box12 = new BoxClass(700,50 ,40,50)

    ball = new BallClass(200,200,40,40)

    rope = new Rope(ball.body,{x:500,y:100})

            

}

function draw(){
 
    background("cyan")
    Engine.update(engine);
    //strokeWeight(4);
   
    //log6.display();
   
    ground.display(); 
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    ball.display();

    rope.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}



