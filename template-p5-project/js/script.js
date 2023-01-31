/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

/https://genekogan.com/code/p5js-transformations/
/colorMode 
*/
"use strict";

let honeyMoon = [250, 131, 173];
let breakUp = [255, 0, 0];
let personalGrief= [17, 2, 33];
let deadRose = [0, 0, 0];

function setup() {
  createCanvas(500, 500);
  
}

function draw() {

  background(0, 0, 0);
  for (let f = 0; f < 5; f++) {
    resetMatrix();
    let angle = (TWO_PI/5)*f;
    translate(
      sin(angle)*100,
      cos(angle)*100
    )
    beginShape();
    vertex(mouseX, mouseY);
    bezierVertex(300, f, 5, 200, mouseX, mouseY);
    endShape();
  }
}
