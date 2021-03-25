function box(obj, container) {
  this $ojbect = obj;
  this.$container = container;
}
box.prototype.onHover = function() {
  var newPos = {x: this.$object.x - (this.$container.innerWidth - this.$object.clientWidth) / 5, y: this.$object.y};
  var dist = (this.$container.innerWidth - this.$object.clientWidth) / 5;
  var speed = 50;
  this.$object.style.transition='transform '+speed+'s linear';
  this.$object.style.transform='translate3d('+newPos.x+'px, '+newPos.y+'px, 0)';
}
box.prototype.notHover = function() {
  
}
