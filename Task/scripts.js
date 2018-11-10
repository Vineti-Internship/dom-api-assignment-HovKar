const btn = document.createElement("button");
const txt = document.createTextNode("START");
btn.appendChild(txt);
document.body.appendChild(btn);

const btn_2 = document.createElement("button");
const txt_2 = document.createTextNode("STOP");
btn_2.appendChild(txt_2);
document.body.appendChild(btn_2);

const bigCircle = document.createElement("div")
bigCircle.setAttribute("id", "bigCircle");

const circle = document.createElement("div")
circle.setAttribute("id", "circle");
document.body.appendChild(bigCircle);
bigCircle.appendChild(circle);

let x =150;
let y= 150;
let r = 200
let angle = 0

function rotate(angle) {

  let px = x + r * Math.cos(angle);
  let py = y + r * Math.sin(angle);

  document.querySelector('#circle').style.left = px + "px";
  document.querySelector('#circle').style.top = py + "px";
}

let myFunction= function myRotateFunction() {
  angle = (angle + Math.PI / 360) % (Math.PI * 2);
  rotate(angle);
 }
let interval = 0
let myStartFunction= function startRotating(){
 clearInterval(interval);
 interval = setInterval(myFunction,1);
 }

btn.addEventListener('click',myStartFunction);

let myStopFunction = function(){
  clearInterval(interval);
}
btn_2.addEventListener('click', myStopFunction);
