var winWidth = 1280;
var winHeight = 720;
var cellSize = 30;
var cellR = [];
var cellS =[];
var times = 0.3;

function setup() {
  createCanvas(winWidth,winHeight);
  background(0);
  fill(255, 255, 255);
  noStroke();
  frameRate(30);
  colorMode(HSB);
   for (var i = 0; i < winWidth ; i = i +cellSize){
    // cellS[i] = []
    cellR[i] = []; // create nested array
    for (var j = 0; j < winHeight ; j = j + cellSize){
      cellR[i][j] = int(random(cellSize*1.5));
      // cellS[i][j] = int(random(3));
    }
  }
  randomSeed(30);
}

function draw() {
  background(0,0,0,30);

  ellipse(frameCount%winWidth, 100 , 10, 10);
  for (var i = 0; i < winWidth ; i = i +cellSize){
    for (var j = 0; j < winHeight ; j = j + cellSize){
      if(cellR[i][j]<1){
        cellR[i][j] = int(random(cellSize*1.5));
      } else {
        cellR[i][j]--;
      }
      
      var t;
      t = int(random(3));
      
      // if (cellS[i][j]==0){
      //   fill((frameCount*3+i/cellSize+j/cellSize)%255, 255, 255);
      //   noStroke();
      //   ellipse(i + cellSize/2, j + cellSize/2, cellR[i][j], cellR[i][j]);
      // } else if (cellS[i][j]==1){
      //   noFill();
      //   stroke((frameCount*3+i/cellSize+j/cellSize)%255, 255, 255);
      //   strokeWeight(-3);
      //   ellipse(i + cellSize/2, j + cellSize/2, cellR[i][j], cellR[i][j]);
      //   triangle(i + cellSize/2 + cellR[i][j]*times*sin(frameCount), j + cellR[i][j]/2 + cellR[i][j]*times*cos(frameCount), 
      //           i + cellSize/2 + cellR[i][j]*times*sin(frameCount+PI/3), j + cellR[i][j]/2 + cellR[i][j]*times*cos(frameCount+PI/3),
      //           i + cellSize/2 + cellR[i][j]*times*sin(frameCount+2*PI/3), j + cellR[i][j]/2 + cellR[i][j]*times*cos(frameCount+2*PI/3));
      // }
      
      if (t==0){
        fill((frameCount*3+i+j)%255, 255, 255);
        noStroke();
        ellipse(i + cellSize/2, j + cellSize/2, cellR[i][j], cellR[i][j]);
      } else if (t==1){
        noFill();
        stroke((frameCount*3+i+j)%255, 255, 255);
        strokeWeight(-3);
        ellipse(i + cellSize/2, j + cellSize/2, cellR[i][j], cellR[i][j]);
        // triangle(i + cellSize/2 + cellR[i][j]*times*sin(frameCount), j + cellR[i][j]/2 + cellR[i][j]*times*cos(frameCount), 
        //         i + cellSize/2 + cellR[i][j]*times*sin(frameCount+PI/3), j + cellR[i][j]/2 + cellR[i][j]*times*cos(frameCount+PI/3),
        //         i + cellSize/2 + cellR[i][j]*times*sin(frameCount+2*PI/3), j + cellR[i][j]/2 + cellR[i][j]*times*cos(frameCount+2*PI/3));
      }

    }
  }
}