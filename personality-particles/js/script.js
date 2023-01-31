/**
Personality Particle: Breaking Up With a Lover </3
Leah Fawcett

*/

"use strict";

let particle = []; // set up the petal object to make flower shapes

function setup() {
  createCanvas(700, 700); // makes the canvas
  background(255, 121, 184);

  for (let i = 0; i < 50; i++) { // sets the max amount of petals to generate
    particle[i] = new Petal(100, 10, 10); // lets the computer know we will be making a new object
  }
}

function draw() {
  for (let i = 0; i < 50; i++) { // sets the max amount of petals to generate
    particle[i].display(); // 
  }
}

class Petal { // creates an object class for petals
  constructor(x, y, r) {
    this.x = random(0, 700); // places the leaves along the x value range
    this.y = random(0, 700); // places the leaves along the y value range
    this.r = random(20, 200); // decides radius value
  }

   display() {
    fill(0, 0, 0);
    ellipse(this.x, this.y);
  }
}