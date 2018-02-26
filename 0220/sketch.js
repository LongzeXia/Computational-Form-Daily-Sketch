var a, b;


function setup() {
  createCanvas(800, 800);
// blendMode(ADD);
  a = createSlider(10,20, 10);
  b = createSlider(1,20, 2);
   for (var i = 0; i < 150; i++) {
      console.log(width-noise(frameCount * .01 * tan(i)) * width);
  }

}

function draw() {
  background(0, 80);
  stroke(120, 0, 180, 30);
  noFill();
  var c,d ;
  c = a.value()/10;
  d = b.value();
  for (var i = 0; i < 150; i++) {
    stroke(0, 250, 180, 50);
    
   
      noFill();

    
    
    bezier(width / 2, width - noise(frameCount * .01 * tan(i)) * width*c,
           width / 2, height / 2,
           0, noise(frameCount * .01 * tan(i)) * width,
           d*noise(frameCount * .01 * tan(i)) * width, height / 2);
           
    bezier(width / 2, width - noise(frameCount * .01 * tan(i)) * width*c,
           width / 2, height / 2,
           width, noise(frameCount * .01 * tan(i)) * width,
           width-d*noise(frameCount * .01 * tan(i)) * width, height / 2);
  }
}