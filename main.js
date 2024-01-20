moustacheX = 0;
moustacheY = 0;

function preload()
{
    moustache = loadImage('https://i.postimg.cc/4yVBqnYg/moustache-removebg-preview.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(moustache, moustacheX-12, moustacheY, 30, 30);
}

function take_snapshot(){
    save("my_picture.png");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        moustacheX = results[0].pose.nose.x;
        moustacheY = results[0].pose.nose.y;
        console.log("moustache x = " + results[0].pose.nose.x);
        console.log("moustache y = " + results[0].pose.nose.y);
    }
}