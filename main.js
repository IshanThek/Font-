noseX=0;
noseY=0;

rightWristX=0;
leftWristX=0;
difference=0;
function setup(){
    canvas=createCanvas(500, 500);
    canvas.position(560, 150);

    video=createCapture(VIDEO);
    video.size(550, 500);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Model has Loaded");
}

function draw(){
    document.getElementById("font_side").innerHTML="Width and Height of the font will be equal to " + difference + " px";
    background("#123456");
    fill("#13579A");
    stroke("FFFFFF");
    square(noseX, noseY, difference);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX" + rightWristX + "difference" + difference)

    }
}