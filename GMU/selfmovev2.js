// used as guide http://jsfiddle.net/wry4d9Lt/1/
// https://stackoverflow.com/questions/10385950/how-to-get-a-div-to-randomly-move-around-a-page-using-jquery-or-css
function Box(obj, container) {
	this.$object = obj;
  this.$container = container;
  this.container_is_window = container === window;
  this.pixels_per_second = 200;
  this.current_position = { x: Math.random() *this.$container.innerHeight, y: Math.random()*this.$container.innerWidth };

}

Box.prototype.setSpeed = function(pxPerSec) {
	this.pixels_per_second = pxPerSec;
}

Box.prototype._getContainerDimensions = function() {
   if (this.$container === window) {
       return { 'height' : this.$container.innerHeight, 'width' : this.$container.innerWidth };
   } else {
   	   return { 'height' : this.$container.clientHeight, 'width' : this.$container.clientWidth };
   }
}

Box.prototype._generateNewPosition = function() {

  var containerSize = this._getContainerDimensions();
	var availableHeight = containerSize.height - this.$object.clientHeight;
  var availableWidth = containerSize.width - this.$object.clientHeight;
  var y = Math.floor(Math.random() * availableHeight);
  var x = Math.floor(Math.random() * availableWidth);
  return { x: x, y: y };
}

Box.prototype._calcDelta = function(a, b) {
	var dx   = a.x - b.x;
  var dy   = a.y - b.y;
  var dist = Math.sqrt( dx*dx + dy*dy );
  return dist;
}


Box.prototype._moveOnce = function() {
    var next = this._generateNewPosition();
    var delta = this._calcDelta(this.current_position, next);
		var speed = Math.round((delta / this.pixels_per_second) * 100) / 100;
    this.$object.style.transition='transform '+speed+'s ease';
    this.$object.style.transform='translate3d('+next.x+'px, '+next.y+'px, 0)';
    this.current_position = next;
};

Box.prototype.start = function() {
  this.$object.willChange = 'transform';
  this.$object.pointerEvents = 'auto';
  this.boundEvent = this._moveOnce.bind(this)
  this.$object.addEventListener('transitionend', this.boundEvent);
  this._moveOnce();
}

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
var colors = ['green','red','blue','yellow','purple','pink','orange'];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
colors = shuffleArray(colors);
var c = colors.pop();
document.getElementById('button').style.backgroundColor = c;
var z = new Box(document.getElementById('button'),window);
z.start();


for(var i = 0; i < letters.length-1; i++) {
  document.getElementById(letters[i]).style.backgroundColor = choose(colors);
  var x = new Box(document.getElementById(letters[i]), window);
  x.start();
}
