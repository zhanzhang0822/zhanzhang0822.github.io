var init_column = 80;
var init_row = 80;

var column = init_column;
var row = init_row;
var weight = 5;
var margin = 80;
var myFont;

//////////
var player_A;
var player_B;
var player_C;
var player_D;
var player_E;
var player_F;
var player_G;
var player_H;
var player_I;
var player_J;
var player_K;
var player_L;
var player_M;
var player_N;
var player_O;
var player_P;
var player_Q;
var player_R;
var player_S;
var player_T;
var player_U;
var player_V;
var player_W;
var player_X;
var player_Y;
var player_Z;

//////////////
var player_0;
var player_1;
var player_2;
var player_3;
var player_4;
var player_5;
var player_6;
var player_7;
var player_8;
var player_9;

//////////////
var player_SPACE;
var player_DELETE;

//////////////
var player_PERIOD;
var player_COMMA;

function preload() {
  player_A = new Tone.Player("/p5-pop-and-poem-typewriter/samples/A.wav");
  player_A.toMaster();

  player_B = new Tone.Player("/p5-pop-and-poem-typewriter/samples/B.wav");
  player_B.toMaster();

  player_C = new Tone.Player("/p5-pop-and-poem-typewriter/samples/C.wav");
  player_C.toMaster();

  player_D = new Tone.Player("/p5-pop-and-poem-typewriter/samples/D.wav");
  player_D.toMaster();

  player_E = new Tone.Player("/p5-pop-and-poem-typewriter/samples/E.wav");
  player_E.toMaster();

  player_F = new Tone.Player("/p5-pop-and-poem-typewriter/samples/F.wav");
  player_F.toMaster();

  player_G = new Tone.Player("/p5-pop-and-poem-typewriter/samples/G.wav");
  player_G.toMaster();

  player_H = new Tone.Player("/p5-pop-and-poem-typewriter/samples/H.wav");
  player_H.toMaster();

  player_I = new Tone.Player("/p5-pop-and-poem-typewriter/samples/I.wav");
  player_I.toMaster();

  player_J = new Tone.Player("/p5-pop-and-poem-typewriter/samples/J.wav");
  player_J.toMaster();

  player_K = new Tone.Player("/p5-pop-and-poem-typewriter/samples/K.wav");
  player_K.toMaster();

  player_L = new Tone.Player("/p5-pop-and-poem-typewriter/samples/L.wav");
  player_L.toMaster();

  player_M = new Tone.Player("/p5-pop-and-poem-typewriter/samples/M.wav");
  player_M.toMaster();

  player_N = new Tone.Player("/p5-pop-and-poem-typewriter/samples/N.wav");
  player_N.toMaster();

  player_O = new Tone.Player("/p5-pop-and-poem-typewriter/samples/O.wav");
  player_O.toMaster();

  player_P = new Tone.Player("/p5-pop-and-poem-typewriter/samples/P.wav");
  player_P.toMaster();

  player_Q = new Tone.Player("/p5-pop-and-poem-typewriter/samples/Q.wav");
  player_Q.toMaster();

  player_R = new Tone.Player("/p5-pop-and-poem-typewriter/samples/R.wav");
  player_R.toMaster();

  player_S = new Tone.Player("/p5-pop-and-poem-typewriter/samples/S.wav");
  player_S.toMaster();

  player_T = new Tone.Player("/p5-pop-and-poem-typewriter/samples/T.wav");
  player_T.toMaster();

  player_U = new Tone.Player("/p5-pop-and-poem-typewriter/samples/U.wav");
  player_U.toMaster();

  player_V = new Tone.Player("/p5-pop-and-poem-typewriter/samples/V.wav");
  player_V.toMaster();

  player_W = new Tone.Player("/p5-pop-and-poem-typewriter/samples/W.wav");
  player_W.toMaster();

  player_X = new Tone.Player("/p5-pop-and-poem-typewriter/samples/X.wav");
  player_X.toMaster();

  player_Y = new Tone.Player("/p5-pop-and-poem-typewriter/samples/Y.wav");
  player_Y.toMaster();

  player_Z = new Tone.Player("/p5-pop-and-poem-typewriter/samples/Z.wav");
  player_Z.toMaster();

  //////////////
  player_0 = new Tone.Player("/p5-pop-and-poem-typewriter/samples/0.wav");
  player_0.toMaster();

  player_1 = new Tone.Player("/p5-pop-and-poem-typewriter/samples/1.wav");
  player_1.toMaster();

  player_2 = new Tone.Player("/p5-pop-and-poem-typewriter/samples/2.wav");
  player_2.toMaster();

  player_3 = new Tone.Player("/p5-pop-and-poem-typewriter/samples/3.wav");
  player_3.toMaster();

  player_4 = new Tone.Player("/p5-pop-and-poem-typewriter/samples/4.wav");
  player_4.toMaster();

  player_5 = new Tone.Player("/p5-pop-and-poem-typewriter/samples/5.wav");
  player_5.toMaster();

  player_6 = new Tone.Player("/p5-pop-and-poem-typewriter/samples/6.wav");
  player_6.toMaster();

  player_7 = new Tone.Player("/p5-pop-and-poem-typewriter/samples/7.wav");
  player_7.toMaster();

  player_8 = new Tone.Player("/p5-pop-and-poem-typewriter/samples/8.wav");
  player_8.toMaster();

  player_9 = new Tone.Player("/p5-pop-and-poem-typewriter/samples/9.wav");
  player_9.toMaster();

  //////////////
  player_SPACE = new Tone.Player("/p5-pop-and-poem-typewriter/samples/SPACE.wav");
  player_SPACE.toMaster();

  player_DELETE = new Tone.Player("/p5-pop-and-poem-typewriter/samples/DELETE.wav");
  player_DELETE.toMaster();

  //////////////
  player_PERIOD = new Tone.Player("/p5-pop-and-poem-typewriter/samples/PERIOD.wav");
  player_PERIOD.toMaster();

  player_COMMA = new Tone.Player("/p5-pop-and-poem-typewriter/samples/COMMA.wav");
  player_COMMA.toMaster();
  
  myFont = loadFont('/p5-pop-and-poem-typewriter/assets/DejaVuSans-ExtraLight.ttf');

}

function setup() {
  createCanvas(1190, 600);
  stroke(255, 0, 0);
  strokeWeight(weight);
  rect(0, 0, width, height);
  noStroke();
  textFont(myFont);
  textSize(30);
}


function draw() {
  //background(200);
}

function keyTyped() {

  if (key == 'A' || key == 'a') {
    player_A.start();
  }

  if (key == 'B' || key == 'b') {
    player_B.start();
  }

  if (key == 'C' || key == 'c') {
    player_C.start();
  }

  if (key == 'D' || key == 'd') {
    player_D.start();
  }

  if (key == 'E' || key == 'e') {
    player_E.start();
  }

  if (key == 'F' || key == 'f') {
    player_F.start();
  }

  if (key == 'G' || key == 'g') {
    player_G.start();
  }

  if (key == 'H' || key == 'h') {
    player_H.start();
  }

  if (key == 'I' || key == 'i') {
    player_I.start();
  }

  if (key == 'J' || key == 'j') {
    player_J.start();
  }

  if (key == 'K' || key == 'k') {
    player_K.start();
  }

  if (key == 'L' || key == 'l') {
    player_L.start();
  }

  if (key == 'M' || key == 'm') {
    player_M.start();
  }

  if (key == 'N' || key == 'n') {
    player_N.start();
  }

  if (key == 'O' || key == 'o') {
    player_O.start();
  }

  if (key == 'P' || key == 'p') {
    player_P.start();
  }

  if (key == 'Q' || key == 'q') {
    player_Q.start();
  }

  if (key == 'R' || key == 'r') {
    player_R.start();
  }

  if (key == 'S' || key == 's') {
    player_S.start();
  }

  if (key == 'T' || key == 't') {
    player_T.start();
  }

  if (key == 'U' || key == 'u') {
    player_U.start();
  }

  if (key == 'V' || key == 'v') {
    player_V.start();
  }

  if (key == 'W' || key == 'w') {
    player_W.start();
  }

  if (key == 'X' || key == 'x') {
    player_X.start();
  }

  if (key == 'Y' || key == 'y') {
    player_Y.start();
  }

  if (key == 'Z' || key == 'z') {
    player_Z.start();
  }


  //////////
  if (key == '0') {
    player_0.start();
  }

  if (key == '1') {
    player_1.start();
  }

  if (key == '2') {
    player_2.start();
  }

  if (key == '3') {
    player_3.start();
  }

  if (key == '4') {
    player_4.start();
  }

  if (key == '5') {
    player_5.start();
  }

  if (key == '6') {
    player_6.start();
  }

  if (key == '7') {
    player_7.start();
  }

  if (key == '8') {
    player_8.start();
  }

  if (key == '9') {
    player_9.start();
  }

  //////////
  if (key == " ") {
    player_SPACE.start();
  }

  //////////
  if (keyCode == 46) { //keyPressed 190
    player_PERIOD.start();
  }

  if (keyCode == 44) { //keyPressed 188
    player_COMMA.start();
  }

  if (row > height - margin) {
    stroke(255, 0, 0);
    strokeWeight(weight);
    fill(255);
    rect(0, 0, width, height);
    noStroke();
    row = init_row;
    column = init_column;
  }


  //textSize(30);
  fill(0);
  text(key, column, row);
  column = column + 40;
  noFill();


  if (column >= width - margin) {
    row = row + 40;
    column = init_column;
  }
}


function keyPressed() {
  if (keyCode == 8) {
    player_DELETE.start();

    if (column == margin) {
      row = row - 40;
      column = width - 70;
      if (row < init_row && column == width - 70) {
        column = init_column;
        row = init_row;
      }
    }

    if (column > init_column) {
      column = column - 40;
      noStroke();
      fill(255, 0, 0);
      rect(column - 10, row - 25, 40, 35);
    }

    if (row > height - margin) {
      stroke(255, 0, 0);
      strokeWeight(weight);
      fill(255);
      rect(0, 0, width, height);
      noStroke();
      row = init_row;
      column = init_column;
    }
  }
}

function mousePressed() {
  //player.reverse = !player.reverse;
}