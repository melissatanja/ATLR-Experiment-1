// PShape name;

// name = createShape();
// name.beginShape();

// 	name.fill(rgb);
// 	name.vertex(x, y, z);
// 	name.vertex(x, y, z);
// 	name.vertex(x, y, z);
// name.endShape();

// draw --> shape(name);

//each shape encompasses pos top, pos bot, neg top, and neg bot triangles

nose = createShape();
nose.beginShape();
	nose.fill(r, g, b, 100);
	nose.vertex(34, mid - 2, -6);
	nose.vertex(34, ypos - yht[0], 0);
	nose.vertex(34, mid - 2, 6);
	nose.vertex(34, ypos - yhb[0], 0);
	nose.vertex(34, mid - 2, -6);
nose.endShape(CLOSE);

head1 = createShape();
head1.beginShape();
	head1.fill(r, g, b, 100);
	head1.vertex(x, yt, 0);
	head1.vertex(x, mid - 2, 6);
	head1.vertex(x + 8, yyb, 0);
	head1.vertex(x, mid - 2, -6);
	head1.vertex(x, yb, 0);
	head1.vertex(x, mid - 2, 6);
	head1.vertex(x + 8, yyt, 0);
	head1.vertex(x, mid - 2, -6);
	head1.vertex(x, yt, 0);
head1.endShape(CLOSE);

head3 = createShape();
head3.beginShape();
	head3.fill(r, g, b, 100);
	head3.vertex(x, yt, 0);
	head3.vertex(x + 4, mid, z);
	head3.vertex(x + 8, yyb, 0);
	head3.vertex(x + 4, mid, -z);
	head3.vertex(x, yb, 0);
	head3.vertex(x + 4, mid, z);
	head3.vertex(x + 8, yyt, 0);
	head3.vertex(x + 4, mid, -z);
	head3.vertex(x, yt, 0);
head3.endShape(CLOSE);

head5 = createShape();
head5.beginShape();
	head5.fill(r, g, b, 100);
	head5.vertex(x, yt, 0);
	head5.vertex(x + 4, mid, z);
	head5.vertex(x + 8, mid, 0);
	head5.vertex(x + 4, mid, -z);
	head5.vertex(x, yb, 0);
	head5.vertex(x + 4, mid, z);
	head5.vertex(x + 8, mid, 0);
	head5.vertex(x + 4, mid, -z);
	head5.vertex(x, yt, 0);
head5.endShape(CLOSE);

head7 = createShape();
head7.beginShape();
	head7.fill(r, g, b, 100);
	head7.vertex(x, yt, z);
	head7.vertex(x + 4, mid, (i * 1.5) + 6);
	head7.vertex(x + 8, yyb, z);
	head7.vertex(x + 4, mid, (i * -1.5) - 6);
	head7.vertex(x, yb, z);
	head7.vertex(x + 4, mid, (i * 1.5) + 6);
	head7.vertex(x + 8, yyt, z);
	head7.vertex(x + 4, mid, (i * -1.5) - 6);	
	head7.vertex(x, yt, z);		
head7.endShape(CLOSE);

head2 = createShape();
head2.beginShape();
	head2.fill(r, g, b, 100);
	head2.vertex(x + 4, yyt, 0);
	head2.vertex(x - 4, y, 6);
	head2.vertex(x + 4, yyb, 0);
	head2.vertex(x - 4, y, -6);
	head2.vertex(x + 4, yyt, 0);
	head2.vertex(x + 8, mid, z + 3);
	head2.vertex(x + 4, yyb, 0);
	head2.vertex(x + 8, mid, -z - 3);
	head2.vertex(x + 4, yyt, 0);
head2.endShape(CLOSE);

head4 = createShape();
head4.beginShape();
	head4.fill(r, g, b, 100);
	head4.vertex(x + 4, yyt, 0);
	head4.vertex(x, y, z);
	head4.vertex(x + 4, yyb, 0);
	head4.vertex(x, y, -z);
	head4.vertex(x + 4, yyt, 0);
	head4.vertex(x + 8, mid, z - 4);
	head4.vertex(x + 4, yyb, 0);
	head4.vertex(x + 8, mid, -z + 4);
	head4.vertex(x + 4, yyt, 0);
head4.endShape(CLOSE);

beginShape();
	fill(r, g, b, 100);
	vertex(x + 4, yyt, 0);
	vertex(x, y, z);
	vertex(x + 4, yyb, 0);
	vertex(x, y, -z);
	vertex(x + 4, yyt, 0);
	vertex(x + 8, mid, z - 7);
	vertex(x + 4, yyb, 0);
	vertex(x + 8, mid, -z + 7);
	vertex(x + 4, yyt, 0);
endShape(CLOSE);

beginShape();
	fill(r, g, b, 100);
	vertex(x + 4, yyt, 0);
	vertex(x, y, z);
	vertex(x + 4, yyb, 0);
	vertex(x, y, -z);
	vertex(x + 4, yyt, 0);
	vertex(x + 8, mid, z + 3);
	vertex(x + 4, yyb, 0);
	vertex(x + 8, mid, -z - 3);
	vertex(x + 4, yyt, 0);
endShape();

beginShape();
	fill(r, g, b, 100);
	vertex(xpos[i + 2], ypos - (sh * i), zpos[i + 2]);
	vertex(xpos[i + 1] + (sw * (i + 1)), ypos, zpos[i + 1]);
	vertex(xpos[i + 2], ypos + (bh * i), zpos[i + 2]);
	vertex(xpos[i + 1] - (sw * (i + 1)), ypos, zpos[i + 1]);
	vertex(xpos[i + 2], ypos - (sh * i), zpos[i + 2]);
	vertex(xpos[i + 3] + (sw * (i + 3)), ypos, zpos[i + 3]);
	vertex(xpos[i + 2], ypos + (bh * (i + 4)), zpos[i + 2]);
	vertex(xpos[i + 3] - (sw * (i + 3)), ypos, zpos[i + 3]);
	vertex(xpos[i + 2], ypos - (sh * i), zpos[i + 2]);
endShape();

beginShape();
	fill(r, g, b, 100);
	vertex(xpos[i + 2], ypos - (sh * i), zpos[i + 2]);
	vertex(xpos[i + 3] + (sw * (i + 3)), ypos, zpos[i + 3]);
	vertex(xpos[i + 4], ypos + (bh * (i + 4)), zpos[i + 4]);
	vertex(xpos[i + 3] - (sw * (i + 3)), ypos, zpos[i + 3]);
	vertex(xpos[i + 2], ypos + (bh * i), zpos[i + 2]);
	vertex(xpos[i + 3] + (sw * (i + 3)), ypos, zpos[i + 3]);
	vertex(xpos[i + 4], ypos - (sh * (i + 2)), zpos[i + 4]);
	vertex(xpos[i + 3] - (sw * (i + 3)), ypos, zpos[i + 3]);
	vertex(xpos[i + 2], ypos - (sh * i), zpos[i + 2]);
endShape();

beginShape();
	fill(r, g, b, 100);
	vertex(xpos[i + 2], ypos - (sh * i), zpos[i + 2]);
	vertex(xpos[i + 2], ypos, zpos[i + 2] + (sw * (i + 3))/1.5);
	vertex(xpos[i + 2], ypos + (bh * (i + 2)), zpos[i + 2]);
	vertex(xpos[i + 1] - (sw * (i + 1)), ypos, zpos[i + 1]);
	vertex(xpos[i + 2], ypos - (sh * i), zpos[i + 2]);
	vertex(xpos[i + 3] + (sw * i), ypos, zpos[i + 3]);
	vertex(xpos[i + 2], ypos + (bh * (i + 2)), zpos[i + 2]);
	vertex(xpos[i + 2], ypos, zpos[i + 2] + (sw * (i + 3))/1.5);
	vertex(xpos[i + 2], ypos - (sh * i), zpos[i + 2]);
endShape();

beginShape();
	fill(r, g, b, 100);
	vertex(xpos[i + 2], ypos - (sh * i), zpos[i + 2]);
	vertex(xpos[i + 1] - (sw * (i + 1)), ypos, zpos[i + 1]);
	vertex(xpos[i + 2], ypos + (bh * (i + 2)), zpos[i + 2]);
	vertex(xpos[i + 2], ypos, zpos[i + 2] - (sw * (i + 3))/1.5);
	vertex(xpos[i + 2], ypos - (sh * i), zpos[i + 2]);
	vertex(xpos[i + 2], ypos, zpos[i + 2] - (sw * (i + 3))/1.5);
	vertex(xpos[i + 2], ypos + (bh * (i + 2)), zpos[i + 2]);
	vertex(xpos[i + 3] + (sw * (i + 3)), ypos, zpos[i + 3]);
	vertex(xpos[i + 2], ypos - (sh * i), zpos[i + 2]);
endShape();

// https://processing.org/tutorials/pshape/