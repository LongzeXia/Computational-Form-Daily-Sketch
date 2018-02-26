var winWidth = 1280;
var winHeight = 1280;
var px = [];
var py = [];
var pz = [];
var t;

function setup() {
  createCanvas(winWidth, winHeight);
  background(255,255,255);
  colorMode(HSB);
  noFill()

  for(var i = 0; i < 500; i++){

    stroke(255,0,random(5)+i*0.05);
    strokeWeight(1);
    px[i] = random(0.3) + 0.3;
    
    arc(winWidth/2, winHeight/2, 2*i, 2*i, random(0.1)-1, px[i]);
    
    stroke(255,0,random(15)+i*0.05);
    strokeWeight(1);
    py[i] = random(0.3) + 0.3;
    arc(winWidth/2, winHeight/2, 2*i, 2*i, px[i], px[i]+py[i]);
    
    stroke(255,0,random(50)+i*0.05);
    strokeWeight(1);
    pz[i] = random(1.4) + 0.2;
    arc(winWidth/2, winHeight/2, 2*i, 2*i, px[i] + py[i],px[i]+py[i]+pz[i]);


  }
  


}

function draw() {

}