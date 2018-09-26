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