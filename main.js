img = "";
status = "";

function preload() {
    img_book = loadImage('book.jpg');
    img_choco = loadImage('choco.jpg');
    img_play = loadImage('playhouse.jpg');
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_book").innerHTML = "detecting objects";
    document.getElementById("status_choco").innerHTML = "detecting objects";
    document.getElementById("status_play").innerHTML = "detecting objects";
}

function modelLoaded() {
    console.log("the model is loaded");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult() {
    if(error){
        console.error(error);
    }
    console.log(results);
}