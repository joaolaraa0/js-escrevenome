function setup() {
    createCanvas(500, 500);
    background("blue");
  }
  
  function draw() {
  
    stroke("orange");
    fill("yellow");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 10, 15);
    }
  }
  