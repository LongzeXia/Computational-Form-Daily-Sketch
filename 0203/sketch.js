var winHeight = 1440;
var winWidth = 1280;
var speed = [];
var life = [];
var startPoint = [];
var startPoint2 = [];
var counter = [];
var num = 450;
var frameR = 40;
var size2 = [];


function setup() {
  createCanvas(winWidth, winHeight);
  background(0);
  frameRate(frameR);
  for (var i = 0; i < num; i++) {
    speed[i] = random(2) + 1;
    life[i] = random(5) + 7;
    startPoint[i] = random(winWidth);
    startPoint2[i] = random(winWidth);
    counter[i] = 0;
    size2[i] = random(5) + 5;
  }
}

function draw() {
  background(10);

  noStroke();
  for (var i = 0; i < num; i++) {
    counter[i]++;
    var tempHeight = winHeight - speed[i] * (counter[i] / frameR / life[i] * winHeight);
    fill(255 - random((600 - tempHeight) * 0.3) - map(tempHeight, 0, 600, 255, 0));
    ellipse(startPoint[i] + sin(counter[i] + random(2)) * 2.5, tempHeight, size2[i], size2[i]);
    triangle( random(6) + startPoint2[i], random(8) + tempHeight,
              random(6) + startPoint2[i], random(8) + tempHeight,
              random(6) + startPoint2[i], random(8) + tempHeight);

    if (tempHeight < 0) {
      speed[i] = random(2) + 1;
      life[i] = random(5) + 7;
      startPoint[i] = random(winWidth);
      startPoint2[i] = random(winWidth);
      counter[i] = 0;
    }
  }

}