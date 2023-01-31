/**
Personality Particle: Breaking Up With a Lover </3
Leah F

*/

"use strict";

let particle = []; // set up the petal object to make flower shapes

function setup() {
  createCanvas(700, 700); // makes the canvas

  for (let i = 0; i < 1; i++) { // sets the max amount of petals to generate
    particle[i] = new Petal(); // lets the computer know we will be making a new object

  }
}

function draw() {
  background(66, 47, 53);
  for (let i = 0; i < 1; i++) { // sets the max amount of petals to generate
    particle[i].display(); // 

  }
}

class Petal { // creates an object class for petals
  constructor(x, y) {
    this.x = random(50, 650); // places the leaves along the x value range
    this.y = random(50, 650); // places the leaves along the y value range
  }

   display() {
    noStroke();
    fill(255, 0, 0);
   beginShape();
    vertex(this.x, this.y);
    bezierVertex(80, 0, 80, 75, 30, 75);
    endShape();
}
  }