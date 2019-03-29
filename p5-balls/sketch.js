var b1;
var b2;
var b3;

var ax = 0;
var ay = 0;

var spring = 0.03;

var synth;

// var e_chord = ["E3", "G3", "B3"];
// var C_chord = ["C3", "E3", "G3"];
// var G_chord = ["G3", "B3", "D3"];

function preload() {
  sound1 = loadSound('assets/1.wav');
  sound2 = loadSound('assets/2.wav');
  sound3 = loadSound('assets/3.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // synth = new Tone.PolySynth(4, Tone.Synth).toMaster()

  b1 = new Ball(50, 100, random(20, 70));
  b2 = new Ball(100, 100, random(20, 70));
  b3 = new Ball(75, 125, random(20, 70));

}

function draw() {

  background(255);
  if (b1.intersects(b2)) {
    background(255, 0, 0);
    sound1.play();
  } else if (b2.intersects(b3)) {
    background(0, 255, 0);
    sound2.play();
  } else if (b3.intersects(b1)) {
    background(0, 0, 255);
    sound3.play();
  }

  b1.update();
  b2.update();
  b3.update();
  b1.display();
  b2.display();
  b3.display();
}