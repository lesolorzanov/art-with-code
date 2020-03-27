// Maurer Rose
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingInTheCabana/002-collatz-conjecture.html
// https://youtu.be/4uU9lZ-HSqA
// https://editor.p5js.org/codingtrain/sketches/qa7RiptE9

let n = 0;
let d = 0;
let dSlider;
var data = [];

var oldfreq=0;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  nSlider = createSlider(1, 180, 1);
  dSlider = createSlider(1, 180, 1);

  frameRate(20);
  
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);

}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  stroke(1)
  fill(255)
  text(n + ", " + d, 35 - width / 2, 35 - height / 2)
  text(mouseX + ", " + mouseY, 85 - width / 2, 85 - height / 2)

  stroke(255);
  //n = nSlider.value();
  //d = dSlider.value();

  var spectrum = fft.analyze();

  s = 0.0;
  ind = 0;
  fundfreq = 0.0;

  for (i = 0; i < spectrum.length; i++) {
    if (s < spectrum[i]) {
      s = spectrum[i];
      ind = i;
    }
    fundfreq = ind * sampleRate() / 1024;

  }
  
  oldfreq = lerp(fundfreq, oldfreq, 0.01);
  
  n=map(fundfreq,0,1000,0,180)
  d=map(mouseX,0,width,0,180).toFixed()
  
  c=map(fundfreq,0,1000,0,255)

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

    //stroke(0.7286 * r, 255 - 0.7286 * r, abs(0.7286 * r))
    stroke(0.7286 * c*r, c, abs(0.7286 * c))
    line(old[0], old[1], x, y)
    old = [x, y]
  }

}

function mousePressed() {
  saveCanvas('myCanvas', 'jpg');
}