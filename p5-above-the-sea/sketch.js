var weather;

var api = 'http://api.openweathermap.org/data/2.5/forecast?q=';
var city = 'Shanghai';
var apiKey = '&APPID=80d6dc5990d74e65b95e79f010d86d89';
var units = '&units=metric';
var sealevel;
var main;

var main_Synth = new Tone.MembraneSynth({
  "pitchDecay": 0.02,
  "octaves": 1,
  "oscillator": {
    "type": "sine"
  },
  "envelope": {
    "attack": 0.1,
    "decay": 0.6,
    "sustain": 0.1,
    "release": 10,
    "attackCurve": "exponential"
  }
}).toMaster();


var freeverb = new Tone.Freeverb({
  "roomSize": 0.8
}).toMaster();
freeverb.dampening.value = 500;

var sealevel_Synth = new Tone.FMSynth({
  "harmonicity": 1,
  "modulationIndex": 1,
  "detune": 0,
  "oscillator": {
    "type": "square"
  },

  "envelope": {
    "attack": 3,
    "decay": 0.3,
    "sustain": 1,
    "release": 5
  },
  "moduation": {
    "type": "sine"
  },
  "modulationEnvelope": {
    "attack": 5,
    "decay": 0.2,
    "sustain": 1,
    "release": 5
  }
}).connect(freeverb).toMaster();


var pitch;
var toneLoop;


var is_rain;
var is_clear;

var unit_width;
var counter;
var currentPos;
var sealevel_Pos;
var sealevel_Max;
var sealevel_Min;
var sealevel_Counter;

var c1;
var c2;

var myFont;

var _width = 1200;
var _height = 800;

function preload() {
  myFont = loadFont('assets/OpenSans-CondLight.ttf');
}

function setup() {
  createCanvas(1500, 830);
  background(255);

  askOpenWeather();
  setInterval(askOpenWeather, 10 * 60 * 1000);

  textFont(myFont);
  is_clear = ["C3", "E3", "G3", "C4", "E4", "C4", "G3", "E3"] //C Major
  is_clouds = ["C3", "D#3", "G3", "C4", "D#4", "C4", "G3", "D#3"] // C Minor
  is_rain = ["A2", "C3", "E3", "A3", "C4", "A3", "E3", "C3"] //A Minor
    //is_snow = ["A#2", "C#3", "F3", "A#3", "C#4", "A#3", "F3", "C#3"]
  is_snow = ["B2", "D3", "F#3", "B3", "D4", "B3", "F#3", "D3"] //B Minor

  sealevel_Scale = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"]

  counter = 0;
  currentPos = 0;
  sealevel_Pos = 0;
  sealevel_Max = 0;
  sealevel_Min = 2000;
  sealevel_Counter = 0;

  toneLoop = new Tone.Loop(function(time) {
    if (weather) {
      if (counter == 0) {
        isPlaying();

        // print(sealevel_Counter);
        var sealevel_Pos = floor(map(sealevel[currentPos], sealevel_Min, sealevel_Max, 0, sealevel_Scale.length - 1));

        var sealevel_Pitch = Tone.Frequency(sealevel_Scale[sealevel_Pos]).eval();
        sealevel_Synth.triggerAttackRelease(sealevel_Pitch, "2n", time);
      }

      if (main[currentPos] == "Rain") {
        note = is_rain[counter];
      } else if (main[currentPos] == "Clear") {
        note = is_clear[counter];
      } else if (main[currentPos] == "Clouds") {
        note = is_clouds[counter];
      } else if (main[currentPos] == "Snow") {
        note = is_snow[counter];
      }
      counter = counter + 1;
      //print(note);

      //var pitch = Tone.Frequency(((sealevel[currentPitch]) - 1030) * 200).eval();
      var pitch = Tone.Frequency(note).eval();
      main_Synth.triggerAttackRelease(pitch, "8n", time);

      if (counter == is_clear.length) {
        currentPos = (currentPos + 1) % weather.cnt;
        // sealevel_Counter = (sealevel_Counter + 1) % weather.cnt;
        counter = 0;
        // sealevel_Counter = sealevel_Counter + 1;
        // if (sealevel_Counter == weather.cnt) {
        //   sealevel_counter = 0;
        // }
      }
    }

  }, "8n").start(0);


  //Tone.Transport.bpm.value = 400; 
  Tone.Transport.start();

}

function askOpenWeather() {
  var url = api + city + apiKey + units;
  loadJSON(url, gotWeather, 'jsonp');
  //background(random(200, 255), random(200, 255), random(200, 255));
}

function gotWeather(data) {
  sealevel = [];
  main = [];


  weather = data;
  for (i = 0; i < weather.cnt; i++) {
    var sea_level = weather.list[i].main.sea_level;
    sealevel.push(sea_level)
  }

  for (i = 0; i < weather.cnt; i++) {
    var main_ = weather.list[i].weather[0].main;
    main.push(main_)
  }

  for (i = 0; i < weather.cnt; i++) {
    if (sealevel[i] < sealevel_Min) {
      sealevel_Min = sealevel[i];
    }
    if (sealevel[i] > sealevel_Max) {
      sealevel_Max = sealevel[i];
    }
  }

  unit_width = _width / weather.cnt;
  drawSealevelGradient();
}

function draw() {}

function isPlaying() {
  // background(255);
  stroke(0, 0, 255);
  strokeWeight(1);

  push();
  noStroke();
  if (main[currentPos] == "Rain") {
    fill(168, 255, 255, 80);
  } else if (main[currentPos] == "Clear") {
    fill(52, 204, 255, 80);
  } else if (main[currentPos] == "Clouds") {
    fill(110, 193, 248, 80);
  } else if (main[currentPos] == "Snow") {
    fill(174, 234, 255, 80);
  }
  rect(unit_width * currentPos, 0, unit_width, _height);
  pop();

  fill(255);
  noStroke();
  rect(0, _height + 1, width, height - _height);
  fill(0);
  text((currentPos + 1) * 3 + " hrs", unit_width * currentPos + 20, height - 12);
  stroke(1);
  line(0, _height + 13, unit_width * currentPos + 10, _height + 13);
}

function drawSealevelGradient() {
  background(255);
  c1 = color(47, 86, 233);
  c2 = color(255);
  for (i = 0; i < weather.cnt; i++) {
    push();
    //line(unit_width * i, 500 - 5 * (sealevel[i] - 1030), unit_width * (i + 1) - 2, 500 - 5 * (sealevel[i] - 1030));
    translate(unit_width * i, 400 - 8 * (sealevel[i] - 1040));
    for (var j = 0; j < 200; j++) {
      var inter = map(j, 0, 200, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      strokeWeight(2);
      line(0, j, unit_width, j);
    }
    pop();
  }

  stroke(0);
  line(_width, 0, _width, _height);
  if (weather) {
    fill(0);
    noStroke();
    textFont(myFont);
    textSize(12);
    text(city, _width + 20, 30);
    for (i = 0; i < weather.cnt; i++) {
      text(sealevel[i], _width + 20, 60 + i * (height / (weather.cnt) - 3));
      text(main[i], _width + 70, 60 + i * (height / (weather.cnt) - 3));
    }
    // text(weather.cnt, 150, 20);
  }

}