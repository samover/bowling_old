describe('Features of Bowling Game', function(){
  var game;
  var playFrame;

  beforeEach(function(){
    game = new Game();
    playFrame = function() { game.playFrame(); };
  });

  // As a player
  // So that I can play a game of bowling  
  // I want to play a frame 
  it('allows player to play a frame', function() {
    for(var i = 0; i < 10; i++) {
      game.playFrame(3, 5); 
    } 
    expect(game.rolls.length).toEqual(20);
    expect(game.score()).toEqual(80);
    expect(playFrame).toThrowError('Game Over');
  });
});
