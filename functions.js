function setup() {
  createCanvas(640, 480);
  colorMode(RGB, 255);
}

function draw() {
  background(200)
  fill(255, 255, 0);

  //radius=40;

  polygon(80,80,40,6);
  polygon(80,80,30,6);
  polygon(80,80,20,6);
  polygon(80,80,10,6);
  
  /*for(var i=0;i<6;i++){
    for(var j=0;j<15;j++){
        if(j%2==0){
          fill(255, 255, 0);
          polygon(80+120*i,j*20*sqrt(3),40,6);
        }else{
          fill(255, 0, 0);
          polygon(20+120*i,j*sqrt(3)/2*40,40,6);
        }
    }    
  }*/


}








function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
