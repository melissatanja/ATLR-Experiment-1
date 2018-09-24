
//72 things in them
var xpos = [];
var zpos = [];
var ypos = [];
var steps = 8;

var w = 1000;
var h = 1000;

var x = 34;
var yht = [-16, -19, -21, -24, -24, -28, -26, -22];
var yhb = [6, 6, 1, 3, 3, 1, 3, 6];
var z = 6;

function setup(){
	createCanvas(w, h, WEBGL);

	// var r = random(255);
	// var g = random(255);
	// var b = random(255);

	// var colours = [];

	// for(i = 0; i < 100; i++){

	// 	var colour = fill(r, g, b, 100);
	// 	colours.push(new colour);
	// }
}

function draw(){

	background(255);
	orbitControl();

	var c1 = color(random(255), random(255), random(255), 100);
	var c2 = color(random(255), random(255), random(255), 100);

	var colour = lerpColor(c1, c2, random(1));

	// translate(-250, 0, 0);

	scale(3, 3, 3);

	rotateY(PI/2);

	snake();

	rotateY(PI);

	translate(-450, 0, -100);

	snake();
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

	beginShape();
		vertex(390, 50, 12);
		vertex(395, 42, 10);
		vertex(420, 50, 10);
	endShape(CLOSE);

	beginShape();
		vertex(390, 50, 5);
		vertex(395, 42, 10);
		vertex(420, 50, 10);
	endShape(CLOSE);

	beginShape();
		vertex(390, 50, 12);
		vertex(390, 53, 10);
		vertex(420, 50, 10);
	endShape(CLOSE);

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
	var yt = ypos[0] - yht[i/2];
	var yyt = ypos[0] - yht[i/2 + 1];
	var yb = ypos[0] - yhb[i/2];
	var yyb = ypos[0] - yhb[i/2 + 1];
	var mid = ypos[0] - 6;

	x += 4 * i;
	z += 3 * (i - 1);

	//nose

	beginShape();
		vertex(34, mid - 2, -6);
		vertex(34, ypos[0] - yht[0], 0);
		vertex(34, mid - 2, 6);
	endShape(CLOSE);

	beginShape();
		vertex(34, mid - 2, -6);
		vertex(34, ypos[0] - yhb[0], 0);
		vertex(34, mid - 2, 6);
	endShape(CLOSE);

	//only upside-down triangles draw when i is even

	if(i % 2 == 0){

		z = 0;

		if(i == 0){

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

		y = mid;
		yyt = ypos[0] - yht[(i + 1)/2];
		yyb = ypos[0] - yhb[(i + 1)/2];

		if(i == 1){

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

				//regular pos
				//top
	
				beginShape();
				vertex(xpos[i + 1] + (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
				vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
				vertex(xpos[i + 3] + (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
				endShape(CLOSE);

				//bottom

				beginShape();
				vertex(xpos[i + 1] + (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
				vertex(xpos[i + 2], ypos[i + 2] + (bh * (i + 2)), zpos[i + 2]);
				vertex(xpos[i + 3] + (sw * (i + 1)), ypos[i + 3], zpos[i + 3]);
				endShape(CLOSE);

				//irregular pos
				//top

				beginShape();
				vertex(xpos[i + 3] + (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
				vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
				vertex(xpos[i + 4], ypos[i + 4] - (sh * (i + 4)), zpos[i + 4]);
				endShape(CLOSE);

				//bottom

				beginShape();
				vertex(xpos[i + 3] + (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
				vertex(xpos[i + 2], ypos[i + 2] + (bh * (i + 2)), zpos[i + 2]);
				vertex(xpos[i + 4], ypos[i + 4] + (bh * (i + 4)), zpos[i + 4]);
				endShape(CLOSE);

				//regular neg
				//top

				beginShape();
				vertex(xpos[i + 1] - (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
				vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
				vertex(xpos[i + 3] - (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
				endShape(CLOSE);

				//bottom

				beginShape();
				vertex(xpos[i + 1] - (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
				vertex(xpos[i + 2], ypos[i + 2] + (bh * (i + 4)), zpos[i + 2]);
				vertex(xpos[i + 3] - (sw * (i + 1)), ypos[i + 3], zpos[i + 3]);
				endShape(CLOSE);

				//irregular neg
				//top

				beginShape();
				vertex(xpos[i + 3] - (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
				vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
				vertex(xpos[i + 4], ypos[i + 4] - (sh * (i + 4)), zpos[i + 4]);
				endShape(CLOSE);

				//bottom

				beginShape();
				vertex(xpos[i + 3] - (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
				vertex(xpos[i + 2], ypos[i + 2] + (bh * (i + 4)), zpos[i + 2]);
				vertex(xpos[i + 4], ypos[i + 4] + (bh * (i + 4)), zpos[i + 4]);
				endShape(CLOSE);

			//corner solution

			if(zpos[i + 1] > zpos[i + 3] - 10 && zpos[i + 1] < zpos[i + 3] + 10 || zpos[i + 3] > zpos[i + 1] + 10 && zpos[i + 3] < zpos[i + 1] - 10){

				//2nd corner from the head
				if(zpos[i + 1] > -60 && zpos[i + 1] < -40 || zpos[i + 3] > -60 && zpos[i + 3] < -40){

					//regular neg
					//top

					beginShape();
					vertex(xpos[i + 1] - (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 2], ypos[i + 3], zpos[i + 2] + (sw * (i + 3))/1.5);
					endShape(CLOSE);

					//bottom

					beginShape();
					vertex(xpos[i + 1] - (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] + (bh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 2], ypos[i + 3], zpos[i + 2] + (sw * (i + 3))/1.5);
					endShape(CLOSE);

					//regular pos
					//top

					beginShape();
					vertex(xpos[i + 2], ypos[i + 1], zpos[i + 2] + (sw * (i + 3))/1.5);
					vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 3] + (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
					endShape(CLOSE);

					//bottom

					beginShape();
					vertex(xpos[i + 2], ypos[i + 1], zpos[i + 2] + (sw * (i + 3))/1.5);
					vertex(xpos[i + 2], ypos[i + 2] + (bh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 3] + (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
					endShape(CLOSE);
				}

				//1st corner from the head
				if(zpos[i + 1] < -60 || zpos[i + 3] < -60){

					beginShape();
					vertex(xpos[i + 1] - (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 2], ypos[i + 3], zpos[i + 2] - (sw * (i + 3))/1.5);
					endShape(CLOSE);

					beginShape();
					vertex(xpos[i + 1] - (sw * (i + 1)), ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] + (bh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 2], ypos[i + 3], zpos[i + 2] - (sw * (i + 3))/1.5);
					endShape(CLOSE);

					

					beginShape();
					vertex(xpos[i + 2], ypos[i + 1], zpos[i + 2] - (sw * (i + 3))/1.5);
					vertex(xpos[i + 2], ypos[i + 2] - (sh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 3] + (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
					endShape(CLOSE);

					beginShape();
					vertex(xpos[i + 2], ypos[i + 1], zpos[i + 2] - (sw * (i + 3))/1.5);
					vertex(xpos[i + 2], ypos[i + 2] + (bh * (i + 2)), zpos[i + 2]);
					vertex(xpos[i + 3] + (sw * (i + 3)), ypos[i + 3], zpos[i + 3]);
					endShape(CLOSE);
				}
			}
		}

		//middle section of the snake, doesn't change in diameter
		if(i > 24 && i < 50){

			beginShape();
			vertex(xpos[i + 1] + lsw, ypos[i + 1], zpos[i + 1]);
			vertex(xpos[i + 2], ypos[i + 2] - lsh, zpos[i + 2]);
			vertex(xpos[i + 3] + lsw, ypos[i + 3], zpos[i + 3]);
			endShape(CLOSE);

			beginShape();
			vertex(xpos[i + 1] + lsw, ypos[i + 1], zpos[i + 1]);
			vertex(xpos[i + 2], ypos[i + 2] + lbh, zpos[i + 2]);
			vertex(xpos[i + 3] + lsw, ypos[i + 3], zpos[i + 3]);
			endShape(CLOSE);

			beginShape();
			vertex(xpos[i + 3] + lsw, ypos[i + 3], zpos[i + 3]);
			vertex(xpos[i + 2], ypos[i + 2] - lsh, zpos[i + 2]);
			vertex(xpos[i + 4], ypos[i + 4] - lsh, zpos[i + 4]);
			endShape(CLOSE);

			beginShape();
			vertex(xpos[i + 3] + lsw, ypos[i + 3], zpos[i + 3]);
			vertex(xpos[i + 2], ypos[i + 2] + lbh, zpos[i + 2]);
			vertex(xpos[i + 4], ypos[i + 4] + lbh, zpos[i + 4]);
			endShape(CLOSE);

			beginShape();
			vertex(xpos[i + 1] - lsw, ypos[i + 1], zpos[i + 1]);
			vertex(xpos[i + 2], ypos[i + 2] - lsh, zpos[i + 2]);
			vertex(xpos[i + 3] - lsw, ypos[i + 3], zpos[i + 3]);
			endShape(CLOSE);

			beginShape();
			vertex(xpos[i + 1] - lsw, ypos[i + 1], zpos[i + 1]);
			vertex(xpos[i + 2], ypos[i + 2] + lbh, zpos[i + 2]);
			vertex(xpos[i + 3] - lsw, ypos[i + 3], zpos[i + 3]);
			endShape(CLOSE);

			beginShape();
			vertex(xpos[i + 3] - lsw, ypos[i + 3], zpos[i + 3]);
			vertex(xpos[i + 2], ypos[i + 2] - lsh, zpos[i + 2]);
			vertex(xpos[i + 4], ypos[i + 4] - lsh, zpos[i + 4]);
			endShape(CLOSE);

			vertex(xpos[i + 3] - lsw, ypos[i + 3], zpos[i + 3]);
			vertex(xpos[i + 2], ypos[i + 2] + lbh, zpos[i + 2]);
			vertex(xpos[i + 4], ypos[i + 4] + lbh, zpos[i + 4]);
			endShape(CLOSE);

			//corner solution

			if(zpos[i + 1] > zpos[i + 3] - 10 && zpos[i + 1] < zpos[i + 3] + 10 || zpos[i + 3] > zpos[i + 1] + 10 && zpos[i + 3] < zpos[i + 1] - 10){

				//4th corner from the head
				if(zpos[i + 1] > -40 || zpos[i + 3] > -40){

					beginShape();
					vertex(xpos[i + 1] - lsw, ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] - lsh, zpos[i + 2]);
					vertex(xpos[i + 2], ypos[i + 3], zpos[i + 1] + lsw/3);
					endShape(CLOSE);

					beginShape();
					vertex(xpos[i + 1] - lsw, ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] + lbh, zpos[i + 2]);
					vertex(xpos[i + 2], ypos[i + 3], zpos[i + 1] + lsw/3);
					endShape(CLOSE);

					beginShape();
					vertex(xpos[i + 2], ypos[i + 1], zpos[i + 1] + lsw/3);
					vertex(xpos[i + 2], ypos[i + 2] - lsh, zpos[i + 2]);
					vertex(xpos[i + 3] + lsw, ypos[i + 3], zpos[i + 3]);
					endShape(CLOSE);

					beginShape();
					vertex(xpos[i + 2], ypos[i + 1], zpos[i + 1] + lsw/3);
					vertex(xpos[i + 2], ypos[i + 2] + lbh, zpos[i + 2]);
					vertex(xpos[i + 3] + lsw, ypos[i + 3], zpos[i + 3]);
					endShape(CLOSE);
				}

				//3rd corner from the head
				if(zpos[i + 1] < -60 || zpos[i + 3] < -60){

					beginShape();
					vertex(xpos[i + 1] - lsw, ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] - lsh, zpos[i + 2]);
					vertex(xpos[i + 2], ypos[i + 3], zpos[i + 2] - lsw/1.5);
					endShape(CLOSE);

					beginShape();
					vertex(xpos[i + 1] - lsw, ypos[i + 1], zpos[i + 1]);
					vertex(xpos[i + 2], ypos[i + 2] + lbh, zpos[i + 2]);
					vertex(xpos[i + 2], ypos[i + 3], zpos[i + 2] - lsw/1.5);
					endShape(CLOSE);

					

					beginShape();
					vertex(xpos[i + 2], ypos[i + 1], zpos[i + 2] - lsw/1.5);
					vertex(xpos[i + 2], ypos[i + 2] - lsh, zpos[i + 2]);
					vertex(xpos[i + 3] + lsw, ypos[i + 3], zpos[i + 3]);
					endShape(CLOSE);

					beginShape();
					vertex(xpos[i + 2], ypos[i + 1], zpos[i + 2] - lsw/1.5);
					vertex(xpos[i + 2], ypos[i + 2] + lbh, zpos[i + 2]);
					vertex(xpos[i + 3] + lsw, ypos[i + 3], zpos[i + 3]);
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

				//regular pos
				//top

				beginShape();
				vertex(xpos[i + 1] + (sw * (j + 1)), ypos[i + 1], zpos[i + 1]);
				vertex(xpos[i + 2], ypos[i + 2] - (sh * (j + 2)), zpos[i + 2]);
				vertex(xpos[i + 3] + (sw * j), ypos[i + 3], zpos[i + 3]);
				endShape(CLOSE);

				//bottom

				beginShape();
				vertex(xpos[i + 1] + (sw * (j + 1)), ypos[i + 1], zpos[i + 1]);
				vertex(xpos[i + 2], ypos[i + 2] + (bh * (j + 2)), zpos[i + 2]);
				vertex(xpos[i + 3] + (sw * j), ypos[i + 3], zpos[i + 3]);
				endShape(CLOSE);

				//irregular pos
				//top

				beginShape();
				vertex(xpos[i + 3] + (sw * j), ypos[i + 3], zpos[i + 3]);
				vertex(xpos[i + 2], ypos[i + 2] - (sh * (j + 2)), zpos[i + 2]);
				vertex(xpos[i + 4], ypos[i + 4] - (sh * j), zpos[i + 4]);
				endShape(CLOSE);

				//bottom

				beginShape();
				vertex(xpos[i + 3] + (sw * j), ypos[i + 3], zpos[i + 3]);
				vertex(xpos[i + 2], ypos[i + 2] + (bh * (j + 2)), zpos[i + 2]);
				vertex(xpos[i + 4], ypos[i + 4] + (bh * j), zpos[i + 4]);
				endShape(CLOSE);

				//regular neg
				//top

				beginShape();
				vertex(xpos[i + 1] - (sw * (j + 1)), ypos[i + 1], zpos[i + 1]);
				vertex(xpos[i + 2], ypos[i + 2] - (sh * (j + 2)), zpos[i + 2]);
				vertex(xpos[i + 3] - (sw * j), ypos[i + 3], zpos[i + 3]);
				endShape(CLOSE);

				//bottom

				beginShape();
				vertex(xpos[i + 1] - (sw * (j + 1)), ypos[i + 1], zpos[i + 1]);
				vertex(xpos[i + 2], ypos[i + 2] + (bh * (j + 2)), zpos[i + 2]);
				vertex(xpos[i + 3] - (sw * j), ypos[i + 3], zpos[i + 3]);
				endShape(CLOSE);

				//irregular neg
				//top

				beginShape();
				vertex(xpos[i + 3] - (sw * j), ypos[i + 3], zpos[i + 3]);
				vertex(xpos[i + 2], ypos[i + 2] - (sh * (j + 2)), zpos[i + 2]);
				vertex(xpos[i + 4], ypos[i + 4] - (sh * j), zpos[i + 4]);
				endShape(CLOSE);

				//bottom

				beginShape();
				vertex(xpos[i + 3] - (sw * j), ypos[i + 3], zpos[i + 3]);
				vertex(xpos[i + 2], ypos[i + 2] + (bh * (j + 2)), zpos[i + 2]);
				vertex(xpos[i + 4], ypos[i + 4] + (bh * j), zpos[i + 4]);
				endShape(CLOSE);

				//corner solution

				if(zpos[i + 1] > zpos[i + 3] - 10 && zpos[i + 1] < zpos[i + 3] + 10 || zpos[i + 3] > zpos[i + 1] + 10 && zpos[i + 3] < zpos[i + 1] - 10){

					//7th corner from the head
					if(zpos[i + 1] > -10 && zpos[i + 1] < 5 || zpos[i + 3] > -10 && zpos[i + 3] < 5){

						beginShape();
						vertex(xpos[i + 1] - (sw * (j + 1)), ypos[i + 1], zpos[i + 1]);
						vertex(xpos[i + 2], ypos[i + 2] - (sh * (j + 2)), zpos[i + 2]);
						vertex(xpos[i + 2], ypos[i + 3], zpos[i + 1] - (sw * (j + 3)));
						endShape(CLOSE);

						beginShape();
						vertex(xpos[i + 1] - (sw * (j + 1)), ypos[i + 1], zpos[i + 1]);
						vertex(xpos[i + 2], ypos[i + 2] + (bh * (j + 2)), zpos[i + 2]);
						vertex(xpos[i + 2], ypos[i + 3], zpos[i + 1] - (sw * (j + 3)));
						endShape(CLOSE);

						beginShape();
						vertex(xpos[i + 2], ypos[i + 1], zpos[i + 1] - (sw * (j + 3)));
						vertex(xpos[i + 2], ypos[i + 2] - (sh * (j + 2)), zpos[i + 2]);
						vertex(xpos[i + 3] + (sw * (j + 3)), ypos[i + 3], zpos[i + 3]);
						endShape(CLOSE);

						beginShape();
						vertex(xpos[i + 2], ypos[i + 1], zpos[i + 1] - (sw * (j + 3)));
						vertex(xpos[i + 2], ypos[i + 2] + (bh * (j + 2)), zpos[i + 2]);
						vertex(xpos[i + 3] + (sw * (j + 3)), ypos[i + 3], zpos[i + 3]);
						endShape(CLOSE);
					}

					//6th corner from the head
					if(zpos[i + 1] > 5 || zpos[i + 3] > 5){

						beginShape();
						vertex(xpos[i + 1] - (sw * (j + 1)), ypos[i + 1], zpos[i + 1]);
						vertex(xpos[i + 2], ypos[i + 2] - (sh * (j + 2)), zpos[i + 2]);
						vertex(xpos[i + 2], ypos[i + 3], zpos[i + 1] + (sw * (j + 3))/2);
						endShape(CLOSE);

						beginShape();
						vertex(xpos[i + 1] - (sw * (j + 1)), ypos[i + 1], zpos[i + 1]);
						vertex(xpos[i + 2], ypos[i + 2] + (bh * (j + 2)), zpos[i + 2]);
						vertex(xpos[i + 2], ypos[i + 3], zpos[i + 1] + (sw * (j + 3))/2);
						endShape(CLOSE);

						beginShape();
						vertex(xpos[i + 2], ypos[i + 1], zpos[i + 1] + (sw * (j + 3))/2);
						vertex(xpos[i + 2], ypos[i + 2] - (sh * (j + 2)), zpos[i + 2]);
						vertex(xpos[i + 3] + (sw * (j + 3)), ypos[i + 3], zpos[i + 3]);
						endShape(CLOSE);

						beginShape();
						vertex(xpos[i + 2], ypos[i + 1], zpos[i + 1] + (sw * (j + 3))/2);
						vertex(xpos[i + 2], ypos[i + 2] + (bh * (j + 2)), zpos[i + 2]);
						vertex(xpos[i + 3] + (sw * (j + 3)), ypos[i + 3], zpos[i + 3]);
						endShape(CLOSE);
					}

					//5th corner from the head
					if(zpos[i + 1] < -60 || zpos[i + 3] < -60){

						beginShape();
						vertex(xpos[i + 1] - (sw * (j + 1)), ypos[i + 1], zpos[i + 1]);
						vertex(xpos[i + 2], ypos[i + 2] - (sh * (j + 2)), zpos[i + 2]);
						vertex(xpos[i + 2], ypos[i + 3], zpos[i + 2] - (sw * (j + 3))/1.5);
						endShape(CLOSE);

						beginShape();
						vertex(xpos[i + 1] - (sw * (j + 1)), ypos[i + 1], zpos[i + 1]);
						vertex(xpos[i + 2], ypos[i + 2] + (bh * (j + 2)), zpos[i + 2]);
						vertex(xpos[i + 2], ypos[i + 3], zpos[i + 2] - (sw * (j + 3))/1.5);
						endShape(CLOSE);

						beginShape();
						vertex(xpos[i + 2], ypos[i + 1], zpos[i + 2] - (sw * (j + 3))/1.5);
						vertex(xpos[i + 2], ypos[i + 2] - (sh * (j + 2)), zpos[i + 2]);
						vertex(xpos[i + 3] + (sw * (j + 3)), ypos[i + 3], zpos[i + 3]);
						endShape(CLOSE);

						beginShape();
						vertex(xpos[i + 2], ypos[i + 1], zpos[i + 2] - (sw * (j + 3))/1.5);
						vertex(xpos[i + 2], ypos[i + 2] + (bh * (j + 2)), zpos[i + 2]);
						vertex(xpos[i + 3] + (sw * (j + 3)), ypos[i + 3], zpos[i + 3]);
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