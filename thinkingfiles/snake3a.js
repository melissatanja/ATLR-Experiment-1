let gifLength = 180;
let canvas;

var capturer;

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

	// frameRate(10);

	sky = createGraphics(w, h);
	// sky.background(255, 10);

	stars = createGraphics(w, h, WEBGL);

	for(i = 0; i < 101; i++){

	colours.push(floor(random(255)));

	}

	capturer = new CCapture( {
	  framerate: 60,
	  format: 'gif',
	  worksPath: './',
	  verbose: true
	} );

	capturer.start();
}

function draw(){
	// print(frameCount);

	background(0);

	bg2();

	// showStars();

	// push();

	// stroke(0);
	// strokeWeight(5);
	// line(-500, 0, 0, 500, 0, 0);
	// line(0, -500, 0, 0, 500, 0);
	// line(0, 0, -500, 0, 0, 500);

	// pop();

	// translate(0, 0, 300);

	scale(0.5, 0.5, 0.5);
	translate(0, -50, 0);

	orbitControl();

	ortho(w/2, -w/2, -h/2, h/2, 0);

	push();
	translate(0, 0, 300);
	snakes();
	pop();

	push();
	translate(0, 30, -400);
	rotateY(PI/2);
	texture(sky);
	sphere(265);
	rotateY(-PI/2);
	translate(0, -30, 400);

	if(frameCount < 60){
		capturer.capture(canvas);
	}else if(frameCount === 60){
		capturer.stop();
	}

	if(frameCount === 61){
		capturer.save();
	}
}

function snakes(){

	push();

	scale(2, 2, 2);

	rotateX(-PI/6);

	rotateY(frameCount/30);

	//to origin
	translate(-240, 50, 55);

	stroke(255);
	strokeWeight(0.5);

	rotateY(PI/2);
	//to 2nd quad touching xaxis and zaxis
	translate(10, 0, 220); 

	//to 3rd/4th quad, centered on zaxis
	translate(-195, 0, -35);

	snake();

	rotateY(PI);

	translate(-475, 0, -100);

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

function showStars(){

	for(xl = 0; xl < w; xl += 5){
		for(yl = 0; yl < h; yl =+ 10){
			stars.noFill();
			stars.stroke(255, 255, 204);
			stars.strokeWeight(0.25);
			line(xl, yl, xl * 1.5, yl * 1.5);
			stars.stroke(230, 255, 255);
			line(xl, yl, xl * 1.5, yl * 1.5);
		}
	}	
}

function star(){

	spine();

	//snake width
	var sw = 1;
	//last snake width (before width stops increasing)
	var lsw = 24;
	//snake height
	var sh = 1;
	//last snake height (before snake height stops increasing)
	var lsh = 24;
	//bottom height
	var bh = 0.3;
	//last bottom height
	var lbh = 7.2;

	for(var i = 10; i < 50; i += 2){

		beginShape();
		vertex(xpos[i + 1] + lsw, ypos, zpos[i + 1]);
		vertex(xpos[i + 2], ypos - lsh, zpos[i + 2]);
		vertex(xpos[i + 3] + lsw, ypos, zpos[i + 3]);
		endShape(CLOSE);

		beginShape();
		vertex(xpos[i + 1] + lsw, ypos, zpos[i + 1]);
		vertex(xpos[i + 2], ypos + lbh, zpos[i + 2]);
		vertex(xpos[i + 3] + lsw, ypos, zpos[i + 3]);
		endShape(CLOSE);

		beginShape();
		vertex(xpos[i + 3] + lsw, ypos, zpos[i + 3]);
		vertex(xpos[i + 2], ypos - lsh, zpos[i + 2]);
		vertex(xpos[i + 4], ypos - lsh, zpos[i + 4]);
		endShape(CLOSE);

		beginShape();
		vertex(xpos[i + 3] + lsw, ypos, zpos[i + 3]);
		vertex(xpos[i + 2], ypos + lbh, zpos[i + 2]);
		vertex(xpos[i + 4], ypos + lbh, zpos[i + 4]);
		endShape(CLOSE);

		beginShape();
		vertex(xpos[i + 1] - lsw, ypos, zpos[i + 1]);
		vertex(xpos[i + 2], ypos - lsh, zpos[i + 2]);
		vertex(xpos[i + 3] - lsw, ypos, zpos[i + 3]);
		endShape(CLOSE);

		beginShape();
		vertex(xpos[i + 1] - lsw, ypos, zpos[i + 1]);
		vertex(xpos[i + 2], ypos + lbh, zpos[i + 2]);
		vertex(xpos[i + 3] - lsw, ypos, zpos[i + 3]);
		endShape(CLOSE);

		beginShape();
		vertex(xpos[i + 3] - lsw, ypos, zpos[i + 3]);
		vertex(xpos[i + 2], ypos - lsh, zpos[i + 2]);
		vertex(xpos[i + 4], ypos - lsh, zpos[i + 4]);
		endShape(CLOSE);

		vertex(xpos[i + 3] - lsw, ypos, zpos[i + 3]);
		vertex(xpos[i + 2], ypos + lbh, zpos[i + 2]);
		vertex(xpos[i + 4], ypos + lbh, zpos[i + 4]);
		endShape(CLOSE);
	}
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
