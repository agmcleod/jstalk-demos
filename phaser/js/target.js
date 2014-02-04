function Target() {
  var x = ~~(Math.random() * 940);
  var y = ~~(Math.random() * 500);
  this.sprite = game.add.sprite(x, y, 'atlas');
  this.sprite.frameName = 'yellow.png';
  this.direction = Math.random() < 0.5 ? -1 : 1;
  this.velx = ~~(Math.random() * 5) + 3;
}

Target.prototype.update = function() {
  this.sprite.x += this.velx * this.direction;
  if(this.sprite.x + this.sprite.width < 0) {
    this.sprite.x = 800;
  }
  else if(this.sprite.x > 800) {
    this.sprite.x = -this.sprite.width;
  }
}