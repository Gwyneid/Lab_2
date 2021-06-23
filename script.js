var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = 1000;
var screenlength = window.innerWidth;
var indent = (screenlength-1000)/2;
var piece = canvas.height/8;
var x = canvas.width/2 - 75;
var y = canvas.height-140;
var dx = 30;
var dy = 3;
var clickX =0;
var clickY = 0;
var control =0;
var mousedown=false;
var up = false;
var down = false;
var left = false;
var right = false;
var fire = false;
var k = 0;
var start = 0;
var lose = 0;
var clean = 0;
var bossfightStart = 50;
var s = 0;
var border = 1;
var border2 = 0;
var s1 = 50;
var s2 = 800;
var s3 = 1;
var s4 = 1; 
var s5 = 0;
var s6 = 0;
var s7 = 0;
var shield = false;
var score = 0;
var scoreNow=0;
var bestScore = 0;
var version = 0;
var bossfight = 0;
var bulletWidth = 16;
var bulletHeight = 50;
var live =1;
var openMenu = true;
var back = new Image();
back.src = 'images/menu.jpg';
var space = new Image();
space.src = 'images/space.png';
var meteorite = new Image();
meteorite.src = 'images/meteorite.png';
var spaceship = new Image();
spaceship.src = 'images/spaceship.png';
var laser = new Image();
laser.src = 'images/laser.png';
var laser2 = new Image();
laser2.src = 'images/laser2.png';
var UFO = new Image();
UFO.src = 'images/UFO.png';
var Shield = new Image();
Shield .src = 'images/shield.png';
var boss = new Image();
boss.src = 'images/boss.png';
if(screenlength < 1000)
	indent = 0;	


document.addEventListener("mousedown", mouseDown, false);
document.addEventListener("mouseup", mouseUp, false);
document.addEventListener("keydown",keyDownStart, false);
document.addEventListener("keydown",move, false);
document.addEventListener("keyup",stopMove, false);
document.addEventListener("mousemove", mouseMove, false);
document.addEventListener("touchstart", touchTrue, false);
document.addEventListener("touchmove", touchMove, false);
document.addEventListener("touchcancel", touchFalse, false);
  
function mouseDown(e){
	if(control!=2){
      mousedown = true;
	  control = 1;
	  if(screenlength < 1000)
	  indent = 0;
      fire = true;
	}
}

function mouseUp(e){
    mousedown = false;
}

function mouseMove(e){
    clickX = e.clientX;
    clickY = e.clientY;
}

function keyDownStart(e){
	if(e.keyCode == 32 && control!=1){
		control = 2;
        mousedown = true;
    }
}

function touchTrue(e){
    mousedown = true;
}
function touchFalse(e){
    mousedown = false;
}
function touchMove(e){
    clickX = e.targetTouches[0].pageX;
    clickY = e.targetTouches[0].pageY;
}

function move(e){
    if(e.keyCode == 38){
        up = true;
    }
    if(e.keyCode == 40){
        down = true;
    }
    if(e.keyCode == 37){
        left = true;
    }
    if(e.keyCode == 39){
        right = true;
    }
    if(e.keyCode == 32){
        fire = true;
    }
}

function stopMove(e){
    if(e.keyCode == 38){
        up = false;
    }
    if(e.keyCode == 40){
        down = false;
    }
    if(e.keyCode == 37){
        left = false;
    }
    if(e.keyCode == 39){
        right = false;
    }
    if(e.keyCode == 32){
        fire = false;
    }
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
