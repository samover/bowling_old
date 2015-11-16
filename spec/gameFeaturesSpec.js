describe('Features of Bowling Game', function(){
  var game;
  var playFrame;

  beforeEach(function(){
    game = new Game();
    playFrame = function() { game.playFrame(); };
  });
  
  var playMultipleFrames = function(roll1, roll2, framesToPlay) {
    for(var i = 0; i < framesToPlay; i++) {
      game.playFrame(roll1, roll2); 
    }
  };

  // As a player
  // So that I can play a game of bowling  
  // I want to play a frame 
  it('allows player to play a frame', function() {
    playMultipleFrames(3, 5, 10);

    expect(game._rolls.length).toEqual(20);
    expect(game.score()).toEqual(80);
    expect(playFrame).toThrowError('Game Over');
  });

  // As a player
  // So that I can play a game of bowling
  // I would like to be able to have a third roll after a spare
  it('allows a player to have a third roll after spare in frame 10', function() {
    playMultipleFrames(3, 5, 9);
    game.playFrame(6, 4);
    game.playFrame(6);

    expect(game._rolls.length).toEqual(21);
    expect(game.score()).toEqual(88);
    expect(playFrame).toThrowError('Game Over');
  });

  // As a player
  // So that I can play a game of bowling
  // I would like to be two more rolls after strike in first roll frame 1 
  it('allow a player to have two extra rolls after a strike in frame 10', function() {
    playMultipleFrames(3, 5, 9);
    game.playFrame(10);
    game.playFrame(6, 4);

    expect(game._rolls.length).toEqual(21);
    expect(game.score()).toEqual(92);
    expect(playFrame).toThrowError('Game Over');
  });

  // As a player
  // So that I can play a game of bowling
  // I would like the game to score a strike
  it('allows a player to play strikes and score them', function() {
    game.playFrame(10);
    game.playFrame(6, 3);
    expect(game.score()).toEqual(38);
  });
});
