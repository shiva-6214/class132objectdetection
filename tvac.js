status = "";

function preload() {

}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("statusOfObject").innerHTML = "Status: Object Detecting";
}

function modelLoaded() {
    console.log("Model is Loaded");
    status = true;
}

function gotResults(error, results) {
    if(error) {
        console.error(error);
    }

    else {
        console.log(results);
    }
}
   