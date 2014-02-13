var game, targetObjects = new Array(100), stats;

function init() {
  var renderer;
  stats = new Stats();
  var container = document.getElementById('stats');
  container.appendChild( stats.domElement );
  if(window.location.hash == '#canvas') {
    renderer = Phaser.CANVAS;
  }
  else {
    renderer = Phaser.WEBGL;
  }
  game = new Phaser.Game( window.innerWidth, window.innerWidth, renderer, 'game', {
    preload : preload,
    create : create,
    update : update
  });
}

function create() {
  for(var i = 0; i < targetObjects.length; i++) {
    targetObjects[i] = new Target();
  }
}

function preload() {
  game.load.atlas('atlas', 'img/images.png', 'img/images.json');
}

function update() {
  stats.update();
  for(var i = 0; i < targetObjects.length; i++) {
    targetObjects[i].update();
  }
}