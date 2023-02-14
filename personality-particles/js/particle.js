/**
Personality Particle: Breaking Up With a Lover </3
Leah F

//https://www.youtube.com/watch?v=TaN5At5RWH8

*/

"use strict";

let turn = 0; 

class Petal { // creates an object class for petals
  constructor(x, y, r, lifetime) {
    this.x = x;//random(0, windowWidth); // places the petals along the x value range
    this.y = y; // places the petals along the y value range
    this.r = 100; // decides radius value
    this.lifetime = 50;
    }

    display() {
      colorMode(HSB, 360, 100, 100, 100); // changes the colour mode of particles to HSB, allowing for richer colours
      noStroke(); // removes stroke
      let firstColour = color(345, 40, 99); // pale pink
      let secondColour = color(350, 100, 100); // bright red
      let percent = map(this.lifetime, 50, 0, 0, 1); // maps the lifetime to the percentage value for lerp
      let colourEffect = lerpColor(firstColour, secondColour, percent); // moves from pink to red with lifetime as the percentage value

      fill(colourEffect); // fills with the shifting effect 
      ellipse(width/5, 0, this.lifetime, this.lifetime); // makes the particles display as an ellispe
      }

      clicked(ex, why) {
        let range = dist(ex, why, this.x, this.y);
        if (range < this.r) {
          print("clicked!!")
          this.decay;
        }
      }

      finished() {
        return (this.lifetime < 0);
      }

      decay() {
        this.lifetime -= 0.1;
      }
    }