PImage img;
color[] pixel = new color[736*1001];


void setup() {
  size(736, 1001, P3D);
  PImage img = loadImage("1.jpg");
  //noStroke();
  stroke(255, 40);
  strokeWeight(0.1);
  image(img, 0, 0);

 
}


void draw() {
   for ( int k = 0; k < frameCount/20; k ++) {


    for (int i = 0; i < width; i++) {
      for ( int j = 0; j < height; j ++) {
        pixel[index(i, j)] = get(i, j);
      }
    }
    background(255);

    for (int i = 0; i < width; i+=5) {
      for ( int j = 0; j < height; j +=5) {   

        pushMatrix();
        translate(i, j, -brightness(pixel[index(i, j)])*2);
        fill(pixel[index(i, j)]);
        //ellipse(0, 0, blue(pixel[index(i, j)])/10, blue(pixel[index(i, j)])/10);
        box( red(pixel[index(i, j)])/5,blue(pixel[index(i, j)]),green(pixel[index(i, j)]));
        popMatrix();
      }
    }
  }
}


int index(int i, int j) {  
  return i + j*width;
}