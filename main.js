function setup(){
video=createCapture(VIDEO)
video.size(500,500)
canvas=createCanvas(550,550)
canvas.position(560,150)
posenet=ml5.poseNet(video,modelloaded)
posenet.on("pose",gotposes)
}
function draw(){
background("darkgrey")
}
function modelloaded(){
    console.log("modelisloaded")
}
function gotposes(results){
if (results.length>0) {
    console.log(results)
}
}