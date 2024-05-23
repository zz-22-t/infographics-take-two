const coordinates = [];
function setup() {
  createCanvas(400, 400);
  getCircleCoordinates(width / 3.5, 28, width / 2, height / 2, true);
  console.log(coordinates);
}

function draw() {
  ///background(220);
  noStroke();
  ///circle(width/2,height/2,width/2.5);
  //print(i);
  // } to think

  //getCircleCoordinates(width/3.5, 28,width/2,height/2)
}

function getCircleCoordinates(
  radius,
  steps = 28,
  centerX = 0,
  centerY = 0,
  setup = false
) {
  // Calculate the angle increment for each point
  const angleStep = (Math.PI * 2) / steps;

  // Loop through angles from 0 to 2PI
  for (let angle = 0; angle <= Math.PI * 2; angle += angleStep) {
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    //c.elt.mouseOver(overcircle);
    if (setup == true) {
      let c = circle(x, y, width / 25); ///looping to make multiple circles
    }
    if (setup == true) {
      coordinates.push({ x, y });
    }
  }

  return coordinates;
}
function mouseMoved() {
  //console.log(mouseX,mouseY);

  for (var i = 0; i < coordinates.length; i++) {
    //console.log(coordinates[i]);
    let distance = dist(coordinates[i].x,coordinates[i].y, mouseX, mouseY);
    
    if (distance<1.5){
      console.log(distance,i,"mouseMoved");
    }
  }
}

function overcircle(e) {
  let distance = dist(e.clientX, e.clientY, mouseX, mouseY);
  //console.log(distance,"overcircle");
}

