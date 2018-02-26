//declare your variables
var raG1 = 1;//radius of Glow 1
var chSpGl1 = 1;//change Speed of Glow 1
var raG2 = 1;//radius of Glow 2
var chSpGl2 = 1;//change Speed of Glow 2
var ashRi=1;//ash rise
var ashFiRi=1;//ash at fireplace rise
var colorBook = new Array(230,199,39);
var starAdd=1;
var starChange= new Array(1);


function setup(){
  createCanvas(windowWidth,windowHeight);
  frameRate(30);
  for (var i=0; i<998; i++){
    append(colorBook, random(180)+30);
  }
  for (var i=0; i<99; i++){
    append(starChange, random(3)+0.3);
  }
}

function draw(){
  clear();
  noStroke();
  background(66,66,107);

  drawMyWindow();
  
  drawMyChimney();

  drawMyLamp();

  drawMyFirePlace();

  drawMyTopLamp();

  drawMyChair();

  drawMyBookShelf();

  drawMyPainting();

  drawMyFloor();
}
function drawMyWindow(){
  fill(50,63,109);
  rect(400,-15,430,550);
  fill(52,53,109);
  rect(420,80,150,20,15);
  rect(490,90,20,40,15);
  rect(460,110,150,20,15);
  rect(720,340,120,20,15);
  rect(790,350,20,40,15);
  rect(760,370,150,20,15);
  fill(49*1.5,70*1.5,119*1.5,60);
  quad(410,100,410,200,610,400,610,300);
  quad(410,220,410,260,610,460,610,420);
  quad(610,180,610,210,840,443,840,413);
  triangle(700,50,830,50,830,180);
  fill(78,118,192);
  ellipse(505,200,4,4);
  ellipse(465,100,4,4);
  ellipse(585,320,4,4);
  ellipse(445,240,4,4);
  ellipse(715,30,4,4);
  ellipse(585,100,4,4);
  ellipse(685,180,4,4);
  ellipse(705,400,4,4);
  ellipse(665,350,4,4);
  ellipse(685,420,4,4);
  ellipse(645,240,4,4);
  ellipse(715,30,4,4);
  ellipse(585,190,4,4);
  ellipse(775,310,4,4);
  ellipse(465,250,4,4);
  ellipse(485,420,4,4);
  ellipse(545,240,4,4);
  ellipse(415,30,4,4);
  ellipse(485,190,4,4);
  ellipse(575,10,4,4);
  ellipse(765,250,4,4);
  ellipse(785,420,4,4);
  ellipse(745,240,4,4);
  ellipse(515,30,4,4);
  ellipse(685,190,4,4);
  ellipse(775,10,4,4);
  ellipse(745,540,4,4);
  ellipse(515,530,4,4);
  ellipse(685,490,4,4);
  ellipse(775,410,4,4);
  if (mouseIsPressed) {
    starAdd++;
    if (starAdd==100){
      starAdd=0;
    }
    for (var i=0; i<20;i++){
      fill(255,255,255,random(starChange[i]*20)+100-starAdd);
      ellipse(600+starChange[i+1]*200-starAdd*starChange[i]*starChange[i],starChange[i+2]*5+starAdd*starChange[i]*starChange[i],8,8);
      stroke(255,255,255,random(starChange[i]*20)+80-starAdd);
      strokeWeight(2);
      line(600+starChange[i+1]*200-starAdd*starChange[i]*starChange[i],starChange[i+2]*5+starAdd*starChange[i]*starChange[i],600+starChange[i+1]*200-starAdd*starChange[i]*starChange[i]+starChange[i]*30,starChange[i+2]*5+starAdd*starChange[i]*starChange[i]-starChange[i]*30);
      noStroke();
    }
  }
  stroke(55,55,98);
  strokeWeight(20);
  noFill();
  rect(400,-15,430,550);
  noStroke();
  fill(55,55,98);
  rect(400,50,430,15);
  rect(605,0,20,530);
  fill(66,66,107);
  rect(0,0,390,700);
  rect(840,0,700,700);
  rect(390,540,700,700);
}

function drawMyLamp(){
  //Glow 2
  fill(124,127,150,70);
  if (raG2==0 || raG2==30){
    chSpGl2=-chSpGl2;
  }
  raG2 = raG2 + chSpGl2/2;
  ellipse(900,315,130+raG2,130+raG2);

  //Glow 1
  fill(217,218,93,80);
  if (raG1==0 || raG1==30){
    chSpGl1=-chSpGl1;
  }
  raG1 = raG1 + chSpGl1/2;
  ellipse(900,315,80+raG1,80+raG1);

  //Lamp
  fill(57,57,69);
  rect(875,305,55,70);
  fill(68,71,80);
  rect(900,305,30,70);
  fill(203,129,49);
  rect(881,315,13,45);
  fill(241,206,64);
  rect(906,315,18,45);
  fill(68,71,79);
  triangle(875,305,930,305,900,280);
  rect(895,275,10,10);
  rect(890,255,20,20);
  fill(87,82,104);
  triangle(930,305,900,280,900,305);
  rect(900,275,5,10);
  rect(905,255,5,20);
  fill(130,127,102);
  rect(893,260,9,9);

  //fire ash
  if (ashRi==150){
    ashRi=0;
  }else{
    ashRi++;
  }
  fill(240,181,63,120-ashRi*0.8);
  quad(913,295-ashRi*1.2,910,298-ashRi*1.2,913,301-ashRi*1.2,916,298-ashRi*1.2);
  quad(923,285-ashRi*0.85,920,288-ashRi*0.85,923,291-ashRi*0.85,926,288-ashRi*0.85);
  quad(933,315-ashRi*0.7,930,318-ashRi*0.7,933,321-ashRi*0.7,936,318-ashRi*0.7);
}

function drawMyFirePlace(){
  fill(101,94,88);
  rect(880,368,220,25);
  fill(200,190,166);
  rect(815,393,280,180);
  fill(191,174,150);
  rect(815,380,20,80,15);
  rect(840,380,20,55,15);
  rect(840,445,20,40,15);
  fill(67,67,66);
  rect(808,368,72,25);
  fill(223,212,196);
  rect(890,400,205,173);
  fill(242,240,234);
  for (var i=0; i<7;i++){
    rect(900,425+20*i,25,12);
    rect(1060,425+20*i,25,12);
  }
  for (var i=0; i<4;i++){
    rect(932+i*32,425,25,12);
  }
  for (var i=0; i<5;i++){
    rect(916+i*32,405,25,12);
  }
  rect(900,405,9,12);
  rect(1075,405,9,12);
  fill(171,162,161);
  rect(935,447,115,120);
  fill(98,83,113);
  rect(935,457,105,110);
  fill(65,66,82);
  rect(935,485,80,80);
  fill(175,114,82);
  rect(935,550,75,15);
  arc(1010,565,35,30,1.5*PI,2*PI);
  quad(960,550,970,540,975,546,973,550);
  fill(233,181,86);
  rect(935,560,105,10);
  fill(128,128,114);
  rect(808,568,72,30);
  fill(164,162,143);
  rect(880,568,230,30);
  fill(192,187,172);
  for (var i=0 ; i<13; i++){
    rect(886+i*17,568,12,20);
  }
  fill(199,94,42);
  beginShape();
    vertex(970-10+random(3), 475+random(3));
    bezierVertex(1030-10+random(3), 475+random(3), 1030-10+random(3), 540+random(3), 990-10+random(3), 540+random(3));
    bezierVertex(955-10+random(3), 540+random(3),965-10+random(3), 500+random(3), 970-10+random(3), 500+random(3));
    bezierVertex(985-10+random(3), 500+random(3),980-10+random(3), 475+random(3), 970-10+random(3), 475+random(3));
  endShape();
  fill(254,134,0);
  beginShape();
    vertex(970+random(3), 475+random(3));
    bezierVertex(1030+random(3), 475+random(3), 1030+random(3), 540+random(3), 990+random(3), 540+random(3));
    bezierVertex(955+random(3), 540+random(3),965+random(3), 500+random(3), 970+random(3), 500+random(3));
    bezierVertex(985+random(3), 500+random(3),980+random(3), 475+random(3), 970+random(3), 475+random(3));
  endShape();
  fill(237,226,60);
  ellipse(992+random(1),517+random(1),30+random(1),30+random(1));
  if (ashFiRi==150){
    ashFiRi=0;
  }else{
    ashFiRi++;
  }
  fill(237,226,60,140-ashFiRi);
  ellipse(1012,487-ashFiRi*0.7,15,15);
  ellipse(962,497-ashFiRi*0.8,9,9);
}

function drawMyTopLamp(){
  fill(108,129,154);
  rect(647,0,8,20);
  rect(643,20,16,80);
  rect(590,105,120,10);
  noFill();
  stroke(108,129,154);
  strokeWeight(10);
  arc(590,90,40,40,PI/2,PI);
  arc(710,90,40,40,0,PI/2);
  noStroke();
  fill(157,162,189);
  rect(640,100,22,22);
  rect(562,80,15,10);
  rect(723,80,15,10);
  fill(250,233,161);
  rect(625,35,50,45);
  fill(250,204,105);
  rect(625,40,25,34);
  fill(250,175,65);
  rect(650,40,25,34);
  fill(249,234,163);
  ellipse(650,57,14,14);
  rect(625-80,35,50,45);
  fill(250,204,105);
  rect(625-80,40,25,34);
  fill(250,175,65);
  rect(650-80,40,25,34);
  fill(249,234,163);
  ellipse(650-80,57,14,14);
  rect(625+80,35,50,45);
  fill(250,204,105);
  rect(625+80,40,25,34);
  fill(250,175,65);
  rect(650+80,40,25,34);
  fill(249,234,163);
  ellipse(650+80,57,14,14);
}

function drawMyChair(){
  noFill();
  stroke(134,87,42);
  strokeWeight(7);
  rect(1180-90,480,90,140,12);
  line(1270-90,435,1270-90,600,12);
  line(1192,542,1270,542);
  stroke(89,58,30);
  rect(1184-90,484,90,140,12);
  line(1274-90,435,1274-90,600,12);
  line(1095,552,1270,552);
  noStroke();
  fill(30,100,130);
  rect(1130,385,130,160,15);
  fill(3,91,114);
  rect(1130,400,100,110);
  fill(18,60,75);
  rect(1235,385,40,160,15);
  fill(16,82,118);
  rect(1075,535,100,15,8);
  fill(67,134,174);
  rect(1075,510,100,30,8);
  fill(3,91,114);
  rect(1075,516,80,25,2);
  fill(18,60,75);
  rect(1160,510,115,40,8);
  noFill();
  stroke(134,87,42);
  strokeWeight(7);
  rect(1180,480,90,140,12);
  line(1270,435,1270,600,12);
  strokeWeight(5);
  line(1188,547,1270,547);
  stroke(89,58,30);
  rect(1184,484,90,140,12);
  line(1274,435,1274,600,12);
  noStroke();
  fill(16,71,100);
  rect(1130,400,30,15,0,15,15,0);
  rect(1180,400,50,15,15,0,0,15);
  rect(1200,420,30,15,15,0,0,15);
  rect(1130,440,50,15,0,15,15,0);
  fill(216,189,128);
  rect(1100,450,72,60,8);
  fill(243,213,169);
  rect(1115,450,57,60,8);
  fill(216,189,128);
  arc(1127,460,12,10,0,PI);
  arc(1160,460,12,10,0,PI);
  arc(1127,480,12,10,0,PI);
  arc(1160,480,12,10,0,PI);
  arc(1127,500,12,10,0,PI);
  arc(1160,500,12,10,0,PI);
  arc(1135,470,12,10,0,PI);
  arc(1153,470,12,10,0,PI);
  arc(1135,490,12,10,0,PI);
  arc(1153,490,12,10,0,PI);
  fill(153,139,105);
  arc(1143,460,12,10,0,PI);
  arc(1143,480,12,10,0,PI);
  arc(1143,500,12,10,0,PI);
}

function drawMyChimney(){
  fill(91,94,128);
  rect(860,0,180,370);
  fill(103,106,138);
  rect(907,0,133,370);
  fill(103,106,133);
  rect(860,-10,20,60,15);
  fill(122,118,144);
  rect(1020,-30,20,200,15);
  fill(112,110,143);
  rect(908,100,20,150,15);
  rect(938,40,20,120,15);
  fill(131,121,157);
  rect(1020,230,20,200,15);
  rect(980,200,20,80,15);
}

function drawMyFloor(){
  fill(242,194,76);
  rect(0,595,windowWidth,windowHeight-595);
}

function drawMyPainting(){
  fill(55,55,98);
  rect(1155,55,110,110);
  rect(1155,220,180,80);
  fill(58,89,140);
  quad(1165,65,1255,65,1255,155,1165,155);
  fill(58,61,104);
  quad(1165,100,1255,80,1255,130,1165,130);
  fill(87,82,128);
  rect(1165,130,90,25);
  fill(66,66,107);
  rect(1165,230,160,40);
  fill(58,61,104);
  rect(1165,270,160,20);
  fill(87,68,115);
  arc(1270,270,50,50,PI,2*PI);
}

function drawMyBookShelf(){
  fill(110,69,42);
  rect(90,140,470-190,590-140);
  rect(90,575,20,40);
  fill(83,52,42);
  rect(175,160,390-275,575-150);
  fill(110,69,42);
  rect(330,575,20,40);
  noFill();
  stroke(169,127,78);
  strokeWeight(20);
  rect(170,150,190,430);
  strokeWeight(12);
  line(170,247,360,247);
  line(170,355,360,355);
  line(170,465,360,465);
  noStroke();
  for (var i=0; i<17; i++){
    var color1 = new Array (220,0,0);
    var color2 = new Array (200,0,0);
    var color3 = new Array (0,0,200);
    var color4 = new Array (200,0,40);
    var j= new Array (1);
    arrayCopy(colorBook, i*3, color1, 2, 1);
    arrayCopy(colorBook, i*4, color2, 1, 1);
    arrayCopy(colorBook, i, color3, 1, 1);
    arrayCopy(colorBook, i*2, color4, 1, 1);
    arrayCopy(colorBook, i*3, j, 0, 1);
    fill(color1);
    rect(180+10*i,181+j/18,10,60-j/18);
    fill(color2);
    rect(180+10*i,291+j/20,10,60-j/20);
    fill(color3);
    rect(180+10*i,401+j/21,10,60-j/21);
    fill(color4);
    rect(180+10*i,521+j/20,10,60-j/20);
  }
    fill(169,127,78);
    rect(350,575,20,40);
    rect(160,575,20,40);
    rect(110,590,20,40);
    fill(127,82,40);
    rect(110,140,40,420,0,0,15,15);
    fill(143,87,41);
    rect(90,140,20,100,0,0,15,15);
    rect(140,240,20,130,15);
    rect(90,280,20,180,15);
    rect(110,330,20,220,15);
}