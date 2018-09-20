
//xpos and zpos have 88 things in them
var xpos = [];
var zpos = [];
var ypos = 50;
var steps = 5;

var w = 700;
var h = 700;

function setup(){
	createCanvas(w, h, WEBGL);
}

function draw(){

	background(255);
	orbitControl();

	// noFill();
	translate(-100, 0, 400);

	// for(var i = 5; i < 21; i += 2){

	// 	// if(xpos[i + 1] < xpos[i + 3] + 10 || xpos[i + 1] > xpos[i + 3] - 10){
	// 	// 	xpos[i + 3] = xpos[i + 3] + i/1.25;

	// 	fill(200, 0, 50);
	// 	beginShape();
	// 	vertex(xpos[i + 1] + 10, ypos, zpos[i + 1] + i/1.25);
	// 	vertex(xpos[i + 2], ypos - i/1.5, zpos[i + 2]);
	// 	vertex(xpos[i + 3] + 10, ypos, zpos[i + 3] + i/1.25);
	// 	// vertex(xpos[i], ypos, zpos[i] + i/5);
	// 	endShape();

	// 	beginShape();
	// 	vertex(xpos[i + 1] - 10, ypos, zpos[i + 1] - i/1.25);
	// 	vertex(xpos[i + 2], ypos - i/1.5, zpos[i + 2]);
	// 	vertex(xpos[i + 3] - 10, ypos, zpos[i + 3] - i/1.25);
	// 	// vertex(xpos[i], ypos, zpos[i] - i/5);
	// 	endShape();

	// // 	// beginShape();
	// // 	// vertex(xpos[i + 1], ypos, zpos[i + 1] + i/5);
	// // 	// vertex(xpos[i + 2], ypos + (sh/4), zpos[i + 2]);
	// // 	// vertex(xpos[i + 3], ypos, zpos[i + 3] + i/5);
	// // 	// vertex(xpos[i], ypos, zpos[i] + i/5);
	// // 	// endShape();

	// // 	// beginShape();
	// // 	// vertex(xpos[i + 1], ypos, zpos[i + 1] - i/5);
	// // 	// vertex(xpos[i + 2], ypos + (sh/4), zpos[i + 2]);
	// // 	// vertex(xpos[i + 3], ypos, zpos[i + 3] - i/5);
	// // 	// vertex(xpos[i], ypos, zpos[i] - i/5);
	// // 	// endShape();

	// 	fill(80, 0, 10);

	// 		beginShape();
	// 		vertex(xpos[i], ypos - i/1.5, zpos[i]);
	// 		vertex(xpos[i + 1] + 10, ypos, zpos[i + 1] + i/1.25);
	// 		vertex(xpos[i + 2], ypos - i/1.5, zpos[i + 2]);
	// 		endShape();

	// 		beginShape();
	// 		vertex(xpos[i], ypos - i/1.5, zpos[i]);
	// 		vertex(xpos[i + 1] - 10, ypos, zpos[i + 1] - i/1.25);
	// 		vertex(xpos[i + 2], ypos - i/1.5, zpos[i + 2]);
	// 		endShape();

	// 		// beginShape();
	// 		// vertex(xpos[i], ypos + (sh/4), zpos[i]);
	// 		// vertex(xpos[i + 1], ypos, zpos[i + 1] + sw);
	// 		// vertex(xpos[i + 2], ypos + (sh/4), zpos[i + 2]);
	// 		// endShape();

	// 		// beginShape();
	// 		// vertex(xpos[i], ypos + (sh/4), zpos[i]);
	// 		// vertex(xpos[i + 1], ypos, zpos[i + 1] - sw);
	// 		// vertex(xpos[i + 

	// 		// rotate(i, [Y]);
	// 	// }
	// }

	spine();

	triangles1();

	// triangle(xpos[30], 50, xpos[31], 50, xpos[30], 40);
	// rotateY(-PI/10);
	// rotateY(PI/10);

	// triangle(xpos[30], 50, xpos[31], 50, xpos[30], 40);
}

function triangles1(){

	for(var i = 1; i < 29; i += 2){
		if(i < 14){

			fill(200, 0, 50);

		var sw = i * 1.25;
		var lsw = 16.25;
		var sh = i;
		var lsh = 13;

		if(xpos[i + 1] < xpos[i + 3] + sw || xpos[i + 1] > xpos[i + 3] - sw){
				xpos[i + 1] = xpos[i + 1] + sw;
				xpos[i + 3] = xpos[i + 3] + sw;


				beginShape();
				vertex(xpos[i + 1], ypos, zpos[i + 1] + sw);
				vertex(xpos[i + 2], ypos - sh, zpos[i + 2]);
				vertex(xpos[i + 3], ypos, zpos[i + 3] + sw);
				// vertex(xpos[i], ypos, zpos[i] + i/5);
				endShape();

				// beginShape();
				// vertex(xpos[i + 1], ypos, zpos[i + 1] + sw);
				// vertex(xpos[i + 2], ypos + (sh/4), zpos[i + 2]);
				// vertex(xpos[i + 3], ypos, zpos[i + 3] + sw);
				// // vertex(xpos[i], ypos, zpos[i] + 16);
				// endShape();
			} else{

				beginShape();
				vertex(xpos[i + 1], ypos, zpos[i + 1] + sw);
				vertex(xpos[i + 2], ypos - sh, zpos[i + 2]);
				vertex(xpos[i + 3], ypos, zpos[i + 3] + sw);
				// vertex(xpos[i], ypos, zpos[i] + i/5);
				endShape();

				// beginShape();
				// vertex(xpos[i + 1], ypos, zpos[i + 1] + sw);
				// vertex(xpos[i + 2], ypos + (sh/4), zpos[i + 2]);
				// vertex(xpos[i + 3], ypos, zpos[i + 3] + sw);
				// // vertex(xpos[i], ypos, zpos[i] + 16);
				// endShape();
			}

			if(xpos[i + 1] < xpos[i + 3] + sw || xpos[i + 1] > xpos[i + 3] - sw){
				xpos[i + 1] = xpos[i + 1] - sw;
				xpos[i + 3] = xpos[i + 3] - sw;

			beginShape();
			vertex(xpos[i + 1], ypos, zpos[i + 1] - sw);
			vertex(xpos[i + 2], ypos - sh, zpos[i + 2]);
			vertex(xpos[i + 3], ypos, zpos[i + 3] - sw);
			// vertex(xpos[i], ypos, zpos[i] - i/5);
			endShape();

			// beginShape();
			// vertex(xpos[i + 1], ypos, zpos[i + 1] - sw);
			// vertex(xpos[i + 2], ypos + (sh/4), zpos[i + 2]);
			// vertex(xpos[i + 3], ypos, zpos[i + 3] - sw);
			// // vertex(xpos[i], ypos, zpos[i] - i/5);
			// endShape();

			}else{

				beginShape();
			vertex(xpos[i + 1], ypos, zpos[i + 1] - sw);
			vertex(xpos[i + 2], ypos - sh, zpos[i + 2]);
			vertex(xpos[i + 3], ypos, zpos[i + 3] - sw);
			// vertex(xpos[i], ypos, zpos[i] - i/5);
			endShape();

			// beginShape();
			// vertex(xpos[i + 1], ypos, zpos[i + 1] - sw);
			// vertex(xpos[i + 2], ypos + (sh/4), zpos[i + 2]);
			// vertex(xpos[i + 3], ypos, zpos[i + 3] - sw);
			// // vertex(xpos[i], ypos, zpos[i] - i/5);
			// endShape();
			}

			// opposite triangles

			fill(80, 0, 10);

			if(xpos[i - 1] < xpos[i + 1] + sw || xpos[i - 1] > xpos[i + 1] - sw){
				xpos[i + 1] = xpos[i + 1] + sw;
				xpos[i - 1] = xpos[i - 1] + sw;

			beginShape();
			vertex(xpos[i], ypos - sh, zpos[i]);
			vertex(xpos[i + 1], ypos, zpos[i + 1] + sw);
			vertex(xpos[i + 2], ypos - sh, zpos[i + 2]);
			endShape();

			// beginShape();
			// vertex(xpos[i], ypos + (sh/4), zpos[i]);
			// vertex(xpos[i + 1], ypos, zpos[i + 1] + sw);
			// vertex(xpos[i + 2], ypos + (sh/4), zpos[i + 2]);
			// endShape();			

			}else{

				beginShape();
			vertex(xpos[i], ypos - sh, zpos[i]);
			vertex(xpos[i + 1], ypos, zpos[i + 1] + sw);
			vertex(xpos[i + 2], ypos - sh, zpos[i + 2]);
			endShape();

			// beginShape();
			// vertex(xpos[i], ypos + (sh/4), zpos[i]);
			// vertex(xpos[i + 1], ypos, zpos[i + 1] + sw);
			// vertex(xpos[i + 2], ypos + (sh/4), zpos[i + 2]);
			// endShape();	
			}

			if(xpos[i - 1] < xpos[i + 1] + sw || xpos[i - 1] > xpos[i + 1] - sw){
				xpos[i + 1] = xpos[i + 1] - sw;
				xpos[i - 1] = xpos[i - 1] - sw;

			beginShape();
			vertex(xpos[i], ypos - sh, zpos[i]);
			vertex(xpos[i + 1], ypos, zpos[i + 1] - sw);
			vertex(xpos[i + 2], ypos - sh, zpos[i + 2]);
			endShape();

			// beginShape();
			// vertex(xpos[i], ypos + (sh/4), zpos[i]);
			// vertex(xpos[i + 1], ypos, zpos[i + 1] - sw);
			// vertex(xpos[i + 2], ypos + (sh/4), zpos[i + 2]);
			// endShape();

			}else{

				beginShape();
			vertex(xpos[i], ypos - sh, zpos[i]);
			vertex(xpos[i + 1], ypos, zpos[i + 1] - sw);
			vertex(xpos[i + 2], ypos - sh, zpos[i + 2]);
			endShape();

			// beginShape();
			// vertex(xpos[i], ypos + (sh/4), zpos[i]);
			// vertex(xpos[i + 1], ypos, zpos[i + 1] - sw);
			// vertex(xpos[i + 2], ypos + (sh/4), zpos[i + 2]);
			// endShape();
			}
		}

		// 	if(i >= 14){

		// 	fill(200, 0, 50);
		// 	stroke(0, 0, 0, 10);

		// 	beginShape();
		// 	vertex(xpos[i + 1] + lsw, ypos, zpos[i + 1] + lsw);
		// 	vertex(xpos[i + 2], ypos - lsh, zpos[i + 2]);
		// 	vertex(xpos[i + 3] + lsw, ypos, zpos[i + 3] + lsw);
		// 	// vertex(xpos[i], ypos, zpos[i] + 16);
		// 	endShape();

		// 	beginShape();
		// 	vertex(xpos[i + 1] - lsw, ypos, zpos[i + 1] - lsw);
		// 	vertex(xpos[i + 2], ypos - lsh, zpos[i + 2]);
		// 	vertex(xpos[i + 3] - lsw, ypos, zpos[i + 3] - lsw);
		// 	// vertex(xpos[i], ypos, zpos[i] - i/5);
		// 	endShape();

		// 	beginShape();
		// 	vertex(xpos[i + 1] + lsw, ypos, zpos[i + 1] + lsw);
		// 	vertex(xpos[i + 2], ypos + 5.4, zpos[i + 2]);
		// 	vertex(xpos[i + 3] + lsw, ypos, zpos[i + 3] + lsw);
		// 	// vertex(xpos[i], ypos, zpos[i] + 16);
		// 	endShape();

		// 	beginShape();
		// 	vertex(xpos[i + 1] - lsw, ypos, zpos[i + 1] - lsw);
		// 	vertex(xpos[i + 2], ypos + 5.4, zpos[i + 2]);
		// 	vertex(xpos[i + 3] - lsw, ypos, zpos[i + 3] - lsw);
		// 	// vertex(xpos[i], ypos, zpos[i] - i/5);
		// 	endShape();

		// 	// opposite triangles

		// 	fill(80, 0, 10);

		// 	beginShape();
		// 	vertex(xpos[i], ypos - lsh, zpos[i]);
		// 	vertex(xpos[i + 1] + lsw, ypos, zpos[i + 1] + lsw);
		// 	vertex(xpos[i + 2], ypos - lsh, zpos[i + 2]);
		// 	endShape();

		// 	beginShape();
		// 	vertex(xpos[i], ypos - lsh, zpos[i]);
		// 	vertex(xpos[i + 1] - lsw, ypos, zpos[i + 1] - lsw);
		// 	vertex(xpos[i + 2], ypos - lsh, zpos[i + 2]);
		// 	endShape();

		// 	beginShape();
		// 	vertex(xpos[i], ypos + (lsh/4), zpos[i]);
		// 	vertex(xpos[i + 1] + lsw, ypos, zpos[i + 1] + lsw);
		// 	vertex(xpos[i + 2], ypos + (lsh/4), zpos[i + 2]);
		// 	endShape();

		// 	beginShape();
		// 	vertex(xpos[i], ypos + (lsh/4), zpos[i]);
		// 	vertex(xpos[i + 1] - lsw, ypos, zpos[i + 1] - lsw);
		// 	vertex(xpos[i + 2], ypos + (lsh/4), zpos[i + 2]);
		// 	endShape();
		// }
	}
}

function spine(){

	var x1 = 0,
      x2 = 20, 
      x3 = 30,
      x4 = 50;
  var y1 = 50, 
      y2 = 50, 
      y3 = 50, 
      y4 = 50;
  var z1 = -15, 
      z2 = -60,
      z3 = 10,
      z4 = -15;

  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);
  	var yb = bezierPoint(y1, y2, y3, y4, t);

  	// translate(xb, yb, zb);
  	// sphere(2);
  	// translate(-xb, -yb, -zb);

  	xpos.push(xb);
  	zpos.push(zb);
  }
 
  var x1 = 50,
      x2 = 70, 
      x3 = 20,
      x4 = 55;
  var z1 = -15, 
      z2 = -40,
      z3 = -70,
      z4 = -100;

  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);
  	var yb = bezierPoint(y1, y2, y3, y4, t);

  	// translate(xb, yb, zb);
  	// sphere(2);
  	// translate(-xb, -yb, -zb);

  	xpos.push(xb);
  	zpos.push(zb);
  }
  
  var x1 = 55,
      x2 = 100, 
      x3 = 70,
      x4 = 110;
  var z1 = -100, 
      z2 = -115,
      z3 = -30,
      z4 = -55;

  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);
  	var yb = bezierPoint(y1, y2, y3, y4, t);

  	// translate(xb, yb, zb);
  	// sphere(2);
  	// translate(-xb, -yb, -zb);

  	xpos.push(xb);
  	zpos.push(zb);
  }
  
  var x1 = 110,
      x2 = 130, 
      x3 = 100,
      x4 = 140;
  var z1 = -55 
      z2 = -75,
      z3 = -150,
      z4 = -130;


  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);
  	var yb = bezierPoint(y1, y2, y3, y4, t);

  	// translate(xb, yb, zb);
  	// sphere(2);
  	// translate(-xb, -yb, -zb);

  	xpos.push(xb);
  	zpos.push(zb);
  }
  
  var x1 = 140,
      x2 = 170, 
      x3 = 110,
      x4 = 150;
  var z1 = -130, 
      z2 = -90,
      z3 = -30,
      z4 = -15;

  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);
  	var yb = bezierPoint(y1, y2, y3, y4, t);

  	// translate(xb, yb, zb);
  	// sphere(2);
  	// translate(-xb, -yb, -zb);

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

  	// translate(xb, yb, zb);
  	// sphere(2);
  	// translate(-xb, -yb, -zb);

  	xpos.push(xb);
  	zpos.push(zb);
  }
  
  var x1 = 190,
      x2 = 230, 
      x3 = 185,
      x4 = 200;
  var z1 = -70,
      z2 = -50,
      z3 = -10,
      z4 = 10;

  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);
  	var yb = bezierPoint(y1, y2, y3, y4, t);

  	// translate(xb, yb, zb);
  	// sphere(2);
  	// translate(-xb, -yb, -zb);

  	xpos.push(xb);
  	zpos.push(zb);
  }

  var x1 = 200,
      x2 = 230, 
      x3 = 220,
      x4 = 240;
  var z1 = 10,
      z2 = 0,
      z3 = -5,
      z4 = 10;

  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);
  	var yb = bezierPoint(y1, y2, y3, y4, t);

  	// translate(xb, yb, zb);
  	// sphere(2);
  	// translate(-xb, -yb, -zb);

  	xpos.push(xb);
  	zpos.push(zb);
  }
}