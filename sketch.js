var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var formObject, playerObject, gameObject; //objects of the class
var playerCount;
var allPlayers; //to store the information (name, distance, positions) of all the players
var car1, car2;
var cars = [];

//BP
function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();

  //to create an object from a class --> objectName = new ClassName()
  gameObject = new Game();

  //calling the function which is created in the game.js
  gameObject.getState();


  gameObject.wait();
 
}

//BP
function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    gameObject.update(1);
  }

  if (gameState === 1) {
    gameObject.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
