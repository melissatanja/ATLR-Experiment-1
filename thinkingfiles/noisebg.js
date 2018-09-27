var noiseVal;
var noiseScale=0.02;

var w = 800;
var h = 800;

function bg2(){

  sky.background(0);

  for (var bgy = 0; bgy < height; bgy++) {
     for (var bgx = 0; bgx < width; bgx++) {

       noiseDetail(5,0.5);
       noiseVal = noise(((frameCount*10)-bgx) * noiseScale,
                        (frameCount+bgy) * noiseScale);
        sky.stroke(0 + (noiseVal * 102), 0 + (noiseVal * 153), 77 + (noiseVal * 76), 150);
        // sky.stroke(0 + (noiseVal * 166), 0 + (noiseVal * 77), 153 + (noiseVal * 102), 150);
       sky.point(bgx,bgy);
     }
   }
 }

function showStars(){

  for(i = 0; i < 500; i++){

    ys = 0;
    xs = 0;
    zs = -500;
    scatterx = random(-200, 200);
    scattery = random(-100, 100);
    scatterz = random(-75, 75);
    
    xs += scatterx;
    ys += scattery;
    zs += scatterz;

    //blue
    translate(xs, ys, zs);
    fill(230, 255, 255);
    noStroke();
    sphere(random(0.5, 1));

    //yellow
    translate(xs/2, -ys/2, zs/2);
    fill(255, 255, 204);
    noStroke();
    sphere(random(0.3, 2));

    //pink
    translate(-xs * 2, ys * 2, zs * 2);
    fill(255, 230, 255);
    noStroke();
    sphere(random(0.4, 1.5));

    //white
    translate(xs * 1.25, ys / 10, zs + 50);
    fill(255, 255, 255);
    noStroke();
    sphere(random(0.2, 1.7));

    //return to original position
    translate(-xs, -ys, -zs);
    translate(-xs/2, ys/2, -zs/2);
    translate(xs * 2, -ys * 2, -zs * 2);
    translate(-xs * 1.25, -ys / 10, -zs + 50);
  }

}

 function bg(){

  for (var bgy = 0; bgy < height; bgy++) {
     for (var bgx = 0; bgx < width; bgx++) {

       noiseDetail(5,0.5);
       noiseVal = noise(((frameCount*10)-bgx) * noiseScale,
                        (frameCount+bgy) * noiseScale);
       sky.stroke(230 - (noiseVal * 77), 243 - (noiseVal * 37), 255);
       sky.point(bgx,bgy);
     }
   }
 }