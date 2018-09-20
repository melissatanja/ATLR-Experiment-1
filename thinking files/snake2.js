
//72 things in them
var xpos = [];
var zpos = [];
var ypos = [];
var steps = 8;

var w = 700;
var h = 700;

function setup(){
	createCanvas(w, h, WEBGL);
}

function draw(){

	background(255);
	orbitControl();

	translate(-400, 0, 0);

// for(var i = 20; i < 25; i += 2){

// 		var sw = 1.25;
// 		var lsw = 21.25;
// 		var sh = 1.25;
// 		var lsh = 21.25;

// 			if(xpos[i + 1] < xpos[i + 3] + sw || xpos[i + 1] > xpos[i + 3] - sw){

// 				fill(200, 0, 50);

// 				beginShape();
// 				vertex(xpos[i + 1] + (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
// 				vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
// 				vertex(xpos[i + 3] + (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
// 				endShape();

// 				// beginShape();
// 				// vertex(xpos[i + 1], ypos, zpos[i + 1] + sw);
// 				// vertex(xpos[i + 2], ypos + (sh/4), zpos[i + 2]);
// 				// vertex(xpos[i + 3], ypos, zpos[i + 3] + sw);
// 				// // vertex(xpos[i], ypos, zpos[i] + 16);
// 				// endShape();

// 				fill(80, 0, 10);

// 				beginShape();
// 				vertex(xpos[i + 3] + (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
// 				vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
// 				vertex(xpos[i + 4], ypos[i + 4] - (sh * (i + 4)), zpos[i + 4]);
// 				endShape();

// 				// beginShape();
// 				// vertex(xpos[i], ypos + (sh/4), zpos[i]);
// 				// vertex(xpos[i + 1], ypos, zpos[i + 1] + sw);
// 				// vertex(xpos[i + 2], ypos + (sh/4), zpos[i + 2]);
// 				// endShape();

// 				fill(0, 200, 50);

// 				beginShape();
// 				vertex(xpos[i + 1] - (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
// 				vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
// 				vertex(xpos[i + 3] - (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
// 				endShape();

// 				// beginShape();
// 				// vertex(xpos[i + 1], ypos, zpos[i + 1] + sw);
// 				// vertex(xpos[i + 2], ypos + (sh/4), zpos[i + 2]);
// 				// vertex(xpos[i + 3], ypos, zpos[i + 3] + sw);
// 				// // vertex(xpos[i], ypos, zpos[i] + 16);
// 				// endShape();

// 				fill(0, 80, 10);

// 				beginShape();
// 				vertex(xpos[i + 3] - (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
// 				vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
// 				vertex(xpos[i + 4], ypos[i + 4] - (sh * (i + 4)), zpos[i + 4]);
// 				endShape();

// 				// beginShape();
// 				// vertex(xpos[i], ypos + (sh/4), zpos[i]);
// 				// vertex(xpos[i + 1], ypos, zpos[i + 1] + sw);
// 				// vertex(xpos[i + 2], ypos + (sh/4), zpos[i + 2]);
// 				// endShape();
// 			}

// 			if(zpos[i + 1] > zpos[i + 3] - 10 && zpos[i + 1] < zpos[i + 3] + 10 || zpos[i + 3] > zpos[i + 1] + 10 && zpos[i + 3] < zpos[i + 1] - 10){

// 				fill(0, 200, 50);

// 				beginShape();
// 				vertex(xpos[i +1] - (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
// 				vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
// 				vertex(xpos[i + 3], ypos[i + 3], zpos[i + 2]);
// 				endShape();

// 				// beginShape();
// 				// vertex(xpos[i + 1], ypos, zpos[i + 1] + sw);
// 				// vertex(xpos[i + 2], ypos + (sh/4), zpos[i + 2]);
// 				// vertex(xpos[i + 3], ypos, zpos[i + 3] + sw);
// 				// // vertex(xpos[i], ypos, zpos[i] + 16);
// 				// endShape();

// 				fill(200, 0, 50);

// 				beginShape();
// 				vertex(xpos[i + 1], ypos[i + 1], zpos[i + 2]);
// 				vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
// 				vertex(xpos[i + 3] + (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
// 				endShape();

// 				// beginShape();
// 				// vertex(xpos[i + 1], ypos, zpos[i + 1] + sw);
// 				// vertex(xpos[i + 2], ypos + (sh/4), zpos[i + 2]);
// 				// vertex(xpos[i + 3], ypos, zpos[i + 3] + sw);
// 				// // vertex(xpos[i], ypos, zpos[i] + 16);
// 				// endShape();
// 			}
// 		}

	spine();

	triangles1();

	// triangle(xpos[30], 50, xpos[31], 50, xpos[30], 40);
	// rotateY(-PI/10);
	// rotateY(PI/10);

	// triangle(xpos[30], 50, xpos[31], 50, xpos[30], 40);
}

function triangles1(){

	var sw = 1;
	var lsw = 24;
	var sh = 1.25;
	var lsh = 30;
	var bh = 0.3;
	var lbh = 7.2;

	for(var i = 3; i < 69; i += 2){

		if(i < 25){

			if(xpos[i + 1] < xpos[i + 3] + sw || xpos[i + 1] > xpos[i + 3] - sw){

				//regular pos
				//top

				fill(200, 0, 50);

				beginShape();
				vertex(xpos[i + 1] + (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
				vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
				vertex(xpos[i + 3] + (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
				endShape();

				//bottom

				beginShape();
				vertex(xpos[i + 1] + (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
				vertex(xpos[i + 2], ypos[i + 2] + (bh * (i + 4)), zpos[i + 2]);
				vertex(xpos[i + 3] + (sw * (i + 1)), ypos[i + 3], zpos[i + 3]);
				endShape();

				//irregular pos
				//top

				fill(80, 0, 10);

				beginShape();
				vertex(xpos[i + 3] + (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
				vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
				vertex(xpos[i + 4], ypos[i + 4] - (sh * (i + 4)), zpos[i + 4]);
				endShape();

				//bottom

				beginShape();
				vertex(xpos[i + 3] + (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
				vertex(xpos[i + 2], ypos[i + 2] + (bh * (i + 4)), zpos[i + 2]);
				vertex(xpos[i + 4], ypos[i + 4] + (bh * (i + 4)), zpos[i + 4]);
				endShape();

				//regular neg
				//top

				fill(0, 200, 50);

				beginShape();
				vertex(xpos[i + 1] - (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
				vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
				vertex(xpos[i + 3] - (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
				endShape();

				//bottom

				beginShape();
				vertex(xpos[i + 1] - (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
				vertex(xpos[i + 2], ypos[i + 2] + (bh * (i + 4)), zpos[i + 2]);
				vertex(xpos[i + 3] - (sw * (i + 1)), ypos[i + 3], zpos[i + 3]);
				endShape();

				//irregular neg
				//top

				fill(0, 80, 10);

				beginShape();
				vertex(xpos[i + 3] - (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
				vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
				vertex(xpos[i + 4], ypos[i + 4] - (sh * (i + 4)), zpos[i + 4]);
				endShape();

				//bottom

				beginShape();
				vertex(xpos[i + 3] - (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
				vertex(xpos[i + 2], ypos[i + 2] + (bh * (i + 4)), zpos[i + 2]);
				vertex(xpos[i + 4], ypos[i + 4] + (bh * (i + 4)), zpos[i + 4]);
				endShape();

			}

			//corner solution

			if(zpos[i + 1] > zpos[i + 3] - 10 && zpos[i + 1] < zpos[i + 3] + 10 || zpos[i + 3] > zpos[i + 1] + 10 && zpos[i + 3] < zpos[i + 1] - 10){

				if(zpos[i + 1] > -60 && zpos[i + 1] < -40 || zpos[i + 3] > -60 && zpos[i + 3] < -40){

					//regular neg
					//top

					fill(0, 200, 50);

					beginShape();
					vertex(xpos[i + 1] - (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 2], ypos[i + 3], zpos[i + 2] + (sw * (i + 3))/1.5);
					endShape();

					//bottom

					beginShape();
					vertex(xpos[i + 1] - (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] + (bh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 2], ypos[i + 3], zpos[i + 2] + (sw * (i + 3))/1.5);
					endShape();

					//regular pos
					//top

					fill(200, 0, 50);

					beginShape();
					vertex(xpos[i + 2], ypos[i + 1], zpos[i + 2] + (sw * (i + 3))/1.5);
					vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 3] + (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
					endShape();

					//bottom

					beginShape();
					vertex(xpos[i + 2], ypos[i + 1], zpos[i + 2] + (sw * (i + 3))/1.5);
					vertex(xpos[i + 2], ypos[i + 2] + (bh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 3] + (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
					endShape();
				}

				if(zpos[i + 1] > -40 || zpos[i + 3] > -40){

					fill(0, 200, 50);

					beginShape();
					vertex(xpos[i + 1] - (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 2], ypos[i + 3], zpos[i + 1] + (sw * (i + 3))/3);
					endShape();

					beginShape();
					vertex(xpos[i + 1] - (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] + (bh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 2], ypos[i + 3], zpos[i + 1] + (sw * (i + 3))/3);
					endShape();

					fill(200, 0, 50);

					beginShape();
					vertex(xpos[i + 2], ypos[i + 1], zpos[i + 1] + (sw * (i + 3))/3);
					vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 3] + (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
					endShape();

					beginShape();
					vertex(xpos[i + 2], ypos[i + 1], zpos[i + 1] + (sw * (i + 3))/3);
					vertex(xpos[i + 2], ypos[i + 2] + (bh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 3] + (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
					endShape();
				}

				if(zpos[i + 1] < -60 || zpos[i + 3] < -60){

					fill(0, 200, 50);

					beginShape();
					vertex(xpos[i + 1] - (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 2], ypos[i + 3], zpos[i + 2] - (sw * (i + 3))/1.5);
					endShape();

					beginShape();
					vertex(xpos[i + 1] - (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] + (bh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 2], ypos[i + 3], zpos[i + 2] - (sw * (i + 3))/1.5);
					endShape();

					fill(200, 0, 50);

					beginShape();
					vertex(xpos[i + 2], ypos[i + 1], zpos[i + 2] - (sw * (i + 3))/1.5);
					vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 3] + (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
					endShape();

					beginShape();
					vertex(xpos[i + 2], ypos[i + 1], zpos[i + 2] - (sw * (i + 3))/1.5);
					vertex(xpos[i + 2], ypos[i + 2] + (bh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 3] + (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
					endShape();
				}
			}
		}

		if(i > 24 && i < 49){

			if(xpos[i + 1] < xpos[i + 3] + sw || xpos[i + 1] > xpos[i + 3] - sw){

				fill(200, 0, 50);

				beginShape();
				vertex(xpos[i + 1] + lsw, ypos[i + 1], zpos[i + 1]);
				vertex(xpos[i + 2], ypos[i + 2] - lsh, zpos[i + 2]);
				vertex(xpos[i + 3] + lsw, ypos[i + 3], zpos[i + 3]);
				endShape();

				beginShape();
				vertex(xpos[i + 1] + lsw, ypos[i + 1], zpos[i + 1]);
				vertex(xpos[i + 2], ypos[i + 2] + lbh, zpos[i + 2]);
				vertex(xpos[i + 3] + lsw, ypos[i + 3], zpos[i + 3]);
				endShape();

				fill(80, 0, 10);

				beginShape();
				vertex(xpos[i + 3] + lsw, ypos[i + 3], zpos[i + 3]);
				vertex(xpos[i + 2], ypos[i + 2] - lsh, zpos[i + 2]);
				vertex(xpos[i + 4], ypos[i + 4] - lsh, zpos[i + 4]);
				endShape();

				beginShape();
				vertex(xpos[i + 3] + lsw, ypos[i + 3], zpos[i + 3]);
				vertex(xpos[i + 2], ypos[i + 2] + lbh, zpos[i + 2]);
				vertex(xpos[i + 4], ypos[i + 4] + lbh, zpos[i + 4]);
				endShape();

				fill(0, 200, 50);

				beginShape();
				vertex(xpos[i + 1] - lsw, ypos[i + 1], zpos[i + 1]);
				vertex(xpos[i + 2], ypos[i + 2] - lsh, zpos[i + 2]);
				vertex(xpos[i + 3] - lsw, ypos[i + 3], zpos[i + 3]);
				endShape();

				beginShape();
				vertex(xpos[i + 1] - lsw, ypos[i + 1], zpos[i + 1]);
				vertex(xpos[i + 2], ypos[i + 2] + lbh, zpos[i + 2]);
				vertex(xpos[i + 3] - lsw, ypos[i + 3], zpos[i + 3]);
				endShape();

				fill(0, 80, 10);

				beginShape();
				vertex(xpos[i + 3] - lsw, ypos[i + 3], zpos[i + 3]);
				vertex(xpos[i + 2], ypos[i + 2] - lsh, zpos[i + 2]);
				vertex(xpos[i + 4], ypos[i + 4] - lsh, zpos[i + 4]);
				endShape();

				vertex(xpos[i + 3] - lsw, ypos[i + 3], zpos[i + 3]);
				vertex(xpos[i + 2], ypos[i + 2] + lbh, zpos[i + 2]);
				vertex(xpos[i + 4], ypos[i + 4] + lbh, zpos[i + 4]);
				endShape();

			}

			if(zpos[i + 1] > zpos[i + 3] - 10 && zpos[i + 1] < zpos[i + 3] + 10 || zpos[i + 3] > zpos[i + 1] + 10 && zpos[i + 3] < zpos[i + 1] - 10){

				if(zpos[i + 1] > -40 || zpos[i + 3] > -40){

					fill(0, 200, 50);

					beginShape();
					vertex(xpos[i + 1] - lsw, ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] - lsh, zpos[i + 2]);
					vertex(xpos[i + 2], ypos[i + 3], zpos[i + 1] + lsw/3);
					endShape();

					beginShape();
					vertex(xpos[i + 1] - lsw, ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] + lbh, zpos[i + 2]);
					vertex(xpos[i + 2], ypos[i + 3], zpos[i + 1] + lsw/3);
					endShape();

					fill(200, 0, 50);

					beginShape();
					vertex(xpos[i + 2], ypos[i + 1], zpos[i + 1] + lsw/3);
					vertex(xpos[i + 2], ypos[i + 2] - lsh, zpos[i + 2]);
					vertex(xpos[i + 3] + lsw, ypos[i + 3], zpos[i + 3]);
					endShape();

					beginShape();
					vertex(xpos[i + 2], ypos[i + 1], zpos[i + 1] + lsw/3);
					vertex(xpos[i + 2], ypos[i + 2] + lbh, zpos[i + 2]);
					vertex(xpos[i + 3] + lsw, ypos[i + 3], zpos[i + 3]);
					endShape();
				}

				if(zpos[i + 1] < -60 || zpos[i + 3] < -60){

					fill(0, 200, 50);

					beginShape();
					vertex(xpos[i + 1] - lsw, ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] - lsh, zpos[i + 2]);
					vertex(xpos[i + 2], ypos[i + 3], zpos[i + 2] - lsw/1.5);
					endShape();

					beginShape();
					vertex(xpos[i + 1] - lsw, ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] + lbh, zpos[i + 2]);
					vertex(xpos[i + 2], ypos[i + 3], zpos[i + 2] - lsw/1.5);
					endShape();

					fill(200, 0, 50);

					beginShape();
					vertex(xpos[i + 2], ypos[i + 1], zpos[i + 2] - lsw/1.5);
					vertex(xpos[i + 2], ypos[i + 2] - lsh, zpos[i + 2]);
					vertex(xpos[i + 3] + lsw, ypos[i + 3], zpos[i + 3]);
					endShape();

					beginShape();
					vertex(xpos[i + 2], ypos[i + 1], zpos[i + 2] - lsw/1.5);
					vertex(xpos[i + 2], ypos[i + 2] + lbh, zpos[i + 2]);
					vertex(xpos[i + 3] + lsw, ypos[i + 3], zpos[i + 3]);
					endShape();
				}
			}
		}

		if(i > 48 && i < 65){

			for(var j = 24; j > 3; j -= 2){

				if(xpos[i + 1] < xpos[i + 3] + sw || xpos[i + 1] > xpos[i + 3] - sw){

					//regular pos
					//top

					fill(200, 0, 50);

					beginShape();
					vertex(xpos[i + 1] + (sw * j), ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] - (sh * j), zpos[i + 2]);
					vertex(xpos[i + 3] + (sw * j), ypos[i + 3], zpos[i + 3]);
					endShape();

					//bottom

					beginShape();
					vertex(xpos[i + 1] + (sw * j), ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] + (bh * j), zpos[i + 2]);
					vertex(xpos[i + 3] + (sw * j), ypos[i + 3], zpos[i + 3]);
					endShape();

					//irregular pos
					//top

					fill(80, 0, 10);

					beginShape();
					vertex(xpos[i + 3] + (sw * j), ypos[i + 3], zpos[i + 3]);
					vertex(xpos[i + 2], ypos[i + 2] - (sh * j), zpos[i + 2]);
					vertex(xpos[i + 4], ypos[i + 4] - (sh * j), zpos[i + 4]);
					endShape();

					//bottom

					beginShape();
					vertex(xpos[i + 3] + (sw * j), ypos[i + 3], zpos[i + 3]);
					vertex(xpos[i + 2], ypos[i + 2] + (bh * j), zpos[i + 2]);
					vertex(xpos[i + 4], ypos[i + 4] + (bh * j), zpos[i + 4]);
					endShape();

					//regular neg
					//top

					fill(0, 200, 50);

					beginShape();
					vertex(xpos[i + 1] - (sw * j), ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] - (sh * j), zpos[i + 2]);
					vertex(xpos[i + 3] - (sw * j), ypos[i + 3], zpos[i + 3]);
					endShape();

					//bottom

					beginShape();
					vertex(xpos[i + 1] - (sw * j), ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] + (bh * j), zpos[i + 2]);
					vertex(xpos[i + 3] - (sw * j), ypos[i + 3], zpos[i + 3]);
					endShape();

					//irregular neg
					//top

					fill(0, 80, 10);

					beginShape();
					vertex(xpos[i + 3] - (sw * j), ypos[i + 3], zpos[i + 3]);
					vertex(xpos[i + 2], ypos[i + 2] - (sh * j), zpos[i + 2]);
					vertex(xpos[i + 4], ypos[i + 4] - (sh * j), zpos[i + 4]);
					endShape();

					//bottom

					beginShape();
					vertex(xpos[i + 3] - (sw * j), ypos[i + 3], zpos[i + 3]);
					vertex(xpos[i + 2], ypos[i + 2] + (bh * j), zpos[i + 2]);
					vertex(xpos[i + 4], ypos[i + 4] + (bh * j), zpos[i + 4]);
					endShape();

				} 
			}
		}

		if(i > 64){

			j = 4;

			if(xpos[i + 1] < xpos[i + 3] + sw || xpos[i + 1] > xpos[i + 3] - sw){

				//regular pos
				//top

				fill(200, 0, 50);

				beginShape();
				vertex(xpos[i + 1] + (sw * (j + 1)), ypos[i + 1], zpos[i + 1]);
				vertex(xpos[i + 2], ypos[i + 2] - (sh * (j + 2)), zpos[i + 2]);
				vertex(xpos[i + 3] + (sw * (j + 3)), ypos[i + 3], zpos[i + 3]);
				endShape();

				//bottom

				beginShape();
				vertex(xpos[i + 1] + (sw * (j + 1)), ypos[i + 1], zpos[i + 1]);
				vertex(xpos[i + 2], ypos[i + 2] + (bh * (j + 4)), zpos[i + 2]);
				vertex(xpos[i + 3] + (sw * (j + 1)), ypos[i + 3], zpos[i + 3]);
				endShape();

				//irregular pos
				//top

				fill(80, 0, 10);

				beginShape();
				vertex(xpos[i + 3] + (sw * (j + 3)), ypos[i + 3], zpos[i + 3]);
				vertex(xpos[i + 2], ypos[i + 2] - (sh * (j + 2)), zpos[i + 2]);
				vertex(xpos[i + 4], ypos[i + 4] - (sh * (j + 4)), zpos[i + 4]);
				endShape();

				//bottom

				beginShape();
				vertex(xpos[i + 3] + (sw * (j + 3)), ypos[i + 3], zpos[i + 3]);
				vertex(xpos[i + 2], ypos[i + 2] + (bh * (j + 4)), zpos[i + 2]);
				vertex(xpos[i + 4], ypos[i + 4] + (bh * (j + 4)), zpos[i + 4]);
				endShape();

				//regular neg
				//top

				fill(0, 200, 50);

				beginShape();
				vertex(xpos[i + 1] - (sw * (j + 1)), ypos[i + 1], zpos[i + 1]);
				vertex(xpos[i + 2], ypos[i + 2] - (sh * (j + 2)), zpos[i + 2]);
				vertex(xpos[i + 3] - (sw * (j + 3)), ypos[i + 3], zpos[i + 3]);
				endShape();

				//bottom

				beginShape();
				vertex(xpos[i + 1] - (sw * (j + 1)), ypos[i + 1], zpos[i + 1]);
				vertex(xpos[i + 2], ypos[i + 2] + (bh * (j + 4)), zpos[i + 2]);
				vertex(xpos[i + 3] - (sw * (j + 1)), ypos[i + 3], zpos[i + 3]);
				endShape();

				//irregular neg
				//top

				fill(0, 80, 10);

				beginShape();
				vertex(xpos[i + 3] - (sw * (j + 3)), ypos[i + 3], zpos[i + 3]);
				vertex(xpos[i + 2], ypos[i + 2] - (sh * (j + 2)), zpos[i + 2]);
				vertex(xpos[i + 4], ypos[i + 4] - (sh * (j + 4)), zpos[i + 4]);
				endShape();

				//bottom

				beginShape();
				vertex(xpos[i + 3] - (sw * (j + 3)), ypos[i + 3], zpos[i + 3]);
				vertex(xpos[i + 2], ypos[i + 2] + (bh * (j + 4)), zpos[i + 2]);
				vertex(xpos[i + 4], ypos[i + 4] + (bh * (j + 4)), zpos[i + 4]);
				endShape();

			}
		}
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
  var z1 = -30, 
      z2 = -60,
      z3 = 20,
      z4 = -15;

      x1 = x1 * 1.75;
      x2 = x2 * 1.75;
      x3 = x3 * 1.75;
      x4 = x4 * 1.75;

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
  	ypos.push(yb);
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

      x1 = x1 * 1.75;
      x2 = x2 * 1.75;
      x3 = x3 * 1.75;
      x4 = x4 * 1.75;

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
  	ypos.push(yb);
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

      x1 = x1 * 1.75;
      x2 = x2 * 1.75;
      x3 = x3 * 1.75;
      x4 = x4 * 1.75;

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
  	ypos.push(yb);
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

      x1 = x1 * 1.75;
      x2 = x2 * 1.75;
      x3 = x3 * 1.75;
      x4 = x4 * 1.75;

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
  	ypos.push(yb);
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

      x1 = x1 * 1.75;
      x2 = x2 * 1.75;
      x3 = x3 * 1.75;
      x4 = x4 * 1.75;

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
  	ypos.push(yb);
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

      x1 = x1 * 1.75;
      x2 = x2 * 1.75;
      x3 = x3 * 1.75;
      x4 = x4 * 1.75;

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
  	ypos.push(yb);
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

      x1 = x1 * 1.75;
      x2 = x2 * 1.75;
      x3 = x3 * 1.75;
      x4 = x4 * 1.75;

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
  	ypos.push(yb);
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

      x1 = x1 * 1.75;
      x2 = x2 * 1.75;
      x3 = x3 * 1.75;
      x4 = x4 * 1.75;

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
  	ypos.push(yb);
  	zpos.push(zb);

  	// print(xpos.length);
  	// noLoop();
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