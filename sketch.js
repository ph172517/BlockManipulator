
var d;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  d = select('.div-block');
 // f = select('#my-gui-container');
  d.position(0,0);

  gui = new Gui();
  let gui_setup = new dat.GUI();
  gui_setup.add(gui, 'RotateX', 0, 360).step(0.125).onChange(update);
  gui_setup.add(gui, 'RotateY', 0, 360).step(0.125).onChange(update);
  gui_setup.add(gui, 'RotateZ', 0, 360).step(0.125).onChange(update);
  gui_setup.add(gui, 'Scale', 0.125, 5).step(0.125).onChange(update);
  gui_setup.add(gui, 'X', 1, 100).step(1).onChange(update);
  gui_setup.add(gui, 'Y', 1, 100).step(1).onChange(update);
  gui_setup.add(gui, 'Z', 1, 100).step(1).onChange(update);
  gui_setup.add(gui, 'strokeWeight', 1, 10).step(1).onChange(update);
  gui_setup.add(gui, 'noFill');
  gui_setup.add(gui, 'Box2');

  gui_setup.addColor(gui,'stroke').onChange(update);
  gui_setup.addColor(gui,'color').onChange(update);
  gui_setup.addColor(gui,'bColor').onChange(update);
  
  //gui_setup.add(gui, 'description').onChange(description);

}

function draw() {
  background(gui.bColor);
  
  if(gui.noFill){
    noFill(gui.color);
  }

  rotateX(gui.RotateX * (3.1415926 / 180));
  rotateY(gui.RotateY * (3.1415926 / 180));
  rotateZ(gui.RotateZ * (3.1415926 / 180));
  box(gui.X * gui.Scale, gui.Y * gui.Scale, gui.Z * gui.Scale);
  
  if(gui.Box2){
     box(gui.X * gui.Scale /2, gui.Y * gui.Scale /2, gui.Z * gui.Scale /2);
  }
  
  stroke(gui.stroke);
  strokeWeight(gui.strokeWeight);
  fill(gui.color);

}

function update() {
  redraw();
}

//function description() {

//    f.style('color', gui.dColor);
//
//    if (gui.description) {
//
//        d.style('color', gui.dColor);
//        d.show();
//
//    } else {
//        d.style('display', 'none');
//    }
//}

function Gui() {
  this.RotateX = 330;
  this.RotateY = 125;
  this.RotateZ = 0;
  this.Scale = 2.5;
  this.X = 50;
  this.Y = 50; 
  this.Z = 100;
  this.strokeWeight = 5;
  this.noFill = true
  this.Box2 = false
  this.stroke = '#ffffff'
  this.color = '#ffffff';
  this.bColor = '#215da7';
 // this.description = true;

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}