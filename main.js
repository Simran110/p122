x = 0;
y = 0;
draw_apple = "";

var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function preload() {
  img = loadImage(
    "https://i.postimg.cc/mg6ccttS/apple-1783882-640-removebg-preview.png"
  );
}

function start() {
  document.getElementById("status").innerHTML =
    "System is listening please speak";
  recognition.start();
}

recognition.onresult = function (event) {
  console.log(event);

  var content = event.results[0][0].transcript;

  document.getElementById("status").innerHTML =
    "The Speech has been recognized as: " + content;
  if (content == "apple" || content == "Apple" || content == "Apple.") {
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);
    document.getElementById("status").innerHTML = "Started drawing Apples ";
    draw_circle = "set";
  }
};

function setup() {
  canvas = createCanvas(900, 600);
}

function draw() {
  if (draw_apple == "set") {
    radius = Math.floor(Math.random() * 100);
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Apple is drawn ";
    draw_apple = "";
  }
}
