//No preload is required
nose_x = 0
nose_y = 0
difference = 0
right_wristx = 0
left_wristx = 0

function setup() {
    canvas = createCanvas(450, 350)
    canvas.position(750, 250)

    video = createCapture(VIDEO)
    video.size(450, 350)
    video.position(250, 250)

    posenet = ml5.poseNet(video, modelloaded)
    posenet.on('pose', gotposes)
}


function modelloaded() {
    console.log("model loaded successfully")
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
        nose_x = results[0].pose.nose.x
        nose_y = results[0].pose.nose.y
        left_wristx = results[0].pose.leftWrist.x
        right_wristx = results[0].pose.rightWrist.x
        difference = floor(left_wristx - right_wristx)
    }
}

function draw(){
    background("cadetblue")
    fill("orange")
    stroke("black")
    square(nose_x,nose_y,difference)
    document.getElementById("size").innerHTML="Size of the square is " + difference + "px"
}