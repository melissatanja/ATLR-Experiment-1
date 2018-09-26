let gifLength = 180;
let canvas;

//72 things in them
var xpos = [];
var zpos = [];
var ypos = 50;
var steps = 8;

var w = 800;
var h = 800;

var m;

var r;
var g;
var b;

var x = 34;
var yht = [-16, -19, -21, -24, -24, -28, -26, -22];
var yhb = [6, 6, 1, 3, 3, 1, 3, 6];
var z = 6;

var colours = [];
// var c = new colours;

var noiseVal;
var noiseScale=0.02;
var bgx;
var bgy;

function setup(){
	var p5Canvas = createCanvas(w, h, WEBGL);
	canvas = p5Canvas.canvas;

	sky = createGraphics(w, h);
	// sky.background(255, 10);

	for(i = 0; i < 101; i++){

	colours.push(floor(random(255)));

	}
}

function draw(){

	// if(frameCount === 30){
	// 	capturer.start();
	// }

	background(255);

	bg();

	// push();

	// stroke(0);
	// strokeWeight(5);
	// line(-500, 0, 0, 500, 0, 0);
	// line(0, -500, 0, 0, 500, 0);
	// line(0, 0, -500, 0, 0, 500);

	// pop();

	// translate(0, 0, 300);
	scale(0.5, 0.5, 0.5);

	orbitControl();

	ortho(w/2, -w/2, -h/2, h/2, 0);

	push();
	translate(0, 0, 300);
	snakes();
	pop();

	ortho(-w/2, w/2, h/2, -h/2, 0);

	push();
	translate(0, -105, -400);
	rotateY(PI/2);
	texture(sky);
	sphere(275);
	rotateY(-PI/2);
	translate(0, 105, 400);

	// ortho(w/2, -w/2, -h/2, h/2, 0);

	// snakes();

	// if(frameCount < gifLength){
	// 	capturer.capture(canvas);
	// } else if(frameCount === gifLength){
	// 	capturer.stop();
	// 	capturer.save();
	// }

	// print(frameCount);
}

function snakes(){

	push();

	scale(2, 2, 2);

	rotateX(-PI/6);

	rotateY(frameCount/20);

	//to origin
	translate(-240, 50, 55);

	stroke(255);
	strokeWeight(0.5);

	rotateY(PI/2);
	//to 2nd quad touching xaxis and zaxis
	translate(10, 0, 220); 

	//to 3rd/4th quad, centered on zaxis
	translate(-195, 0, -25);

	snake();

	rotateY(PI);

	translate(-475, 0, -90);

	snake();

	pop();
}

function colour(){

	// frameRate(0.5);

	r = colours[floor(random(100))];
	g = colours[floor(random(100))];
	b = colours[floor(random(100))];

	// frameRate(30);
}

function snake(){

	spine();

	triangles1();  

	translate(20, 0, 30);

	rotateY(PI/5);
	head();
	rotateY(-PI/5); 

	translate(85, 0, -260); 

	rotateY(-PI/5);
	tail();
	rotateY(PI/5);

	translate(-105, 0, 230);
}


// https://editor.p5js.org/melissatanja/sketches/r16QmqAOm
// my visualization using web editor

// https://processing.org/reference/bezierPoint_.html
// how to plot coordinates of a bezier curve

// https://p5js.org/reference/#/p5/orbitControl
// how to use orbit control

// https://p5js.org/reference/#/p5/bezier
// how to plot a bezier

// https://discourse.processing.org/t/how-to-save-your-p5-js-sketch-as-a-gif-using-ccapture-js/1264
// https://github.com/spite/ccapture.js/issues/69
// saving as a .gif file

// https://p5js.org/examples/math-noise2d.html
// 2D noise background
