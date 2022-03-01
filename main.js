
leftwristX = 0;
rightwristX = 0;
diference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,450);
    canvas = createCanvas(550,450);
    canvas.position(500,200);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        diference =floor(leftwristX - rightwristX);
        console.log("leftwristX is "+leftwristX+"rightwristX is "+rightwristX+"difference is "+diference);
    }
}

function draw(){
    background("lightyellow");
    document.getElementById("font_size").innerHTML = "Size of the font will be "+diference+" px";
    textSize(diference)
    stroke("darkgreen");
    text("you are a dumdum",200,200);
}
