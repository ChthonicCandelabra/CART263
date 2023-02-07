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
  createCanvas(1000, 1000);
  
}

function draw() {

  background(0, 0, 0);

  fill(honeyMoon);

  translate(width/2, height/2);
	for (var i = 0; i < 8; i++) {
		push();
		rotate(TWO_PI * i / 8);
    vertex(0, 0);
     bezierVertex(20, 20, 0, 30, 0, 0);
    endShape();

    pop();
  }
}
