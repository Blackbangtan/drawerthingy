function setup(){
canvas = createCanvas(300,300);
canvas.center();
background("white");
canvas.mouseReleased(classifycanvas);
synth=window.speechSynthesis;
}
function preload(){
classfier = ml5.imageClassifier("DoodleNet");
}
function clearCanvas(){
background("white");
}
function draw(){
strokeWeight(18);
stroke("purple");
if (mouseIsPressed){
line(pmouseX, pmouseY,mouseX,mouseY);
}
}
function classifycanvas(){
classfier.classify(canvas,gotResult);
}
function gotResult(error,result){
if (error){
console.error(error);
}
console.log(result);
document.getElementById("label").innerHTML="label:"+result[0].label;
document.getElementById("confidence").innerHTML="confidence:"+Math.round(result[0].confidence*100)+"%";
utterthis = new SpeechSynthesisUtterance(result[0].label);
synth.speak(utterthis);
}
