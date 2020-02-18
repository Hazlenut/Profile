function Shiba(obj, container) {
  this.$object = obj;
  this.$container = container;
  this.container_is_window = container === window;
  this.speed = 200;
  this.startingPos = {x: 0, y: 0};
}

Shiba.prototype.setSpeed = function(x) {
  this.speed = x;
};

Shiba.prototype._getContainerDimensions = function() {
   if (this.$container === window) {
       return { 'height' : this.$container.innerHeight, 'width' : this.$container.innerWidth };
   } else {
   	   return { 'height' : this.$container.clientHeight, 'width' : this.$container.clientWidth };
   }
};

Shiba.prototype._makePosition = function() {
  var containerSize = this._getContainerDimensions();
  var x = containerSize.width- this.$object.innerWidth;
  var y = containerSize.height- this.$object.innerHeight;
  var posX = Math.floor(Math.random() * x);
  var posY = Math.floor(Math.random() * y);
  return {x: posX, y: posY};
};

Shiba.prototype._distance = function(a, b) {
  var x = a.x - b.x;
  var y = a.y - b.y;
  var dist = Math.sqrt(x*x + y*y);
  return dist;
};

Shiba.prototype._move = function() {
  var nextPos = this._makePosition();
  var dist = this._distance(this.startingPos, nextPos);
  var sped = Math.round((dist/this.speed)*100)/100;
  this.$object.style.transition='transform '+sped+'s cubic-bezier(.17,.67,.83,.67)';
  this.$object.style.transform='translate3d('+nextPos.x+'px, '+nextPos.y+'px, 0)';
  this.startingPos = nextPos;
};

Shiba.prototype.start = function() {
  this.$object.willChange = 'transform';
  this.$object.pointerEvents = 'auto';
  this.boundEvent = this._move.bind(this);
  this.$object.addEventListener('transitionend', this.boundEvent);
  this._move();
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
var colors = ['green','red','blue','yellow','purple','pink','orange'];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
colors = shuffleArray(colors);
var c = colors.pop();
document.getElementById('button').style.backgroundColor = c;
var z = new Shiba(document.getElementById('button'),window);
z.start();


for(var i = 0; i < letters.length-1; i++) {
  document.getElementById(letters[i]).style.backgroundColor = choose(colors);
  var x = new Shiba(document.getElementById(letters[i]), window);
  x.start();
}
