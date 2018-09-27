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

 // function bg(){

 //  for (var bgy = 0; bgy < height; bgy++) {
 //     for (var bgx = 0; bgx < width; bgx++) {

 //       noiseDetail(5,0.5);
 //       noiseVal = noise(((frameCount*10)-bgx) * noiseScale,
 //                        (frameCount+bgy) * noiseScale);
 //       sky.stroke(230 - (noiseVal * 77), 243 - (noiseVal * 37), 255);
 //       sky.point(bgx,bgy);
 //     }
 //   }
 // }