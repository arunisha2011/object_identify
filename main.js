Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera")
Webcam.attach('#camera')
console.log(camera)
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML="<img id='captured_image' src='"+data_uri+"'/>"
    })
}
console.log(ml5.version)
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/efun6-pMg/model.json",modelloaded)
function modelloaded(){
    console.log("model has loaded")
}