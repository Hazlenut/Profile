// used as guide http://jsfiddle.net/wry4d9Lt/1/
// https://stackoverflow.com/questions/10385950/how-to-get-a-div-to-randomly-move-around-a-page-using-jquery-or-css
function Shiba(obj, container, letter) {
	this.$object = obj;
  this.$container = container;
  this.speed= 250;
	// right - 1 up - 2 left - 3 down - 4
	this.direction = 1;
	this.letter = letter;
  this.startingPos = { x: Math.random() *this.$container.innerHeight, y: Math.random()*this.$container.innerWidth };

}

function flipImage(obj) {
	if (obj.direction == 1) {
		document.getElementById(obj.letter).style["-webkit-transform"] = "scaleX(1)";
	} else if(obj.direction == 3) {
		document.getElementById(obj.letter).style["-webkit-transform"] = "scaleX(-1)";
	}
}

Shiba.prototype.imageDirection = function(a,b) {
	if(a.x <= b.x) {
		this.direction = 1;
	}else{
		this.direction = 3;
	}
};

Shiba.prototype.makePosition = function() {

	var screenHeight = this.$container.innerHeight - this.$object.clientHeight;
  var screenWidth = this.$container.innerWidth - this.$object.clientHeight;
  var y = Math.floor(Math.random() * screenHeight);
  var x = Math.floor(Math.random() * screenWidth);
  return { x: x, y: y };
};

Shiba.prototype.distance = function(a, b) {
	var x  = a.x - b.x;
  var y   = a.y - b.y;
  var dist = Math.sqrt(x*x + y*y);
  return dist;
};

Shiba.prototype.move = function() {
    var nextPos = this.makePosition();
    var dist = this.distance(this.startingPos, nextPos);
		var speed = Math.round((dist/this.speed)*100)/((Math.random() * 25) + 75);
		this.imageDirection(this.startingPos, nextPos);
		flipImage(this);
    this.$object.style.transition='transform '+speed+'s linear';
		//cubic-bezier(.17,.67,.83,.67)
    this.$object.style.transform='translate3d('+nextPos.x+'px, '+nextPos.y+'px, 0)';
    this.startingPos = nextPos;
		console.log(this.letter + " " + document.getElementById(this.letter).style.webkitTransform);
};

Shiba.prototype.start = function() {
  this.$object.willChange = 'transform';
  this.$object.pointerEvents = 'auto';
  this.boundEvent = this.move.bind(this);
  this.$object.addEventListener('transitionend', this.boundEvent);
  this.move();
};

function shuffleArray(array) {
  var currentI = array.length;
  var tempV, randI;
  while (0!= currentI) {
    randI = Math.floor(Math.random() * currentI);
    currentI-=1;
    tempV = array[currentI];
    array[currentI] = array[randI];
    array[randI] = tempV;
  }
  return array;
}

function choose(choices) {
  var i = Math.floor(Math.random() * choices.length);
  return choices[i];
}

function setImage(id,color) {
	//console.log(id + " setting image: " + color);
	if(color === 'red') {
		document.getElementById(id).style.backgroundImage = "url(https://i.imgur.com/XFxT6ZG.png)";
		//console.log("red image");
	}else if(color === 'blue') {
		document.getElementById(id).style.backgroundImage = "url(https://i.imgur.com/denVKF6.png)";
		//console.log("blue image");
	}else if(color === 'green') {
		document.getElementById(id).style.backgroundImage = "url(https://i.imgur.com/7kXSa7L.png)";
		//console.log("green");
	}else if(color === 'pink') {
		document.getElementById(id).style.backgroundImage = "url(https://i.imgur.com/dapeuGz.png)";
	}else if(color === 'brown') {
		document.getElementById(id).style.backgroundImage = "url(https://i.imgur.com/5KxHPXg.png)";
	}else if(color === 'yellow'){
		document.getElementById(id).style.backgroundImage = "url(https://i.imgur.com/B6F3RGt.png)";
	}
}


var colors = ['green','red','blue','pink', 'brown', 'yellow'];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
colors = shuffleArray(colors);
var c = colors.pop();
document.getElementById('button').style.color = c;
setImage('button',c);
var z = new Shiba(document.getElementById('button'),window, 'button');
z.start();


for(var i = 0; i < letters.length-1; i++) {
	setImage(letters[i],choose(colors));
  var x = new Shiba(document.getElementById(letters[i]), window, letters[i]);
  x.start();
}
