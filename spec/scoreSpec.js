describe('Score', function() {
  var score;
  var rolls;
  var game;

  beforeEach(function() {
    frames = [ { rolls: [2, 4] }, { rolls: [5, 3] } ];
    framesWithStrike = [ { rolls: [10] }, { rolls: [5, 3] } ];
    score = new Score(frames);
    scoreWithStrike = new Score(framesWithStrike);
  });

  describe('#total', function() {
    it('returns the score of the played frames', function() {
      expect(score.total()).toEqual(14);     
    });

    it('counts a bonus for a strike', function() {
      expect(scoreWithStrike.total()).toEqual(26); 
    });
  });

});
