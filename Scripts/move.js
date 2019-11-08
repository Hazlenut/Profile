// used as guide http://jsfiddle.net/wry4d9Lt/1/
// https://stackoverflow.com/questions/10385950/how-to-get-a-div-to-randomly-move-around-a-page-using-jquery-or-css
$(document).ready(function(){
    start();

});
function Box(obj, container, image) {
  this.$object = obj;
  this.$container = container;
  this.image = image;
  this.speed = 100
  this.position = {x: 0, y:0};
  this.running = false;
}

Box.prototype.newPosition = function() {
  var x = Math.random(this.$container.innerWidth);
  var y = Math.random(this.$container.innerHeight);
  return {x: x, y: y};
}

Box.prototype.setImage = function() {
   document.getElementById("a").content.url="../Pictures/" + this.image;
}

Box.prototype.setSpeed = function() {
  this.speed = Math.random(200) + 100;
}

Box.prototype.getDist = function(a,b) {
  var distX = a.x -b.x;
  var distY = a.y-b.y;
  return (Math.sqrt(distX *distX + distY * distY));
}

Box.prototype.move = function() {
  var next = this.newPosition();
  var change = this.getDist(this.position, next);
  var speed = Math.round((change / this.speed) * 100) / 100;
  this.$object.style.transition='transform '+speed+'s linear';
  this.$object.style.transform='translate3d('+next.x+'px, '+next.y+'px, 0)';

  this.position = next;

}

Box.prototype.run = function() {
  this.$object.willChange = 'transform';
  this.$object.pointerEvents = 'auto';
  this.boundEvent = this.move.bind(this)
  this.$object.addEventListener('transitionend', this.boundEvent);
  this.move();
}


var nums= [1,2,3,4,5,6,7];
var images= ["redcircle.png", "orangecircle.png",
"yellowcircle.png", "greencircle.png", "bluecircle.png",
"purplecircle.png", "pinkcircle.png"];

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
function start() {
shuffleArray(images);
for(int i = 0; i < nums.length; i++) {
  for(int j = 0; j < nums[i]; j++) {

      var x = new Box(document.getElementById('a'), window,images[i]);
      x.run();
  }
}
}
window.onload = start;
