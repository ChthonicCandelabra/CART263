/**
Personality Particles: Breaking Up With a Lover </3
Leah F

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
<<<<<<< Updated upstream
  // let place = new Petal(mouseX, mouseY, 100)
  // particle.push(place);

  turn++; // Increases the turn counter by 1 per click.
  print(turn);

  // for (let i = 0; i < particle.length; i++) {
  //   particle[i].clicked(mouseX, mouseY);
  // }
=======
  for (let i = particle.length - 1; i >= 0; i--) {
    particle[i].clicked(mouseX, mouseY); // declares a bubble is clicked
  }
>>>>>>> Stashed changes
}

function draw() {

  colorMode(HSB, 360, 100, 100, 1); // changes the colour mode of particles to HSB, allowing for richer colours
    let startBG = color(345, 60, 80, 0.4); // pale pink
    let endBG = color(345, 60, 0, 0.4); // bright red
      let percent = map(count, 15, 0, 0, 1); // maps the lifetime to the percentage value for lerp
      let newBG = lerpColor(startBG, endBG, percent); // moves from pink to red with lifetime as the percentage value
  background(newBG);

  let spin = TWO_PI * (0.0005*frameCount);	// animates the particles with frame count to create a spinning effect

<<<<<<< Updated upstream
  for (let i = 0; i < 3; i++) { // sets the max amount of petals to generate
    particle.push(new Petal(mouseX, mouseY, 100));
   
    particle[i].display(); // calls the particle speficic functions
    particle[i].move(); //^
    particle[i].tooFastTooSoon(); //
   // particle[i].decay(); // 
    
  }
=======
  translate(width/2, height/2); // centers the big circle
	for (var i = 0; i < count; i++) {
		push();
		rotate(spin + TWO_PI * i / 15); // creates a spinning circle, with room for 15 evenly spaced particles
		particle.push(new Petal(mouseX, mouseY, 10));
    particle[i].display(); // calls the particle speficic functions
    particle[i].decay(); // ^^
		pop();
	}
>>>>>>> Stashed changes

  for (let i = particle.length - 1; i >= 0; i--) {
    if (particle[i].finished()) { // detects if the particles have finished decaying
      particle.splice(i, 1) && count--; // removes particles who haved decayed and brings the count value down
    }
  }
<<<<<<< Updated upstream
}

class Petal { // creates an object class for petals
  constructor(x, y, r, lifetime) {
    // this.x = mouseX; // places the petals on the mouse's x position
    // this.y = mouseY; // places the petals on the mouse's y position
    this.x = random(0, windowWidth); // places the petals along the x value range
    this.y = 0; // places the petals along the y value range
    this.r = 100; // decides radius value
    this.lifetime = 50;
    }

    display() {
      //colorMode(HSB, 0, 100, 100) // changes the colour mode of particles to HSB
      noStroke();
      let firstColour = color(250, 131, 173); // pink
      let secondColour = color(255, 0, 0); // red
      let thirdColour = color(17, 2, 33); // violet
      let fourthColour = color(0, 0, 0); // black
      let percent = map(this.lifetime, 50, 0, 0, 1); // maps the lifetime to the percentage value for lerp
      let colourEffect = lerpColor(firstColour, secondColour, percent); // puts it all together into a usuable variable

      fill(colourEffect);
      ellipse(this.x, this.y, this.lifetime*2, this.lifetime*4); // makes the particles display as an ellispe
      // vertex(this.x, this.y);
      //  bezierVertex(this.x + 10, this.x + 10, 0, this.y + 3, this.x, this.y);
      // endShape();
      }

      // clicked(ex, why) {
      //   let range = dist(ex, why, this.x, this.y);
      //   if (range < this.r) {
          
      //   }
      // }

      move() {
        this.x = this.x + lerp(random(-50, -45), random(45, 50), 0.5); // makes the particles shake with lerp
        this.y+=5;
      }

      finished() {
        return (this.lifetime < 0);
      }

      decay() {
        this.lifetime -= 0.1;
      }

      tooFastTooSoon() {
        for (let i = particle.length - 1; i >= 0; i--) {
          if (this.y > windowHeight + 150 ) {
            particle.splice(i, 1);
          }
        }
      }


    }
=======
}
>>>>>>> Stashed changes
