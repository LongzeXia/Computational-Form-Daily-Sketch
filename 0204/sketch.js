var winHeight = 1280;
var winWidth = 1280;
var dx = [];
var dy = [];
var lx = [];
var ly = [];
var speed = 15;
var num = 7;

function setup() {
  createCanvas(winWidth, winHeight);
  background(0);
  frameRate(40);
  colorMode(HSB, 100);

  for (var i = 0; i < num; i++) {
    dx[i] = random(winWidth);
    dy[i] = random(winHeight);
    ly[i] = winHeight / 2;
    lx[i] = winWidth / 2;
  }

}

function draw() {
  background(0, 0, 0, 15);


  for (var i = 0; i < num; i++) {
    fill((frameCount+ i*7) % 100, 100, 100);
    noStroke();
    if (abs(dx[i] - lx[i]) < speed) {
      dx[i] = random(winWidth);
    }

    if (abs(dy[i] - ly[i]) < speed) {
      dy[i] = random(winHeight);
    }

    if (lx[i] > dx[i]) {
      lx[i] = lx[i] - speed;

    } else if (lx[i] < dx[i]) {
      lx[i] = lx[i] + speed;

    }

    if (ly[i] > dy[i]) {
      ly[i] = ly[i] - speed;

    } else if (ly[i] < dy[i]) {
      ly[i] = ly[i] + speed;

    }

    ellipse(lx[i], ly[i], 10, 10);
    ellipse(lx[i] + sin(frameCount) * 30, ly[i] + cos(frameCount) * 30, 4, 4);
    ellipse(lx[i] + sin(frameCount) * 10, ly[i] + cos(frameCount) * 10, 2, 2);


    // triangle(lx[i] + sin(frameCount*0.2) * 2, ly[i] + cos(frameCount) * 4,
    //         lx[i] - sin(frameCount*0.8) * 6, ly[i] - cos(frameCount) * 6,
    //         lx[i] + sin(frameCount*0.4) * 2, ly[i] - cos(frameCount) * 3);


  }





}