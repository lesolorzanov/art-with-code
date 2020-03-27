//- Modify here only ---------------------------
//      1,  2,  3,  4,  5,  6,  7,  8,  9,  10,  11,  12,  13
let xp = [0, 0, 0, 81, 116, 112, 177, 164, 202, 204, 0, 0, 0];
let yp = [0, 0, 0, 316, 294, 356, 330, 388, 360, 386, 0, 0, 0];
//----------------------------------------------

let img;

function setup() {
  createCanvas(567, 798);
  img = loadImage(eximg);
  colorMode(RGB, 1);
}

function draw() {

  background(255);
  fill(0)
  text(mouseX + ", " + mouseY, 40, 40)

  drawExercise();

  if (drawLines) {
    if (xp.length > 1) {
      for (var i = 0; i < xp.length - 1; i++) {
        if (xp[i] != 0 && yp[i] != 0)
          if (xp[i + 1] != 0 && yp[i + 1] != 0)
            line(xp[i], yp[i], xp[i + 1], yp[i + 1]);
      }
    }
  }

  fin();
}









function fin(){ if (dp()) { loop(); image(img, 0, 0); if(alp<1.0){fill(255,255,255,1.0-alp);alp+=0.005;rect(0,0 ,567, 798); }drawLines=false; }}function drawExercise(){ for(var i=0;i<stemx.length-1;i++){ line(stemx[i], stemy[i], stemx[i+1], stemy[i+1]); } for(var i=0;i<petalx.length;i++){ px=petalx[i]; py=petaly[i]; for(var j=0;j<px.length-1;j++){line(px[j], py[j], px[j+1], py[j+1]); } } strokeWeight(10); for(var i=0;i<figurex.length;i++){ point(figurex[i],figurey[i]); text(i+1,figurex[i]-10,figurey[i]-10); } strokeWeight(1);} function dp(){ if(xp.length != figurex.length) return false; var sum=0; for(var i=0;i<figurex.length;i++){ x=figurex[i]-xp[i]; y=figurey[i]-yp[i]; sum+=sqrt(x*x+y*y); } sum/=figurex.length; if(sum>10){ return false; }else{ return true; }}