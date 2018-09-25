
//72 things in them
var xpos = [];
var zpos = [];
var ypos = 50;
var steps = 8;

// var sky = createAudio('../assets/whatwouldiwantsky.mp3');

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

// var noiseVal;
// var xn_increment = 0.01;
// var zn_increment = 0.02;
// var zn_off;
// var yn_off;
// var xn_off;

function setup(){
	createCanvas(w, h, WEBGL);

	// frameRate(20);

	// zn_off = 0;

	for(i = 0; i < 101; i++){

	colours.push(floor(random(255)));

	}
}

function draw(){

	// xn_off = 0;
	// yn_off = 0;

	background(255);

	// noiseDetail(8,0.65);
     
 //    for(var yn = 0; yn < height; yn++){
	 	
 //    	xn_off += xn_increment;
 //    	yn_off = 0;
     
 //    	for(var xn = 0; xn < w; xn++){
 //    		noiseVal = noise(xn_off, yn_off, zn_off);
 //       		stroke(230 + (noiseVal * 25), 230 + (noiseVal * 25), 255);
 //      		yn_off += xn_increment;
 //      		translate(xn, yn, )
 //       		point(xn, yn, noiseVal);
 //     	}
   
 //    }
   
 //    zn_off += zn_increment;

	// rotateX(-PI/4);

	rotateX(-PI/2);

	push();

	stroke(0);
	strokeWeight(5);
	line(-500, 0, 0, 500, 0, 0);
	line(0, -500, 0, 0, 500, 0);
	line(0, 0, -500, 0, 0, 500);
	// stroke(100);
	// line(0, -500, -95, 0, 500, -95);
	// line(0, -500, 95, 0, 500, 95);

	pop();

	orbitControl();

	// ortho(-w/2, w/2, h/2, -h/2, 200);

	// pointLight(250, 250, 250, mouseX - w/2, mouseY - h/2, 50);

	// rotateY(millis()/10000);

	//to origin
	translate(-240, 50, 55);

	stroke(255);
	strokeWeight(0.5);

	// scale(1.5, 1.5, 1.5);

	rotateY(PI/2);
	//to 2nd quad touching xaxis and zaxis
	translate(10, 0, 220); 

	//to 3rd/4th quad, centered on zaxis
	translate(-195, 0, -25);

	snake();

	rotateY(PI);

	translate(-475, 0, -90);

	snake();
}

// function mouseClicked(){

// 	if(fill(r, g, b))
// }

function colour(){

	frameRate(20);

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

function tail(){

	colour();
	fill(r, g, b, 100);

	beginShape();
		vertex(390, 50, 12);
		vertex(395, 42, 10);
		vertex(420, 50, 10);
	endShape(CLOSE);

	colour();
	fill(r, g, b, 100);

	beginShape();
		vertex(390, 50, 5);
		vertex(395, 42, 10);
		vertex(420, 50, 10);
	endShape(CLOSE);

	colour();
	fill(r, g, b, 100);

	beginShape();
		vertex(390, 50, 12);
		vertex(390, 53, 10);
		vertex(420, 50, 10);
	endShape(CLOSE);

	colour();
	fill(r, g, b, 100);

	beginShape();
		vertex(390, 50, 5);
		vertex(390, 53, 10);
		vertex(420, 50, 10);
	endShape(CLOSE);
}

function head(){

	for(var i = 0; i < 15; i++){

	var x = 34;
	var yht = [8, 9, 10, 12, 12, 14, 13, 11];
	var yhb = [-0.5, -1.5, -0.5, -1.5, -3, -4.5, -6, -3];
	var z = 6;
	var yt = ypos - yht[i/2];
	var yyt = ypos - yht[i/2 + 1];
	var yb = ypos - yhb[i/2];
	var yyb = ypos - yhb[i/2 + 1];
	var mid = ypos;

	x += 4 * i;
	z += 3 * (i - 1);

	//nose

	colour();
	fill(r, g, b, 100);

	beginShape();
		vertex(34, mid - 2, -6);
		vertex(34, ypos - yht[0], 0);
		vertex(34, mid - 2, 6);
	endShape(CLOSE);

	colour();
	fill(r, g, b, 100);

	beginShape();
		vertex(34, mid - 2, -6);
		vertex(34, ypos - yhb[0], 0);
		vertex(34, mid - 2, 6);
	endShape(CLOSE);

	//only upside-down triangles draw when i is even

	if(i % 2 == 0){

		colour();
		fill(r, g, b, 100);

		z = 0;

		if(i == 0){

		colour();
		fill(r, g, b, 100);

			//irregular pos

			beginShape();
				vertex(x, yt, 0);
				vertex(x, mid - 2, 6);
				vertex(x + 8, yyt, 0);
			endShape(CLOSE);

			beginShape();
				vertex(x, yb, 0);
				vertex(x, mid - 2, 6);
				vertex(x + 8, yyb, 0);
			endShape(CLOSE);

			//irregular neg

			beginShape();
				vertex(x, yt, 0);
				vertex(x, mid - 2, -6);
				vertex(x + 8, yyt, 0);
			endShape(CLOSE);

			beginShape();
				vertex(x, yb, 0);
				vertex(x, mid - 2, -6);
				vertex(x + 8, yyb, 0);
			endShape(CLOSE);
		}

		if(i == 12){

		colour();
		fill(r, g, b, 100);

			z = 17;

			//irregular pos

			beginShape();
				vertex(x, yt, 0);
				vertex(x + 4, mid, z);
				vertex(x + 8, yyt, 0);
			endShape(CLOSE);

			beginShape();
				vertex(x, yb, 0);
				vertex(x + 4, mid, z);
				vertex(x + 8, yyb, 0);
			endShape(CLOSE);

			//irregular neg

			beginShape();
				vertex(x, yt, 0);
				vertex(x + 4, mid, -z);
				vertex(x + 8, yyt, 0);
			endShape(CLOSE);

			beginShape();
				vertex(x, yb, 0);
				vertex(x + 4, mid, -z);
				vertex(x + 8, yyb, 0);
			endShape(CLOSE);
		}

		if(i == 14){

		colour();
		fill(r, g, b, 100);

			z = 10;

			//irregular pos

			beginShape();
				vertex(x, yt, 0);
				vertex(x + 4, mid, z);
				vertex(x + 8, mid, 0);
			endShape(CLOSE);

			beginShape();
				vertex(x, yb, 0);
				vertex(x + 4, mid, z);
				vertex(x + 8, mid, 0);
			endShape(CLOSE);

			//irregular neg

			beginShape();
				vertex(x, yt, 0);
				vertex(x + 4, mid, -z);
				vertex(x + 8, mid, 0);
			endShape(CLOSE);

			beginShape();
				vertex(x, yb, 0);
				vertex(x + 4, mid, -z);
				vertex(x + 8, mid, 0);
			endShape(CLOSE);
		}

		if(i > 1 && i < 12){

		colour();
		fill(r, g, b, 100);

			//irregular pos

			beginShape();
				vertex(x, yt, z);
				vertex(x + 4, mid, (i * 1.5) + 6);
				vertex(x + 8, yyt, z);
			endShape(CLOSE);

			beginShape();
				vertex(x, yb, z);
				vertex(x + 4, mid, (i * 1.5) + 6);
				vertex(x + 8, yyb, z);
			endShape(CLOSE);

			//irregular neg

			beginShape();
				vertex(x, yt, z);
				vertex(x + 4, mid, (i * -1.5) - 6);
				vertex(x + 8, yyt, z);
			endShape(CLOSE);

			beginShape();
				vertex(x, yb, z);
				vertex(x + 4, mid, (i * -1.5) - 6);
				vertex(x + 8, yyb, z);
			endShape(CLOSE);
		}
	}

	//only right-side-up triangles draw when i is odd

	if(i % 2 !== 0){

		colour();
		fill(r, g, b, 100);

		y = mid;
		yyt = ypos - yht[(i + 1)/2];
		yyb = ypos - yhb[(i + 1)/2];

		if(i == 1){

		colour();
		fill(r, g, b, 100);

			y = mid - 2;

			//regular pos

			beginShape();
				vertex(x - 4, y, 6);
				vertex(x + 4, yyt, 0);
				vertex(x + 8, mid, z + 3);
			endShape(CLOSE);

			beginShape();
				vertex(x - 4, y, 6);
				vertex(x + 4, yyb, 0);
				vertex(x + 8, mid, z + 3);
			endShape(CLOSE);

			//regular neg

			beginShape();
				vertex(x - 4, y, -6);
				vertex(x + 4, yyt, 0);
				vertex(x + 8, mid, -z - 3);
			endShape(CLOSE);

			beginShape();
				vertex(x - 4, y, -6);
				vertex(x + 4, yyb, 0);
				vertex(x + 8, mid, -z - 3);
			endShape(CLOSE);
		}

		if(i == 11){

		colour();
		fill(r, g, b, 100);

			z = 21

			//regular pos

			beginShape();
				vertex(x, y, z);
				vertex(x + 4, yyt, 0);
				vertex(x + 8, mid, z - 4);
			endShape(CLOSE);

			beginShape();
				vertex(x, y, z);
				vertex(x + 4, yyb, 0);
				vertex(x + 8, mid, z - 4);
			endShape(CLOSE);

			//regular neg

			beginShape();
				vertex(x, y, -z);
				vertex(x + 4, yyt, 0);
				vertex(x + 8, mid, -z + 4);
			endShape(CLOSE);

			beginShape();
				vertex(x, y, z);
				vertex(x + 4, yyb, 0);
				vertex(x + 8, mid, -z + 4);
			endShape(CLOSE);
		}

		if(i == 13){

		colour();
		fill(r, g, b, 100);

			z = 17

			//regular pos

			beginShape();
				vertex(x, y, z);
				vertex(x + 4, yyt, 0);
				vertex(x + 8, mid, z - 7);
			endShape(CLOSE);

			beginShape();
				vertex(x, y, z);
				vertex(x + 4, yyb, 0);
				vertex(x + 8, mid, z - 7);
			endShape(CLOSE);

			//regular neg

			beginShape();
				vertex(x, y, -z);
				vertex(x + 4, yyt, 0);
				vertex(x + 8, mid, -z + 7);
			endShape(CLOSE);

			beginShape();
				vertex(x, y, z);
				vertex(x + 4, yyb, 0);
				vertex(x + 8, mid, -z + 7);
			endShape(CLOSE);
		}

		if(i > 1 && i < 11){

		colour();
		fill(r, g, b, 100);

			z = 6 + (1.5 * (i - 1));

			//regular pos

			beginShape();
				vertex(x, y, z);
				vertex(x + 4, yyt, 0);
				vertex(x + 8, mid, z + 3);
			endShape(CLOSE);

			beginShape();
				vertex(x, y, z);
				vertex(x + 4, yyb, 0);
				vertex(x + 8, mid, z + 3);
			endShape(CLOSE);

			//regular neg

			beginShape();
				vertex(x, y, -z);
				vertex(x + 4, yyt, 0);
				vertex(x + 8, mid, -z - 3);
			endShape(CLOSE);

			beginShape();
				vertex(x, y, z);
				vertex(x + 4, yyb, 0);
				vertex(x + 8, mid, -z - 3);
			endShape(CLOSE);
		}
	}
}
}

function triangles1(){

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

	for(var i = 7; i < 66; i += 2){

		//1st part of the snake, diameter grows
		if(i < 25){

		colour();
		fill(r, g, b, 100);

				//regular pos
				//top
	
				beginShape();
				vertex(xpos[i + 1] + (sw * (i + 1)), ypos, zpos[i + 1]);
				vertex(xpos[i + 2], ypos - (sh * i), zpos[i + 2]);
				vertex(xpos[i + 3] + (sw * (i + 3)), ypos, zpos[i + 3]);
				endShape(CLOSE);

				//bottom

				beginShape();
				vertex(xpos[i + 1] + (sw * (i + 1)), ypos, zpos[i + 1]);
				vertex(xpos[i + 2], ypos + (bh * i), zpos[i + 2]);
				vertex(xpos[i + 3] + (sw * (i + 1)), ypos, zpos[i + 3]);
				endShape(CLOSE);

		colour();
		fill(r, g, b, 100);

				//irregular pos
				//top

				beginShape();
				vertex(xpos[i + 3] + (sw * (i + 3)), ypos, zpos[i + 3]);
				vertex(xpos[i + 2], ypos - (sh * i), zpos[i + 2]);
				vertex(xpos[i + 4], ypos - (sh * (i + 2)), zpos[i + 4]);
				endShape(CLOSE);

				//bottom

				beginShape();
				vertex(xpos[i + 3] + (sw * (i + 3)), ypos, zpos[i + 3]);
				vertex(xpos[i + 2], ypos + (bh * i), zpos[i + 2]);
				vertex(xpos[i + 4], ypos + (bh * (i + 4)), zpos[i + 4]);
				endShape(CLOSE);

		colour();
		fill(r, g, b, 100);

				//regular neg
				//top

				beginShape();
				vertex(xpos[i + 1] - (sw * (i + 1)), ypos, zpos[i + 1]);
				vertex(xpos[i + 2], ypos - (sh * i), zpos[i + 2]);
				vertex(xpos[i + 3] - (sw * (i + 3)), ypos, zpos[i + 3]);
				endShape(CLOSE);

				//bottom

				beginShape();
				vertex(xpos[i + 1] - (sw * (i + 1)), ypos, zpos[i + 1]);
				vertex(xpos[i + 2], ypos + (bh * (i + 4)), zpos[i + 2]);
				vertex(xpos[i + 3] - (sw * (i + 1)), ypos, zpos[i + 3]);
				endShape(CLOSE);

		colour();
		fill(r, g, b, 100);

				//irregular neg
				//top

				beginShape();
				vertex(xpos[i + 3] - (sw * (i + 3)), ypos, zpos[i + 3]);
				vertex(xpos[i + 2], ypos - (sh * i), zpos[i + 2]);
				vertex(xpos[i + 4], ypos - (sh * (i + 2)), zpos[i + 4]);
				endShape(CLOSE);

				//bottom

				beginShape();
				vertex(xpos[i + 3] - (sw * (i + 3)), ypos, zpos[i + 3]);
				vertex(xpos[i + 2], ypos + (bh * (i + 4)), zpos[i + 2]);
				vertex(xpos[i + 4], ypos + (bh * (i + 4)), zpos[i + 4]);
				endShape(CLOSE);

			//corner solution

			if(zpos[i + 1] > zpos[i + 3] - 10 && zpos[i + 1] < zpos[i + 3] + 10 || zpos[i + 3] > zpos[i + 1] + 10 && zpos[i + 3] < zpos[i + 1] - 10){

				//2nd corner from the head
				if(zpos[i + 1] > -60 && zpos[i + 1] < -40 || zpos[i + 3] > -60 && zpos[i + 3] < -40){

		colour();
		fill(r, g, b, 100);

					//regular neg
					//top

					beginShape();
					vertex(xpos[i + 1] - (sw * (i + 1)), ypos, zpos[i + 1]);
					vertex(xpos[i + 2], ypos - (sh * i), zpos[i + 2]);
					vertex(xpos[i + 2], ypos, zpos[i + 2] + (sw * (i + 3))/1.5);
					endShape(CLOSE);

					//bottom

					beginShape();
					vertex(xpos[i + 1] - (sw * (i + 1)), ypos, zpos[i + 1]);
					vertex(xpos[i + 2], ypos + (bh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 2], ypos, zpos[i + 2] + (sw * (i + 3))/1.5);
					endShape(CLOSE);

		colour();
		fill(r, g, b, 100);

					//regular pos
					//top

					beginShape();
					vertex(xpos[i + 2], ypos, zpos[i + 2] + (sw * (i + 3))/1.5);
					vertex(xpos[i + 2], ypos - (sh * i), zpos[i + 2]);
					vertex(xpos[i + 3] + (sw * i), ypos, zpos[i + 3]);
					endShape(CLOSE);

					//bottom

					beginShape();
					vertex(xpos[i + 2], ypos, zpos[i + 2] + (sw * (i + 3))/1.5);
					vertex(xpos[i + 2], ypos + (bh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 3] + (sw * i), ypos, zpos[i + 3]);
					endShape(CLOSE);
				}

				//1st corner from the head
				if(zpos[i + 1] < -60 || zpos[i + 3] < -60){

		colour();
		fill(r, g, b, 100);

					beginShape();
					vertex(xpos[i + 1] - (sw * (i + 1)), ypos, zpos[i + 1]);
					vertex(xpos[i + 2], ypos - (sh * i), zpos[i + 2]);
					vertex(xpos[i + 2], ypos, zpos[i + 2] - (sw * (i + 3))/1.5);
					endShape(CLOSE);

					beginShape();
					vertex(xpos[i + 1] - (sw * (i + 1)), ypos, zpos[i + 1]);
					vertex(xpos[i + 2], ypos + (bh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 2], ypos, zpos[i + 2] - (sw * (i + 3))/1.5);
					endShape(CLOSE);

		colour();
		fill(r, g, b, 100);

					beginShape();
					vertex(xpos[i + 2], ypos, zpos[i + 2] - (sw * (i + 3))/1.5);
					vertex(xpos[i + 2], ypos - (sh * i), zpos[i + 2]);
					vertex(xpos[i + 3] + (sw * (i + 3)), ypos, zpos[i + 3]);
					endShape(CLOSE);

					beginShape();
					vertex(xpos[i + 2], ypos, zpos[i + 2] - (sw * (i + 3))/1.5);
					vertex(xpos[i + 2], ypos + (bh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 3] + (sw * (i + 3)), ypos, zpos[i + 3]);
					endShape(CLOSE);
				}

		// 		//neck corners
		// 		if(zpos[i + 1] > -40 || zpos[i + 3] > -40){

		// colour();
		// fill(r, g, b, 100);

		// 			fill(0, 200, 50);

		// 			beginShape();
		// 			vertex(xpos[i + 1] - (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
		// 			vertex(xpos[i + 2], ypos[i + 2] - (sh * i), zpos[i + 2]);
		// 			vertex(xpos[i + 2], ypos[i + 3], zpos[i + 1] + (sw * (i + 3))/3);
		// 			endShape();

		// 			beginShape();
		// 			vertex(xpos[i + 1] - (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
		// 			vertex(xpos[i + 2], ypos[i + 2] + (bh * (i + 2)), zpos[i + 2]);
		// 			vertex(xpos[i + 2], ypos[i + 3], zpos[i + 1] + (sw * (i + 3))/3);
		// 			endShape();

		// colour();
		// fill(r, g, b, 100);

		// 			fill(200, 0, 50);

		// 			beginShape();
		// 			vertex(xpos[i + 2], ypos[i + 1], zpos[i + 1] + (sw * (i + 3))/3);
		// 			vertex(xpos[i + 2], ypos[i + 2] - (sh * i), zpos[i + 2]);
		// 			vertex(xpos[i + 3] + (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
		// 			endShape();

		// 			beginShape();
		// 			vertex(xpos[i + 2], ypos[i + 1], zpos[i + 1] + (sw * (i + 3))/3);
		// 			vertex(xpos[i + 2], ypos[i + 2] + (bh * (i + 2)), zpos[i + 2]);
		// 			vertex(xpos[i + 3] + (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
		// 			endShape();
		// 		}
			}
		}

		//middle section of the snake, doesn't change in diameter
		if(i > 24 && i < 50){

		colour();
		fill(r, g, b, 100);

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

		colour();
		fill(r, g, b, 100);

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

		colour();
		fill(r, g, b, 100);

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

		colour();
		fill(r, g, b, 100);

			beginShape();
			vertex(xpos[i + 3] - lsw, ypos, zpos[i + 3]);
			vertex(xpos[i + 2], ypos - lsh, zpos[i + 2]);
			vertex(xpos[i + 4], ypos - lsh, zpos[i + 4]);
			endShape(CLOSE);

			vertex(xpos[i + 3] - lsw, ypos, zpos[i + 3]);
			vertex(xpos[i + 2], ypos + lbh, zpos[i + 2]);
			vertex(xpos[i + 4], ypos + lbh, zpos[i + 4]);
			endShape(CLOSE);

			//corner solution

			if(zpos[i + 1] > zpos[i + 3] - 10 && zpos[i + 1] < zpos[i + 3] + 10 || zpos[i + 3] > zpos[i + 1] + 10 && zpos[i + 3] < zpos[i + 1] - 10){

				//4th corner from the head
				if(zpos[i + 1] > -40 || zpos[i + 3] > -40){

		colour();
		fill(r, g, b, 100);

					beginShape();
					vertex(xpos[i + 1] - lsw, ypos, zpos[i + 1]);
					vertex(xpos[i + 2], ypos - lsh, zpos[i + 2]);
					vertex(xpos[i + 2], ypos, zpos[i + 1] + lsw/3);
					endShape(CLOSE);

					beginShape();
					vertex(xpos[i + 1] - lsw, ypos, zpos[i + 1]);
					vertex(xpos[i + 2], ypos + lbh, zpos[i + 2]);
					vertex(xpos[i + 2], ypos, zpos[i + 1] + lsw/3);
					endShape(CLOSE);

		colour();
		fill(r, g, b, 100);

					beginShape();
					vertex(xpos[i + 2], ypos, zpos[i + 1] + lsw/3);
					vertex(xpos[i + 2], ypos - lsh, zpos[i + 2]);
					vertex(xpos[i + 3] + lsw, ypos, zpos[i + 3]);
					endShape(CLOSE);

					beginShape();
					vertex(xpos[i + 2], ypos, zpos[i + 1] + lsw/3);
					vertex(xpos[i + 2], ypos + lbh, zpos[i + 2]);
					vertex(xpos[i + 3] + lsw, ypos, zpos[i + 3]);
					endShape(CLOSE);
				}

				//3rd corner from the head
				if(zpos[i + 1] < -60 || zpos[i + 3] < -60){

		colour();
		fill(r, g, b, 100);

					beginShape();
					vertex(xpos[i + 1] - lsw, ypos, zpos[i + 1]);
					vertex(xpos[i + 2], ypos - lsh, zpos[i + 2]);
					vertex(xpos[i + 2], ypos, zpos[i + 2] - lsw/1.5);
					endShape(CLOSE);

					beginShape();
					vertex(xpos[i + 1] - lsw, ypos, zpos[i + 1]);
					vertex(xpos[i + 2], ypos + lbh, zpos[i + 2]);
					vertex(xpos[i + 2], ypos, zpos[i + 2] - lsw/1.5);
					endShape(CLOSE);

		colour();
		fill(r, g, b, 100);

					beginShape();
					vertex(xpos[i + 2], ypos, zpos[i + 2] - lsw/1.5);
					vertex(xpos[i + 2], ypos - lsh, zpos[i + 2]);
					vertex(xpos[i + 3] + lsw, ypos, zpos[i + 3]);
					endShape(CLOSE);

					beginShape();
					vertex(xpos[i + 2], ypos, zpos[i + 2] - lsw/1.5);
					vertex(xpos[i + 2], ypos + lbh, zpos[i + 2]);
					vertex(xpos[i + 3] + lsw, ypos, zpos[i + 3]);
					endShape(CLOSE);
				}
			}
		}

		//tail end of the snake, diameter shrinks
		if(i > 48 && i < 66){

			//the snake needs to get smaller from body to tail
			//at the same rate as it grew from neck to body

			for(var j = 24; j > 7; j -= 2){

				i+=2;

		colour();
		fill(r, g, b, 100);

				//regular pos
				//top

				beginShape();
				vertex(xpos[i + 1] + (sw * (j + 1)), ypos, zpos[i + 1]);
				vertex(xpos[i + 2], ypos - (sh * j), zpos[i + 2]);
				vertex(xpos[i + 3] + (sw * j), ypos, zpos[i + 3]);
				endShape(CLOSE);

				//bottom

				beginShape();
				vertex(xpos[i + 1] + (sw * (j + 1)), ypos, zpos[i + 1]);
				vertex(xpos[i + 2], ypos + (bh * j), zpos[i + 2]);
				vertex(xpos[i + 3] + (sw * j), ypos, zpos[i + 3]);
				endShape(CLOSE);

		colour();
		fill(r, g, b, 100);

				//irregular pos
				//top

				beginShape();
				vertex(xpos[i + 3] + (sw * j), ypos, zpos[i + 3]);
				vertex(xpos[i + 2], ypos - (sh * j), zpos[i + 2]);
				vertex(xpos[i + 4], ypos - (sh * (j - 2)), zpos[i + 4]);
				endShape(CLOSE);

				//bottom

				beginShape();
				vertex(xpos[i + 3] + (sw * j), ypos, zpos[i + 3]);
				vertex(xpos[i + 2], ypos + (bh * j), zpos[i + 2]);
				vertex(xpos[i + 4], ypos + (bh * (j - 2)), zpos[i + 4]);
				endShape(CLOSE);

		colour();
		fill(r, g, b, 100);

				//regular neg
				//top

				beginShape();
				vertex(xpos[i + 1] - (sw * (j + 1)), ypos, zpos[i + 1]);
				vertex(xpos[i + 2], ypos - (sh * j), zpos[i + 2]);
				vertex(xpos[i + 3] - (sw * j), ypos, zpos[i + 3]);
				endShape(CLOSE);

				//bottom

				beginShape();
				vertex(xpos[i + 1] - (sw * (j + 1)), ypos, zpos[i + 1]);
				vertex(xpos[i + 2], ypos + (bh * j), zpos[i + 2]);
				vertex(xpos[i + 3] - (sw * j), ypos, zpos[i + 3]);
				endShape(CLOSE);

		colour();
		fill(r, g, b, 100);

				//irregular neg
				//top

				beginShape();
				vertex(xpos[i + 3] - (sw * j), ypos, zpos[i + 3]);
				vertex(xpos[i + 2], ypos - (sh * j), zpos[i + 2]);
				vertex(xpos[i + 4], ypos - (sh * (j - 2)), zpos[i + 4]);
				endShape(CLOSE);

				//bottom

				beginShape();
				vertex(xpos[i + 3] - (sw * j), ypos, zpos[i + 3]);
				vertex(xpos[i + 2], ypos + (bh * j), zpos[i + 2]);
				vertex(xpos[i + 4], ypos + (bh * (j - 2)), zpos[i + 4]);
				endShape(CLOSE);

				//corner solution

				if(zpos[i + 1] > zpos[i + 3] - 10 && zpos[i + 1] < zpos[i + 3] + 10 || zpos[i + 3] > zpos[i + 1] + 10 && zpos[i + 3] < zpos[i + 1] - 10){

					//7th corner from the head
					if(zpos[i + 1] > -10 && zpos[i + 1] < 5 || zpos[i + 3] > -10 && zpos[i + 3] < 5){

		colour();
		fill(r, g, b, 100);

						beginShape();
						vertex(xpos[i + 1] - (sw * (j + 1)), ypos, zpos[i + 1]);
						vertex(xpos[i + 2], ypos - (sh * j), zpos[i + 2]);
						vertex(xpos[i + 2], ypos, zpos[i + 1] - (sw * (j + 3)));
						endShape(CLOSE);

						beginShape();
						vertex(xpos[i + 1] - (sw * (j + 1)), ypos, zpos[i + 1]);
						vertex(xpos[i + 2], ypos + (bh * j), zpos[i + 2]);
						vertex(xpos[i + 2], ypos, zpos[i + 1] - (sw * (j + 3)));
						endShape(CLOSE);

		colour();
		fill(r, g, b, 100);

						beginShape();
						vertex(xpos[i + 2], ypos, zpos[i + 1] - (sw * (j + 3)));
						vertex(xpos[i + 2], ypos - (sh * j), zpos[i + 2]);
						vertex(xpos[i + 3] + (sw * (j + 3)), ypos, zpos[i + 3]);
						endShape(CLOSE);

						beginShape();
						vertex(xpos[i + 2], ypos, zpos[i + 1] - (sw * (j + 3)));
						vertex(xpos[i + 2], ypos + (bh * j), zpos[i + 2]);
						vertex(xpos[i + 3] + (sw * (j + 3)), ypos, zpos[i + 3]);
						endShape(CLOSE);
					}

					//6th corner from the head
					if(zpos[i + 1] > 5 || zpos[i + 3] > 5){

		colour();
		fill(r, g, b, 100);

						beginShape();
						vertex(xpos[i + 1] - (sw * (j + 1)), ypos, zpos[i + 1]);
						vertex(xpos[i + 2], ypos - (sh * j), zpos[i + 2]);
						vertex(xpos[i + 2], ypos, zpos[i + 1] + (sw * (j + 3))/2);
						endShape(CLOSE);

						beginShape();
						vertex(xpos[i + 1] - (sw * (j + 1)), ypos, zpos[i + 1]);
						vertex(xpos[i + 2], ypos + (bh * j), zpos[i + 2]);
						vertex(xpos[i + 2], ypos, zpos[i + 1] + (sw * (j + 3))/2);
						endShape(CLOSE);

		colour();
		fill(r, g, b, 100);

						beginShape();
						vertex(xpos[i + 2], ypos, zpos[i + 1] + (sw * (j + 3))/2);
						vertex(xpos[i + 2], ypos - (sh * j), zpos[i + 2]);
						vertex(xpos[i + 3] + (sw * (j + 3)), ypos, zpos[i + 3]);
						endShape(CLOSE);

						beginShape();
						vertex(xpos[i + 2], ypos, zpos[i + 1] + (sw * (j + 3))/2);
						vertex(xpos[i + 2], ypos + (bh * j), zpos[i + 2]);
						vertex(xpos[i + 3] + (sw * (j + 3)), ypos, zpos[i + 3]);
						endShape(CLOSE);
					}

					//5th corner from the head
					if(zpos[i + 1] < -60 || zpos[i + 3] < -60){

		colour();
		fill(r, g, b, 100);

						beginShape();
						vertex(xpos[i + 1] - (sw * (j + 1)), ypos, zpos[i + 1]);
						vertex(xpos[i + 2], ypos - (sh * j), zpos[i + 2]);
						vertex(xpos[i + 2], ypos, zpos[i + 2] - (sw * (j + 3))/1.5);
						endShape(CLOSE);

						beginShape();
						vertex(xpos[i + 1] - (sw * (j + 1)), ypos, zpos[i + 1]);
						vertex(xpos[i + 2], ypos + (bh * j), zpos[i + 2]);
						vertex(xpos[i + 2], ypos, zpos[i + 2] - (sw * (j + 3))/1.5);
						endShape(CLOSE);

		colour();
		fill(r, g, b, 100);

						beginShape();
						vertex(xpos[i + 2], ypos, zpos[i + 2] - (sw * (j + 3))/1.5);
						vertex(xpos[i + 2], ypos - (sh * j), zpos[i + 2]);
						vertex(xpos[i + 3] + (sw * j), ypos, zpos[i + 3]);
						endShape(CLOSE);

						beginShape();
						vertex(xpos[i + 2], ypos, zpos[i + 2] - (sw * (j + 3))/1.5);
						vertex(xpos[i + 2], ypos + (bh * j), zpos[i + 2]);
						vertex(xpos[i + 3] + (sw * j), ypos, zpos[i + 3]);
						endShape(CLOSE);
					}
				}
			}
		}
	}
}


//this series of bezier curves maps the twisty shape of the snake
//the coordinates of each bezier are used to draw the triangles that make up
//the snake's body
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

      x1 = x1 * 1.75;
      x2 = x2 * 1.75;
      x3 = x3 * 1.75;
      x4 = x4 * 1.75;

  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);

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

      x1 = x1 * 1.75;
      x2 = x2 * 1.75;
      x3 = x3 * 1.75;
      x4 = x4 * 1.75;

  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);

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

      x1 = x1 * 1.75;
      x2 = x2 * 1.75;
      x3 = x3 * 1.75;
      x4 = x4 * 1.75;

  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);

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

      x1 = x1 * 1.75;
      x2 = x2 * 1.75;
      x3 = x3 * 1.75;
      x4 = x4 * 1.75;

  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);

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

      x1 = x1 * 1.75;
      x2 = x2 * 1.75;
      x3 = x3 * 1.75;
      x4 = x4 * 1.75;

  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);

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

      x1 = x1 * 1.75;
      x2 = x2 * 1.75;
      x3 = x3 * 1.75;
      x4 = x4 * 1.75;

  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);

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

      x1 = x1 * 1.75;
      x2 = x2 * 1.75;
      x3 = x3 * 1.75;
      x4 = x4 * 1.75;

  // bezier(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4);

  for(var i = 0; i <= steps; i++){
  	var t = i / steps;
  	var xb = bezierPoint(x1, x2, x3, x4, t);
  	var zb = bezierPoint(z1, z2, z3, z4, t);

  	// translate(xb, yb, zb);
  	// sphere(2);
  	// translate(-xb, -yb, -zb);

  	xpos.push(xb);
  	zpos.push(zb);

  	// print(xpos.length);
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

// https://books.google.ca/books?id=vd1PDwAAQBAJ&pg=PA149&lpg=PA149&dq=how+to+get+a+random+whole+number+p5&source=bl&ots=YePWb2Dwad&sig=f4VrQOnoaHa9aRWey6wcpI2Zj6U&hl=en&sa=X&ved=2ahUKEwjR8pez39LdAhXyuFkKHeLiDf8Q6AEwDXoECAMQAQ#v=onepage&q=how%20to%20get%20a%20random%20whole%20number%20p5&f=false
// how to use "floor" function

// https://forum.processing.org/two/discussion/2674/changing-color-of-each-shape-in-an-iteration
// setup for pulling colours from an array (though not exactly what I needed)

// https://p5js.org/reference/#/p5/frameRate
// trying to slow down the flashing colours

// https://www.youtube.com/watch?v=YoXFmo50YBI
// What Would I Want? Sky by Animal Collective
// https://www.youtube.com/music_policies?o=U&ar=1
// policy for use of the song