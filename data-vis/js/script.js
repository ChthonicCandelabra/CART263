/**
Data Visualization: Sleep Qaulity
Leah F
*/

let table;

function preload() { // loads the table in advance
  table = loadTable("Sleep_Efficiency.csv", "csv", "header");
}

function setup() {
  createCanvas(800, 800); // I decided to use the same size of canvas as the example because I liked the way it looked
  
  for (let e = 0; e < table.getRowCount(); e++) { // goes through the efficiency column
    efficiency = table.getString(e, 2);
    print(efficiency);
  }

  for (let d = 0; d < table.getRowCount(); d++) { // goes through the duration column
    duration = table.getString(d, 1);
    print(duration);
  }
}

function draw() {
  background(0, 0.5); // semi transparent background for a cool effect
  colorMode(HSB, 360, 100, 100, 1); // HSB allows for more control over colours and also makes them look better, I prefer it over RBG
  noStroke(); // I find that shapes without stroke look better

  let hue = map(int(efficiency), 0, 1, 0, 330); // maps the sleep efficiency data to the hue of HSB
  
  fill(hue, 90, 100, 1); // fill should change as the efficiency data does
  ellipse(width/2, height/2, int(duration)*100); // ellispe is centered and size is dependant on the sleep duration
}