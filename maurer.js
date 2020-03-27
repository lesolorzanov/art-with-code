// Maurer Rose
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingInTheCabana/002-collatz-conjecture.html
// https://youtu.be/4uU9lZ-HSqA
// https://editor.p5js.org/codingtrain/sketches/qa7RiptE9

let n = 0;
let d = 0;
let dSlider;
var data = [];

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  nSlider = createSlider(1, 180, 1);
  dSlider = createSlider(1, 180, 1);

}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  stroke(1)
  fill(255)
  text(n + ", " + d, 35 - width / 2, 35 - height / 2)
  text(mouseX + ", " + mouseY, 85 - width / 2, 85 - height / 2)

  stroke(255);
  n = nSlider.value();
  d = dSlider.value();

  //n=59;//62
  //d=17;//38

  noFill();
  strokeWeight(1);
  stroke(255);
  old = [0, 0]
  for (let i = 0; i < 361 * 2; i++) {
    let k = i * d;
    let r = 350 * sin(n * k)
    let x = r * cos(k);
    let y = r * sin(k);

    stroke(0.7286 * r, 255 - 0.7286 * r, abs(0.7286 * r))
    line(old[0], old[1], x, y)
    old = [x, y]
  }

}


