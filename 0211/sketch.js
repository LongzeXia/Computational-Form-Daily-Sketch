var winWidth = 1200;
var winHeight = 1200;

var pos_x_slider, pos_y_slider;
var t, x, s;


function setup() {
  createCanvas(winWidth, winHeight);
  noStroke();
  background(0);
  colorMode(HSB);
  
  createP('Number');
  pos_x_slider = createSlider(0, 11, 3);

  createP('Density / Changing Rate');
  size_slider = createSlider(1, 20, 1);
  
  x = 0;
}

function draw() {
  background(0);
  t++;
  s =  size_slider.value();

  
  if ( x != pos_x_slider.value()){
      x = pos_x_slider.value();
      t = 0;
  }
  

  for(var i =0; i < winWidth; i++){
    fill(200, 255, 255);
    
    
    
    if (pos_x_slider.value()==0){
      //#1
      ellipse(i, winHeight/2+ i/3*sin((i+t*t)/PI/s)*cos((i+t*t)/PI/s), 3, 3);
    } else if (pos_x_slider.value()==1){
      //#2
      ellipse(i, winHeight/2+ i*0.4*sin((i+t*t)/PI/s)*tan((i+t*t)/PI/s), 3, 3);
    } else if (pos_x_slider.value()==2){
          //#3
      ellipse(i, winHeight/2+ i*0.4*sin((sin(i)*t)/PI/s), 3, 3);
    }else if (pos_x_slider.value()==3){
       //#4
      ellipse(i, winHeight/2+ i*0.4*tan((tan(i)*i+t)/t*tan(i))/s, 3, 3);
    
    }else if (pos_x_slider.value()==4){
       //#5
      ellipse(i, winHeight/2+ i*0.4*tan((tan(i)*i+t)/t*sin(i))/s, 3, 3);
    
    }else if (pos_x_slider.value()==5){
      //#6
      ellipse(i, winHeight/2+ i*0.4*sin((tan(i)*i+t)/t)/s, 3, 3);
    
    }else if (pos_x_slider.value()==6){
       //#7
      ellipse(i, winHeight/2+ i*0.4*sin((tan(i)*i+t)/250/s), 3, 3);
    
    }else if (pos_x_slider.value()==7){
      //#8
      ellipse(i, winHeight/2+ i*0.4*tan((sin(i)*i+t)/100/s), 3, 3);
    }else if (pos_x_slider.value()==8){
       //#9
      ellipse(i, winHeight/2+ sin(i)*i*sin((sin(i)*i+t)/100/s), 3, 3);
    }else if (pos_x_slider.value()==9){
       //#10
      ellipse(i, winHeight/2+ tan(i)+tan((sin(i)+t/70)/s), 3, 3);
    }else if (pos_x_slider.value()==10){
       //#11
      ellipse(i, winHeight/2+ sin(i)*t+tan((sin(i)+t/70)/s), 3, 3);
    }else if (pos_x_slider.value()==11){
      //#12
      ellipse(i, winHeight/2+ sin(i)*t/sin(tan(i))+sin((tan(i)+t/70))*40/tan(i)/s, 3, 3);
    }
    
  }
}


