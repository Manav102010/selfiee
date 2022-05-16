var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML ="";
    Recognition.start();
}
Recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if(content == "take my selfie") {
        console.log("taking selfie");
        speak();
    }
}

function speak() {
  var synth = window.speechSynthesis; 
 // speak_data = "Taking you Selfie in 5 seconds";
   speak_data = document.getElementById("textbox").value;
     var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        take_snapshot();
        save();
    },5000);
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90

});

function take_snapshot() 
{
    console.log(im_id);
    webcam.snap(function(data_uri)
    {
       if(img_id=="selfie1")
        document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';

        if(img_id=="selfie2")
        document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';

        if(img_id=="selfie3")
        document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").scr;
    link.href = image;
    link.click();
}