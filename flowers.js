 function setup() {
     createCanvas(640, 480);
     colorMode(RGB, 1)
     background(255)
    /*for(var i = 0; i < 20; ++i) {
       roundFlower(50, 7, random()*width, random()*height);
       arcFlower(50, 10, random()*width, random()*height);
     }*/
     roundFlower(50, 7, 100, 250);
     arcFlower(50, 10, 300, 250);
   }


   function roundFlower(r, p, cx, cy) {
     lg_r = 1.2 * r;
     fill(random(), random(), random())
     for (var i = 0; i < p; ++i) {
       angle = i * TWO_PI / p;
       x = cx + cos(angle) * r;
       y = cy + sin(angle) * r;
       ellipse(x, y, r, r);
     }
     fill(random(), random(), random())
     ellipse(cx, cy, lg_r, lg_r);
   }

   function arcFlower(r, p, cx, cy) {
     lg_r = 1.2 * r;
     sm_r = 0.2 * r;
     fill(random(), random(), random())
     delta = TWO_PI / p;

     for (var i = 0; i < p; ++i) {
       angle = i * TWO_PI / p;
       x = cx + cos(angle) * sm_r;
       y = cy + sin(angle) * sm_r;
       arc(x, y, 3 * r, 3 * r, angle - delta / 2, angle + delta / 2, PIE);
     }
     fill(random(), random(), random())
     ellipse(cx, cy, lg_r, lg_r);
   }