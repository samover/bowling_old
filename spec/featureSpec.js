describe('Bowling Game Features', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('play the game', function() {
    it('allows me to play three frames and return the score', function() {
      game.playFrame(1, 4);
      game.playFrame(4, 5);
      game.playFrame(3, 3);
      expect(game.frames.length).toEqual(3);
      expect(game.playerScore()).toEqual(20);
    });

    it('allows me to play a strike and count the bonus', function() {
      game.playFrame(10);
      game.playFrame(3, 3);
      expect(game.playerScore()).toEqual(22);
    });

    it('allows me to play a spare and count the bonus', function() {
      game.playFrame(3, 3);
      game.playFrame(7, 3);
      game.playFrame(3, 5);
      expect(game.playerScore()).toEqual(27);
    });

    it('allows to play a perfect game', function() {
      game.playFrame(10);
      game.playFrame(10);
      game.playFrame(10);
      game.playFrame(10);
      game.playFrame(10);
      game.playFrame(10);
      game.playFrame(10);
      game.playFrame(10);
      game.playFrame(10);
      game.playFrame(10);
      game.playFrame(10);
      game.playFrame(10);
      expect(game.playerScore()).toEqual(300);
    });
  });
});
