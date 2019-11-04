function Box(obj, container, image) {
  this.$object = obj;
  this.$container = container;
  this.image = image;
  this.speed = 100
  this.position = {x: 0, y:0};
}

Box.prototype.setPosition = function() {
  var x = Math.random(this.$container.innerWidth);
  var y = Math.random(this.$container.innerHeight);
  return {x: x, y: y};
}

Box.prototype.setImage = function(s) {
  var element = document.createElement('../stylesheet.css');
  element.style.content = s;
}

Box.prototype.setSpeed = function() {
  this.speed = Math.random(200) + 100;
}


var = [1,2,3,4,5,6,7];
var = ["redcircle.png", "orangecircle.png",
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
