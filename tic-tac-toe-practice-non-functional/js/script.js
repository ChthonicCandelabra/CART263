/**
Tic Tac Toe 
Leah

Coding challenge for class.
I needed the following tutorial for a refresher on for loops and grids. I also referenced my work from last semester. If I didn't I would have nothing to hand in;
xin xin ~ Nested for Loop - Draw a Grid! https://www.youtube.com/watch?v=FAVvj1M6klc

*/

"use strict";

let turn = 0; // Sets up the turn counter to decide what shape to use. X is first, O is second. A game will end in 9 turns.
// let cellMaker = []; // Was supposed to be used to create object cells that could register whether they held an X or O upon click, but I don't know how to do that
let winX = 0; // Counter for X wins
let winO = 0; // Counter for O wins
let colourOne = [232, 81, 141]; // Pink
let colourTwo = [255, 173, 77]; // Yellow
let xImage, oImage; // Variables for images

function preload() { // Reduce wait time by loading images first
  xImage = loadImage("assets/images/X Image Token.png");
  oImage = loadImage("assets/images/O Image Token.png");
}

function setup() {
  createCanvas(500, 600);
  background(0, 0 , 0);
  stroke(0, 0, 0);
  strokeWeight(1);
 // cellMaker = new Box(); 
}

function draw() {

  textSize(100) // Text size for scoreboard
  text(winX, width/3.6, height/1.04); // Positions the text and makes it display the variable for X wins.
  text(winO, width/1.64, height/1.04); // Positions the text and makes it display the variable for O wins.

  fill(255, 255, 255, 10); // Colours both the text and grid.

   // Makes the grid, currently not interactive. It also used to work but I don't know what went wrong.
   for(let x = 0; x < 3; x++); { // Makes rows, x = number of cells.
    for(let y = 0; y < 3; y++); { // Makes collumns, y = number of cells.
        rect(x*500/3, y*500/3, 500/3, 500/3); // Makes the non functional cells.
    }
  }

  gameEnd();
}

// class Box { // Creates a new class of objects as I knew that using class and objects was a way to make the cells work, but I didn't know enough to make it functional.
//   constructor() {
//     this.x = 100; Basic dimensions of a cell for a test. The test didn't go well.
//     this.y = 100;
//   }
// }

// grid() {
// I think I would've put the grid code that is currently in draw here but that didn't work.
// }

function mousePressed() {
  turn++; // Increases the turn counter by 1 per click.
  print(turn);
  if (turn%2) { // Changes the background if the turn # is even or odd. This would have also determined if a click placed an X or an O. I thought that would've been more intuitive than using KeyPressed for X and MousePressed for O, which was my original idea.
    background(colourOne)
    stroke(colourOne);
  } else {
    background(colourTwo)
    stroke(colourTwo);
  }
}

function gameEnd() { // A game of Tic Tac Toe will always end in at most 9 turns. This function resets the turn counter at that time to reflect that. I think it could also be modififed to end the game once a win condition was met.
  if (turn > 8) {
    turn = 0;
  }
}
