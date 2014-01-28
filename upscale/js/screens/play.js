game.PlayScreen = me.ScreenObject.extend({
  /**
   *  action to perform on state change
   */
  onResetEvent: function() {
    var sprite = new me.SpriteObject(0, 0, me.loader.getImage('image'), 1024, 768);
    sprite.z = 1;
    sprite.anchorPoint.x = 0;
    sprite.anchorPoint.y = 0;
    sprite.scaleFlag = true;
    sprite.scale.x = 4;
    sprite.scale.y = 4;
    me.game.world.addChild(sprite);
  },


  /**
   *  action to perform when leaving this screen (state change)
   */
  onDestroyEvent: function() {

  }
});
