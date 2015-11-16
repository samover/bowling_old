describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('#playFrame', function() {

    it('plays a frame', function() {
      game.playFrame();
      expect(game._rolls.length).toEqual(2);
    });

    it('allows a third roll in frame 10 after spare', function() {
      for(var i = 0; i < 9; i++) {
        game.playFrame(3, 5); 
      } 
      game.playFrame(6, 4);
      game.playFrame(6);
      expect(game._rolls.length).toEqual(21);
    });

    it('allows two more rolls after strike in frame 10', function() {
      for(var i = 0; i < 9; i++) {
        game.playFrame(3, 5); 
      } 
      game.playFrame(10);
      game.playFrame();
      expect(game._rolls.length).toEqual(21);
    });
  });

  describe('#score', function() {

    it('keeps the score', function() {
      game.playFrame(3, 6); 
      expect(game.score()).toEqual(9);
    });

    it('scores bonus on strike', function() {
      game.playFrame(10);
      game.playFrame(6, 3);
      expect(game.score()).toEqual(38);
    });
  })
});

// As a player
// So that I can play a game of 
// So that I can start a game of bowling
// I want to start by playing the first frame
//   it('starts with the first frame', function(){
//     expect(bowlingGame.showFrameNumber()).toEqual(1);
//   });
//
//   // As a player
//   // So that I can start a game of bowling
//   // I want to start the game with a score of 0
//   it('starts with a score of 0', function(){
//     expect(bowlingGame.showScore()).toEqual(0);
//   });
//
//   // As a player
//   // So that I can start a game of bowling
//   // I want my first frame to have 10 pins standing
//   it('current frame has 10 pins standing', function() {
//     expect(bowlingGame.pinsStanding(1)).toEqual(10);
//   });
// });
//
// describe('Playing the Game', function() {
//
//   // As a player
//   // So that I can play a game of bowling
//   // I want to roll a ball and hit random number of pins
//   it('rolls a ball and hits a random number of pins', function() {
//     var possibleKnockDowns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     expect(possibleKnockDowns).toContain(bowlingGame.rollBall());
//   });
//
//   // As a player
//   // So that I can play a game of bowling
//   // I want the game to register the knocked down pins on my scoring card.
//   it('registers the knocked down pins of my first roll', function() {
//     var knockedDownPins = bowlingGame.rollBall();
//     expect(bowlingGame.showRollOne(1)).toEqual(knockedDownPins);
//   });
//
//   // As a player
//   // So that I can play a game of bowling
//   // I want my second roll to not include the pins I already rolled down
//   it('updates the pins left standing after a roll', function() {
//     bowlingGame.rollBall();
//     bowlingGame.rollBall();
//     var knockedDownPins = bowlingGame.showRollOne(1) + bowlingGame.showRollTwo(1);
//     expect(bowlingGame.pinsStanding(1)).toEqual(10 - knockedDownPins);
//   });
//
//   // As a player
//   // So that I can play a game of bowling
//   // I wanth the game to register my second roll
//   it('registers the knocked down pins of my second roll', function() {
//     bowlingGame.rollBall();
//     var knockedDownPins = bowlingGame.rollBall();
//     expect(bowlingGame.showRollTwo(1)).toEqual(knockedDownPins);
//   });
//
//   // As a player
//   // So that I can play a game of bowling
//   // I want to see my score after playing the first frame without bonus points
//   it('keeps the score of my first frame', function() {
//     bowlingGame._registerRoll(3);
//     bowlingGame._registerRoll(6);
//     expect(bowlingGame.scoreOfFrame(1)).toEqual(9);
//   });
//
//   // As a player
//   // So that I can play a game of bowling
//   // I want to keep track of Frame and roll
//   it('tells me my upcoming roll and frame', function() {
//     bowlingGame._registerRoll(10);
//     bowlingGame._registerRoll(5);
//     expect(bowlingGame.gameStatus()).toEqual('Frame 2, Roll 2');
//   });
//
//   // As a player
//   // So that I can play a game of bowling
//   // I want to get bonus points for a spare
//   it('adds bonus points for a spare', function() {
//     bowlingGame._registerRoll(4);
//     bowlingGame._registerRoll(6);
//     bowlingGame._registerRoll(5);
//     expect(bowlingGame.scoreOfFrame(1)).toEqual(15);
//   });
//
//   // As a player
//   // So that I can play a game of bowling
//   // I want to get bonus points for a strike
//   it('add bonus points for a strike', function() {
//     bowlingGame._registerRoll(10);
//     bowlingGame._registerRoll(4);
//     bowlingGame._registerRoll(3);
//     expect(bowlingGame.scoreOfFrame(1)).toEqual(17)
//   });
// });
//
// describe('Playing the last frame', function() {
//
//   // As a player
//   // So that I know the game is finished
//   // I would like to receive a message telling me 'game over'
//   it('tells the player the game is over when no bonus in last frame', function() {
//     for(i=0; i < 10; i++) {
//       bowlingGame._registerRoll(2);
//       bowlingGame._registerRoll(3);
//     }
//     expect(bowlingGame.gameStatus()).toEqual('Game Over');
//   });
//
//   // As a player
//   // So that I can finish the last frame like a pro
//   // I want to have ten pins standing when my first roll is a strike
//   it('resets the pins after a strike in first roll frame 10', function() {
//     for(i=1; i < 10; i++) {
//       bowlingGame._registerRoll(2);
//       bowlingGame._registerRoll(3);
//     }
//     bowlingGame._registerRoll(10);
//     expect(bowlingGame.pinsStanding(10)).toEqual(10);
//   });
//
//
//   // As a player
//   // So that I can finish the last frame like a pro
//   // I want to have a third roll when playing spare
//   it('resets the pins after a spare in frame 10', function() {
//     for(i=1; i < 10; i++) {
//       bowlingGame._registerRoll(2);
//       bowlingGame._registerRoll(3);
//     }
//     bowlingGame._registerRoll(6);
//     bowlingGame._registerRoll(4);
//     expect(bowlingGame.pinsStanding(10)).toEqual(10);
//   });
//
//   it('has an extra roll if all pins are down at roll 2', function() {
//     for(i=0; i < 9; i++) {
//       bowlingGame._registerRoll(2);
//       bowlingGame._registerRoll(3);
//     }
//
//     bowlingGame._registerRoll(6);
//     bowlingGame._registerRoll(4);
//     bowlingGame._registerRoll(4);
//     expect(bowlingGame.scoreCard[11].rollThree).toEqual(4);
//   });
