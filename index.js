// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const canvas =  document.querySelector('#canvas');
canvas.height= 200;
canvas.width = 200;
const ctx = canvas.getContext('2d');
ctx.textBaseline ="middle";

draw();
var fps = 0;
var count =1;
var ps = 0;

function draw() {
  ctx.clearRect(0, 0, 200, 200);
  ctx.beginPath()
  ctx.arc(100, 100, 90, 0, 2 * Math.PI);
  ctx.fillStyle ="lightgrey";
  ctx.fill();
  ctx.closePath();

  ctx.fillStyle ="black";  

  for(var i = 0; i < 12; i++) {     
    ctx.beginPath();
    ctx.translate(100, 100);
    ctx.rotate(i * Math.PI * 2 / 12);  
    ctx.fillRect(-2, -90, 4, 10);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.closePath();
  }

  for(var i = 0; i < 60; i++) {     
    ctx.beginPath();
    ctx.translate(100, 100);
    ctx.rotate(i * Math.PI * 2 / 60);  
    ctx.fillRect(-1, -90, 2, 5);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.closePath();
  }

  drawSecondsTickle();
  drawMinutesTickle();
  drawHoursTickle();

  ctx.beginPath();
  ctx.fillStyle = "blue"
  ctx.textAlign = "center";
  for(var i = 0; i < 12; i++) {
    var x = 95 * Math.sin(2*Math.PI * i / 12);
    var y = 95 * Math.cos(2*Math.PI * i / 12);
    ctx.fillText(i ? i : 12, 100 + x, 100 - y);
  }
  ctx.closePath();

  ctx.stroke();
  ctx.fill();
  requestAnimationFrame(draw)
}

function drawSecondsTickle(){     
    ctx.beginPath();
    ctx.translate(100, 100);
    var time = new Date();
    var s = time.getSeconds();
    var ms = time.getMilliseconds();
    ctx.rotate((s + ms/1000) * Math.PI * 2 / 60);  
    ctx.fillRect(-1, 0, 2, -75);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    if (ps !== s) {
      ps = s;      
      fps = count;
      count = 1;
    } else {
      count++;
    }
    ctx.textAlign = "left";
    ctx.fillText("fps:" + fps, 5 , 10);
    ctx.closePath();
}

function drawMinutesTickle(){     
    ctx.beginPath();
    ctx.translate(100, 100);
    var time = new Date();
    var m = time.getMinutes();
    ctx.rotate(m * Math.PI * 2 / 60);  
    ctx.fillRect(-2, 0, 4, -70);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.closePath();
}

function drawHoursTickle(){     
    ctx.beginPath();
    ctx.translate(100, 100);
    var time = new Date();
    var h = time.getHours();
    ctx.rotate(h * Math.PI * 2 / 12);  
    ctx.fillRect(-4, 0, 8, -50);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.closePath();
}