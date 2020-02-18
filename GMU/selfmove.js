function Box(obj,container) {
  this.$object = obj;
  this.$container = container;
  this.container_is_window = container === window;
  this.speed = 200;
  this.initial = {x: 0, y: 0};
}

Box.prototype.setSpeed = function(x) {
  this.speed = x;
}

Box.prototype.nextPosition = function() {
  return {x: Math.floor(Math.random() *this.$container.innerWidth), Math.floor(y: Math.random() * this.$container.innerHeight)};
}

Box.prototype.distance = function(a,b) {
  var xD = a.x - b.x;
  var yD = a.y - b.y;
  return Math.sqrt(xD*xD + yD*yD);
}

Box.prototype.move = function() {
  var next = nextPosition();
  var dist = distance(this.initial,next);
  var sped = Math.round((delta / this.speed) * 100) / 100;
  this.$object.style.transition='transform '+sped+'s linear';
  this.$object.style.transform='translate3d('+next.x+'px, '+next.y+'px, 0)';
  this.initial = next;
}
Box.prototype.start = function() {
  this.$object.willChange = 'transform';
  this.$object.pointerEvents = 'auto';
  this.boundEvent = this.move.bind(this)
  this.$object.addEventListener('transitionend', this.boundEvent);
  this.move();
}

var x = new Box(document.getElementById('a'),window);
x.start();
