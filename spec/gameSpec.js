describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
    game.playFrame(3, 5);
  });

  describe('#playFrame', function() {
    
    it('plays a frame', function() {
      expect(game.frames.length).toEqual(1);
    });
  });

  describe('#score', function() {

    it('returns the score of the frames player', function() {
      expect(game.playerScore()).toEqual(8);
    });
  });
});
