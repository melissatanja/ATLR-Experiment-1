var noiseVal;
var noiseScale=0.02;

function bg(){

  for (var bgy = 0; bgy < height; bgy++) {
     for (var bgx = 0; bgx < width; bgx++) {

       noiseDetail(5,0.5);
       noiseVal = noise(((frameCount*10)+bgx) * noiseScale,
                        (frameCount+bgy) * noiseScale);
       sky.stroke(230 - (noiseVal * 77), 243 - (noiseVal * 37), 255, 150);
       sky.point(bgx,bgy);
     }
   }
 }