let canvas;

var capturer;

//72 things in them
var xpos = [];
var zpos = [];
var ypos = 50;
var steps = 8;

var w = 800;
var h = 800;

var r;
var g;
var b;

var xs;
var ys;
var scatter;

var x = 34;
var yht = [-16, -19, -21, -24, -24, -28, -26, -22];
var yhb = [6, 6, 1, 3, 3, 1, 3, 6];
var z = 6;

var colours = [];

var noiseVal;
var noiseScale=0.02;
var bgx;
var bgy;

function setup(){
	var p5Canvas = createCanvas(w, h, WEBGL);
	//naming the canvas allows CCapture to know what to capture
	canvas = p5Canvas.canvas;

	sky = createGraphics(w, h);

	//creates array of random colours
	for(i = 0; i < 101; i++){

	colours.push(floor(random(255)));

	}

	fill(255);
	textFont(font);
	textSize(30);
	text('eidolon', 0, h/2 - 50);

	capturer = new CCapture( {
	  framerate: 10,
	  format: 'gif',
	  worksPath: '../../p5/addons/',
	  verbose: true
	} );

	capturer.start();
}

function draw(){

	background(0);

	//call sky graphic to be used as a texture later
	bg2();

	orbitControl();

	ortho(w/2, -w/2, -h/2, h/2, 0);

	scale(0.5, 0.5, 0.5);
	translate(0, -50, 0);

	//putting the snakes behind the sphere allows them to show through a little bit
	//because the stroke colour for sky is semi-transparent
	push();
	translate(0, 0, 300);
	snakes();
	pop();

	translate(0, 30, -430);
	rotateY(PI/2);
	texture(sky);
	sphere(275);
	rotateY(-PI/2);
	translate(0, -30, 430);

	scale(2, 2, 2);
	showStars();

	if(frameCount < 180){
		capturer.capture(canvas);
	}else if(frameCount === 180){
		capturer.stop();
	}

	if(frameCount === 181){
		capturer.save();
	}
	//note to self: it only saves if it's run through a server, not from the files on the computer!!!
}

function snakes(){

	push();

	scale(2, 2, 2);

	rotateX(-PI/6);

	rotateY(radians(frameCount * 3));

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

	//one snake facing the other
	snake();

	pop();
}

function colour(){

	r = colours[floor(random(100))];
	g = colours[floor(random(100))];
	b = colours[floor(random(100))];
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

// https://github.com/CodingTrain/website/blob/master/Tutorials/P5JS/18_p5.js_webgl/18.06_p5.js_graphics_texture/sketch.js
// https://www.youtube.com/watch?v=3tTZlTq4Cxs
// texture for createGraphics in WEBGL

// https://p5js.org/examples/transform-rotate.html
// rotating in degrees with radians()