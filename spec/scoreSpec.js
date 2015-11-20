describe('Score', function() {
  var score;
  var rolls;
  var game;
  var frame;

  beforeEach(function() {
    frames = [ { rolls: [2, 4] }, { rolls: [5, 3] } ];
    score = new Score(frames);

    framesWithStrike = [ { rolls: [10] }, { rolls: [5, 3] } ];
    scoreWithStrike = new Score(framesWithStrike);

    framesWithSpare = [ { rolls: [7, 3] }, { rolls: [5, 3] } ];
    scoreWithSpare = new Score(framesWithSpare);
    frame = { isSpare: function() {} };
    spyOn(frame, 'isSpare');
  });

  describe('#total', function() {
    it('returns the score of the played frames', function() {
      expect(score.total()).toEqual(14);
    });

    it('counts a bonus for a strike', function() {
      expect(scoreWithStrike.total()).toEqual(26);
    });

    it('counts a bonus for a spare', function() {
      // expect(scoreWithSpare.total()).toEqual(23);
      scoreWithSpare.total();
      expect(frame.isSpare()).toHaveBeenCalled();
    });
  });
});
