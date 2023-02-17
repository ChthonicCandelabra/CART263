/**
Personality Particles: Breaking Up With a Lover </3
Leah F

//Resources used
//https://www.youtube.com/watch?v=TaN5At5RWH8
//https://www.youtube.com/watch?v=syR0klfncCk
//https://genekogan.com/code/p5js-transformations/

*/

"use strict";

let particle = []; // set up the petal object to make flower shapes
let count = 15;

function setup() {
  createCanvas(windowWidth, windowHeight); // size canvas depending on window dimensions

  for (let i = 0; i < 10; i++) { // sets the max amount of petals to generate
    particle[i] = new Petal(200, 200, 40); // lets the computer know we will be making a new object
  }
}

function mousePressed() {

  for (let i = particle.length - 1; i >= 0; i--) {
    particle[i].clicked(mouseX, mouseY); // declares a bubble is clicked
  }
}

function draw() {

  colorMode(HSB, 360, 100, 100, 1); // changes the colour mode of particles to HSB, allowing for richer colours
    let startBG = color(345, 60, 80, 0.4); // pale pink
    let endBG = color(345, 60, 0, 0.4); // bright red
      let percent = map(count, 15, 0, 0, 1); // maps the lifetime to the percentage value for lerp
      let newBG = lerpColor(startBG, endBG, percent); // moves from pink to red with lifetime as the percentage value
  background(newBG);

  let spin = TWO_PI * (0.0005*frameCount);	// animates the particles with frame count to create a spinning effect

  translate(width/2, height/2); // centers the big circle
	for (var i = 0; i < count; i++) {
		push();
		rotate(spin + TWO_PI * i / 15); // creates a spinning circle, with room for 15 evenly spaced particles
		particle.push(new Petal(mouseX, mouseY, 10));
    particle[i].display(); // calls the particle speficic functions
    particle[i].decay(); // ^^
		pop();
	}

  for (let i = particle.length - 1; i >= 0; i--) {
    if (particle[i].finished()) { // detects if the particles have finished decaying
      particle.splice(i, 1) && count--; // removes particles who haved decayed and brings the count value down
    }
  }
}