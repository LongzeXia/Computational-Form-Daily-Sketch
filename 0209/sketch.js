var winWidth = 1000;
var winHeight = 1000;
var px = [];
var py = [];
var cellSize = 40;
var pos_x_slider, pos_y_slider;

function setup() {
  createP('Center Point');
  pos_x_slider = createSlider(0, winWidth, 0);

  createP('Rotate Speed');
  size_slider = createSlider(1, 50, 25);
  
  createCanvas(winWidth, winHeight);
  background(0);
  noStroke();
  fill(255, 255, 255, 230);



}

function draw() {
  background(0);

  for (var i = cellSize / 2; i < winWidth; i = i + cellSize) {
    for (var j = cellSize / 2; j < winHeight; j = j + cellSize) {
      translate(pos_x_slider.value(), pos_x_slider.value());
      rotate(frameCount * size_slider.value() * 0.0001);
      var d = 0.2 * i / cellSize + 0.2 * j / cellSize;
      quad(i + cellSize / 2 - d, j + cellSize / 2 - d,
        i + cellSize / 2 - d, j - cellSize / 2 + d,
        i - cellSize / 2 + d, j - cellSize / 2 + d,
        i - cellSize / 2 + d, j + cellSize / 2 - d)
    }
  }
}