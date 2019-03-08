var rule1 = false;

var pointX = 0;
var pointY = 0;

var sidelength = 400;

var n = 3;
var vertices = [];
for (var i = 0; i < n; i++) {
  var vert = [Math.round(sidelength*Math.cos(i*2*Math.PI/n)), Math.round(sidelength*Math.sin(i*2*Math.PI/n))];
  vertices.push(vert);
}

var vertex = vertices[0];

function updateN() {
  n = parseInt(document.getElementById('sides').value);
  background(0);
  drawPolygon();
}

function toggleRule1() {
  if (rule1 == true) {
    rule1 = false;
  } else {
    rule1 = true;
  }
  updateN()
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  background(0);
  translate(width/2, height/2);
  scale(1, -1);
  cursor(ARROW);
  
  drawPolygon();
}

function drawPolygon() {
  vertices = [];
  for (var i = 0; i < n; i++) {
    var vert = [Math.round(sidelength*Math.cos(i*2*Math.PI/n)), Math.round(sidelength*Math.sin(i*2*Math.PI/n))];
    vertices.push(vert);
  }
  
  stroke(0, 163, 255); //rgb(0, 163, 255)
  strokeWeight(1);
  for (var i = 0; i < vertices.length-1; i++) {
    line(vertices[i][0], vertices[i][1], vertices[i+1][0], vertices[i+1][1]);
    console.log(vertices[i][0], vertices[i][1], vertices[i+1][0], vertices[i+1][1]);
  }
  line(vertices[vertices.length-1][0], vertices[vertices.length-1][1], vertices[0][0], vertices[0][1] );
}

function draw() {
  stroke(255);
  strokeWeight(1);
  translate(width/2, height/2);
  scale(1, -1);
  
  for (var i = 0; i < 100; i++) {
    point(pointX, pointY);
    
    if (rule1) {
      var done = false;
      while (!done) {
        possible = vertices[Math.floor(Math.random()*(n-0.00000001))];
        if (possible!=vertex) {
          vertex = possible;
          done = true;
        }
      }
    } else {
      vertex = vertices[Math.floor(Math.random()*(n-0.00000001))];
    }
    
    pointX = Math.floor((pointX+vertex[0])/2);
    pointY = Math.floor((pointY+vertex[1])/2);
  }
}