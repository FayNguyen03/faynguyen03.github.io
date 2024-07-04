let distMouse = 10;
let cols;
let rows;
let size = 10;
let blocks = [];
let offSet = 4;

function setup() {
  createCanvas(400, 400     );
  rectMode(CENTER);
  angleMode(DEGREES);
  cols = width / 2;
  rows = height / 2;
  for (let i = 0; i < cols; i++){
    blocks[i] = [];
    for(let j = 0; j < rows; j++){
      blocks[i][j] = new Block(size / 2 + i * size, size/2 + j * size);
    }
  }
}

function draw() {
  background(0);
  for (let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      blocks[i][j].move();
      blocks[i][j].display();
    }
  }
}
