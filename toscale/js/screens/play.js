game.PlayScreen = me.ScreenObject.extend({
  /**
   *  action to perform on state change
   */
  onResetEvent: function() {
    var sprite = new me.SpriteObject(0, 0, me.loader.getImage('image'), 1024, 768);
    sprite.z = 1;
    me.game.world.addChild(sprite);
  },


  /**
   *  action to perform when leaving this screen (state change)
   */
  onDestroyEvent: function() {

  }
});
