
//xpos and zpos have 88 things in them
var xpos = [];
var zpos = [];
var ypos = 50;
var steps = 10;

var w = 500;
var h = 500;

function setup(){
	createCanvas(w, h, WEBGL);
}

function draw(){

	background(255);
	orbitControl();

	// noFill();
	translate(-100, 0, 250);
	// beginShape();
	// vertex(xpos[87], ypos, zpos[86]);
	// vertex(xpos[86], ypos - 5, zpos[86]);
	// vertex(xpos[85], ypos, zpos[85] + 4);
	// vertex(xpos[87], ypos, zpos[86]);
	// endShape();

	// beginShape();
	// vertex(xpos[87], ypos, zpos[86]);
	// vertex(xpos[86], ypos - 5, zpos[86]);
	// vertex(xpos[85], ypos, zpos[85] - 4);
	// vertex(xpos[87], ypos, zpos[86]);
	// endShape();

	// beginShape();
	// vertex(xpos[87], ypos, zpos[86]);
	// vertex(xpos[86], ypos + 5, zpos[86]);
	// vertex(xpos[85], ypos, zpos[85] + 4);
	// vertex(xpos[87], ypos, zpos[86]);
	// endShape();

	// beginShape();
	// vertex(xpos[87], ypos, zpos[86]);
	// vertex(xpos[86], ypos + 5, zpos[86]);
	// vertex(xpos[85], ypos, zpos[85] - 4);
	// vertex(xpos[87], ypos, zpos[86]);
	// endShape();

	spine();

	triangles1();

	// triangle(xpos[30], 50, xpos[31], 50, xpos[30], 40);
	// rotateY(-PI/10);
	// rotateY(PI/10);

	// triangle(xpos[30], 50, xpos[31], 50, xpos[30], 40);
}

function triangles1(){

	for(var i = 1; i < 66; i += 2){
		if(i < 23){

			fill(0, 0, 0);
			stroke(0, 0, 0, 10);

			beginShape();
			vertex(xpos[i + 1], ypos, zpos[i + 1] + (i * 1.25));
			vertex(xpos[i + 2], ypos - ((i/2) + 4), zpos[i + 2]);
			vertex(xpos[i + 3], ypos, zpos[i + 3] + (i * 1.25));
			// vertex(xpos[i], ypos, zpos[i] + 16);
			endShape();

			beginShape();
			vertex(xpos[i + 1], ypos, zpos[i + 1] - (i * 1.25));
			vertex(xpos[i + 2], ypos - ((i/2) + 4), zpos[i + 2]);
			vertex(xpos[i + 3], ypos, zpos[i + 3] - (i * 1.25));
			// vertex(xpos[i], ypos, zpos[i] - (i * 1.25));
			endShape();

			beginShape();
			vertex(xpos[i + 1], ypos, zpos[i + 1] + (i * 1.25));
			vertex(xpos[i + 2], ypos + (((i/2) + 4)/4), zpos[i + 2]);
			vertex(xpos[i + 3], ypos, zpos[i + 3] + (i * 1.25));
			// vertex(xpos[i], ypos, zpos[i] + 16);
			endShape();

			beginShape();
			vertex(xpos[i + 1], ypos, zpos[i + 1] - (i * 1.25));
			vertex(xpos[i + 2], ypos + (((i/2) + 4)/4), zpos[i + 2]);
			vertex(xpos[i + 3], ypos, zpos[i + 3] - (i * 1.25));
			// vertex(xpos[i], ypos, zpos[i] - (i * 1.25));
			endShape();

			// opposite triangles

			fill(0, 50, 0);

			beginShape();
			vertex(xpos[i], ypos - ((i/2) + 4), zpos[i]);
			vertex(xpos[i + 1], ypos, zpos[i + 1] + (i * 1.25));
			vertex(xpos[i + 2], ypos - ((i/2) + 4), zpos[i + 2]);
			endShape();

			beginShape();
			vertex(xpos[i], ypos - ((i/2) + 4), zpos[i]);
			vertex(xpos[i + 1], ypos, zpos[i + 1] - (i * 1.25));
			vertex(xpos[i + 2], ypos - ((i/2) + 4), zpos[i + 2]);
			endShape();

			beginShape();
			vertex(xpos[i], ypos + (((i/2) + 4)/4), zpos[i]);
			vertex(xpos[i + 1], ypos, zpos[i + 1] + (i * 1.25));
			vertex(xpos[i + 2], ypos + (((i/2) + 4)/4), zpos[i + 2]);
			endShape();

			beginShape();
			vertex(xpos[i], ypos + (((i/2) + 4)/4), zpos[i]);
			vertex(xpos[i + 1], ypos, zpos[i + 1] - (i * 1.25));
			vertex(xpos[i + 2], ypos + (((i/2) + 4)/4), zpos[i + 2]);
			endShape();
		}

				if(i >= 23){

			fill(0, 0, 0);
			stroke(0, 0, 0, 10);

			beginShape();
			vertex(xpos[i + 1], ypos, zpos[i + 1] + 27.5);
			vertex(xpos[i + 2], ypos - 15, zpos[i + 2]);
			vertex(xpos[i + 3], ypos, zpos[i + 3] + 27.5);
			// vertex(xpos[i], ypos, zpos[i] + 16);
			endShape();

			beginShape();
			vertex(xpos[i + 1], ypos, zpos[i + 1] - 27.5);
			vertex(xpos[i + 2], ypos - 15, zpos[i + 2]);
			vertex(xpos[i + 3], ypos, zpos[i + 3] - 27.5);
			// vertex(xpos[i], ypos, zpos[i] - (i * 1.25));
			endShape();

			beginShape();
			vertex(xpos[i + 1], ypos, zpos[i + 1] + 27.5);
			vertex(xpos[i + 2], ypos + 3.75, zpos[i + 2]);
			vertex(xpos[i + 3], ypos, zpos[i + 3] + 27.5);
			// vertex(xpos[i], ypos, zpos[i] + 16);
			endShape();

			beginShape();
			vertex(xpos[i + 1], ypos, zpos[i + 1] - 27.5);
			vertex(xpos[i + 2], ypos + 3.75, zpos[i + 2]);
			vertex(xpos[i + 3], ypos, zpos[i + 3] - 27.5);
			// vertex(xpos[i], ypos, zpos[i] - (i * 1.25));
			endShape();

			// opposite triangles

			fill(0, 50, 0);

			beginShape();
			vertex(xpos[i], ypos - 15, zpos[i]);
			vertex(xpos[i + 1], ypos, zpos[i + 1] + 27.5);
			vertex(xpos[i + 2], ypos - 15, zpos[i + 2]);
			endShape();

			beginShape();
			vertex(xpos[i], ypos - 15, zpos[i]);
			vertex(xpos[i + 1], ypos, zpos[i + 1] - 27.5);
			vertex(xpos[i + 2], ypos - 15, zpos[i + 2]);
			endShape();

			beginShape();
			vertex(xpos[i], ypos + 3.75, zpos[i]);
			vertex(xpos[i + 1], ypos, zpos[i + 1] + 27.5);
			vertex(xpos[i + 2], ypos + 3.75, zpos[i + 2]);
			endShape();

			beginShape();
			vertex(xpos[i], ypos + 3.75, zpos[i]);
			vertex(xpos[i + 1], ypos, zpos[i + 1] - 27.5);
			vertex(xpos[i + 2], ypos + 3.75, zpos[i + 2]);
			endShape();
		}
	}
}

function spine(){

	var x1 = 10,
      x2 = 20, 
      x3 = 30,
      x4 = 60;
  var y1 = 50, 
      y2 = 50, 
      y3 = 50, 
      y4 = 50;
  var z1 = -15, 
      z2 = -60,
      z3 = 10,
      z4 = -25;

  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);
  	var yb = bezierPoint(y1, y2, y3, y4, t);

  	xpos.push(xb);
  	zpos.push(zb);
  }
 
  var x1 = 60,
      x2 = 70, 
      x3 = 0,
      x4 = 45;
  var z1 = -25, 
      z2 = -40,
      z3 = -70,
      z4 = -90;

  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);
  	var yb = bezierPoint(y1, y2, y3, y4, t);

  	xpos.push(xb);
  	zpos.push(zb);
  }
  
  var x1 = 45,
      x2 = 100, 
      x3 = 70,
      x4 = 110;
  var z1 = -90, 
      z2 = -115,
      z3 = -30,
      z4 = -55;

  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);
  	var yb = bezierPoint(y1, y2, y3, y4, t);

  	xpos.push(xb);
  	zpos.push(zb);
  }
  
  var x1 = 110,
      x2 = 130, 
      x3 = 80,
      x4 = 140;
  var z1 = -55 
      z2 = -75,
      z3 = -120,
      z4 = -110;

  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);
  	var yb = bezierPoint(y1, y2, y3, y4, t);

  	xpos.push(xb);
  	zpos.push(zb);
  }
  
  var x1 = 140,
      x2 = 170, 
      x3 = 110,
      x4 = 150;
  var z1 = -110, 
      z2 = -90,
      z3 = -30,
      z4 = -15;

  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);
  	var yb = bezierPoint(y1, y2, y3, y4, t);

  	xpos.push(xb);
  	zpos.push(zb);
  }
  
  var x1 = 150,
      x2 = 190, 
      x3 = 140,
      x4 = 190;
  var z1 = -15, 
      z2 = -15,
      z3 = -90,
      z4 = -70;

  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);
  	var yb = bezierPoint(y1, y2, y3, y4, t);

  	xpos.push(xb);
  	zpos.push(zb);
  }
  
  var x1 = 190,
      x2 = 230, 
      x3 = 165,
      x4 = 190;
  var z1 = -70,
      z2 = -50,
      z3 = -10,
      z4 = 0;

  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);
  	var yb = bezierPoint(y1, y2, y3, y4, t);

  	xpos.push(xb);
  	zpos.push(zb);
  }

  var x1 = 190,
      x2 = 210, 
      x3 = 205,
      x4 = 230;
  var z1 = 0,
      z2 = 0,
      z3 = -15,
      z4 = 0;

  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);
  	var yb = bezierPoint(y1, y2, y3, y4, t);

  	xpos.push(xb);
  	zpos.push(zb);
  }
}