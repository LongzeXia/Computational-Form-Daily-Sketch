var cellSize = 40;
var cells = [];
var xoff = 0;
var yoff = 0;
var inc = 0.04;

function setup() {
  createCanvas(800, 800);
  background(0);
  fill(255, 255, 255);
  noStroke();
  img1 = loadImage("1.png");
  img2 = loadImage("2.png");
  img3 = loadImage("3.png");
  img4 = loadImage("4.png");
  img5 = loadImage("5.png");
  img6 = loadImage("6.png");
  imageMode(CENTER);
}

function index(i, j) {
  return i + height / cellSize * j;
}

function draw() {
  background(20,35,0);
  xoff = frameCount * inc;
  for (var i = 0; i < width / cellSize; i++) {
    xoff += inc*4;
    yoff = 0;
    for (var j = 0; j < height / cellSize; j++) {


      yoff += inc*4;
      cells[index(i, j)] = noise(xoff, yoff);

      // if(cells[index(i, j)]>0.66){
      //     fill(255);
      // } else  if(cells[index(j, i)]<0.66 && cells[index(j, i)]>0.33){
      //     fill(180);
      // } else{
      //     fill(100);
      // }

      // if (cells[index(i, j)] > 0.8){
      //     fill(250);
      // } else if (cells[index(i, j)] <= 0.8 && cells[index(i, j)]>0.6){
      //     fill(200);
      // } else if (cells[index(i, j)] <= 0.6 && cells[index(i, j)]>0.4){
      //     fill(150);
      // } else if (cells[index(i, j)] <= 0.4 && cells[index(i, j)]>0.2){
      //     fill(100);
      // } else if (cells[index(i, j)]<=0.2){
      //     fill(50);
      // }

      // fill(255);

      // if (cells[index(i, j)] > 0.8) {
      //   ellipse(i * cellSize, j * cellSize, cellSize * 0.8, cellSize * 0.8);
      // } else if (cells[index(i, j)] <= 0.8 && cells[index(i, j)] > 0.6) {
      //   ellipse(i * cellSize, j * cellSize, cellSize * 0.6, cellSize * 0.6);
      // } else if (cells[index(i, j)] <= 0.6 && cells[index(i, j)] > 0.4) {
      //   ellipse(i * cellSize, j * cellSize, cellSize * 0.4, cellSize * 0.4);
      // } else if (cells[index(i, j)] <= 0.4 && cells[index(i, j)] > 0.2) {
      //   ellipse(i * cellSize, j * cellSize, cellSize * 0.2, cellSize * 0.2);
      // } else if (cells[index(i, j)] <= 0.2) {
      //   ellipse(i * cellSize, j * cellSize, cellSize * 0.1, cellSize * 0.1);
      // }

      if (cells[index(i, j)] > 0.9) {
        image(img6, i * cellSize, j * cellSize,67,67);
      } else if (cells[index(i, j)] <= 0.9 && cells[index(i, j)] > 0.8) {
        image(img6, i * cellSize, j * cellSize,67,67);
      } else if (cells[index(i, j)] <= 0.8 && cells[index(i, j)] > 0.6) {
        image(img4, i * cellSize, j * cellSize,67,67);
      } else if (cells[index(i, j)] <= 0.6 && cells[index(i, j)] > 0.4) {
        image(img1, i * cellSize, j * cellSize,67,67);
      } else if (cells[index(i, j)] <= 0.4 && cells[index(i, j)] > 0.2) {
        image(img3, i * cellSize, j * cellSize,67,67);
      } else if (cells[index(i, j)] <= 0.2) {
        image(img2, i * cellSize, j * cellSize,67,67);
      }


      // rect(i * cellSize, j * cellSize, cellSize, cellSize);
    }

  }

  // noLoop();
}