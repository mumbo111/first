function setup() {
	createCanvas(500, 500);
	background(255,255,255);
	strokeWeight(1)
}

var x=60//the green line 1
var y=150
var i;
var z=10
function draw() {

	line(460,150,360,250)//yellow dots line
	line(460,150,360,50)
	line(360,50,260,150)
	line(260,150,160,50)
	line(160,50,60,150)
	line(60,150,160,250)
	line(160,250,60,350)
	line(60,350,160,450)
	line(160,450,260,350)
	line(260,350,360,450)
	line(360,450,460,350)
	line(460,350,360,250)
	
	line(60,50,60,450)//all the outside lines
	line(60,450,460,450)
	line(460,450,460,50)
	line(460,50,60,50)
	
	line(60,250,260,50)//the red dots lines
	line(260,50,460,250)
	line(460,250,260,450)
	line(260,450,60,250)
	
	line(360,350,160,150)//green dots lines
	line(360,150,160,350)
	
	line(260,250,160,250)//the middle lines
	line(260,250,260,350)
	line(260,250,360,250)
	line(260,250,260,150)
	
	
	fill(0,255,0)//green dots
	circle(260,250,z)
	circle(360,350,z)
	circle(360,150,z)
	circle(160,350,z)
	circle(160,150,z)
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	fill(255,255,0)
	stroke(0,0,0)
	for(i =0; i<5; i=i+1){
		circle(x,y,z)
		x=x+100
		y=y+100
	}

	x=160
	y=50
stroke(0,0,0)
	for(i =0; i<4; i=i+1){//the green line 2
		circle(x,y,z)
		x=x+100
		y=y+100
	}
	
	x=360
	y=50
stroke(0,0,0)
	for(i =0; i<4; i=i+1){//the green line 2
		circle(x,y,z)
		x=x-100
		y=y+100
	}
	
	x=460
	y=150
stroke(0,0,0)
	for(i =0; i<4; i=i+1){//the green line 2
		circle(x,y,z)
		x=x-100
		y=y+100
	}
	
	fill(0,0,255)//all the outside circles
	
	circle(60,50,z)
	
	fill(255,0,0)
	circle(260,50,z)

	fill(0,0,255)
	circle(460,50,z)
	
	fill(255,0,0)
	circle(460,250,z)
	
	fill(0,0,255)
	circle(460,450,z)
	
	fill(255,0,0)
	circle(260,450,z)
	
	fill(0,0,255)
	circle(60,450,z)
	
	fill(255,0,0)
	circle(60,250,z)
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	noLoop()

}