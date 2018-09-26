var noiseVal;
var noiseScale=0.02;

function setup() {
   createCanvas(500, 500);
}


function draw() {
   background(255);

   // Draw the right half of image
  for (var y = 0; y < height; y++) {
     for (var x = 0; x < width; x++) {
       // noiceDetail of the pixels octave count and falloff value       
       noiseDetail(5,0.5);
       noiseVal = noise(((frameCount*10)+x) * noiseScale,
                        (frameCount+y) * noiseScale);
       stroke(230 - (noiseVal * 77), 243 - (noiseVal * 37), 255, 150);
       point(x,y);
     }
   }
 }