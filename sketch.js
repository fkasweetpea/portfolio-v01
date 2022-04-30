//interactive epitrochoid curve

var nPoints = 125; //number of points along the curve
var noiseParam=1;
var noiseStep=0.01;
var x; //for points along curve
var y; //for points along curve

function setup() {
    var canvas = createCanvas(windowWidth/3,windowHeight/1.5);
    canvas.parent('sketch-holder');
    frameRate(10);
}

function draw() {
    background(180);
    //draws the epitrochoid curve
    //Cartesian Parametric Form  [x=f(t), y=g(t)]
    push();
    translate(width/2, height/2);
    var a = windowWidth/20;
    var b = a;
    var h = constrain(mouseY / 50.0, 0, b);
    var ph = mouseX / 10;
    fill(mouseX,0,mouseY);
    noStroke();
    beginShape();
    for (var i = 0; i<nPoints+1; i++) {
        var t = map(i, 0, nPoints, 0, TWO_PI); //theta mapped through radians
        //Cartesian Parametric Form  [x=f(t), y=g(t)]
        x = (a + b) * cos(t) - h * cos(ph + t * (a + b) / b);
        y = (a + b) * sin(t) - h * sin(ph + t * (a + b) / b);
        var nX = noise(noiseParam); //noise for x values
        var nY = noise(noiseParam); //noise for y values
        nX=map(mouseX,0,width,0,30);
        nY=map(mouseY,0,height,0,30);
        vertex(x+random(-nX,nX),y+random(-nY,nY));
    }
    endShape(CLOSE)
    pop();
}
