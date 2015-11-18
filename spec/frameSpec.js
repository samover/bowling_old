describe('Frame', function() {
  var frame;

  beforeEach(function() {
    normalFrame = new Frame(3, 5);
    strikeFrame = new Frame(10);
    spareFrame = new Frame(5, 5);
    incompleteFrame = new Frame(4);
  });

  describe('#rolls', function() {
    it('can accept rolls', function() {
      expect(normalFrame.rolls).toEqual([3, 5]);
    });

    it('can accept a strike', function() {
      frame = new Frame(10);
      expect(strikeFrame.rolls).toEqual([10]);
    });
  });

  describe('#isOver', function() {
    it('knows when it is over', function() {
      expect(normalFrame.isOver()).toBe(true);
    });

    it('knows when it is over in case of a strike', function() {
      expect(strikeFrame.isOver()).toBe(true);
    });

    it('knows when a game is not over', function() {
      expect(incompleteFrame.isOver()).toBe(false);
    });
  });

  describe('#isStrike', function() {
    it('knows when it is a strike', function() {
      expect(strikeFrame.isStrike()).toBe(true);
    });

    it('knows when is is not a strike', function() {
      expect(spareFrame.isStrike()).toBe(false);
    });
  });

  describe('#isSpare', function() {
    it('knows when it is a spare', function() {
      expect(spareFrame.isSpare()).toBe(true);
    });

    it('knows a strike is not a spare', function() {
      expect(strikeFrame.isSpare()).toBe(false);
    });

    it('knows an imperfect frame not to be a spare', function() {
      expect(normalFrame.isSpare()).toBe(false);
    });
  });
});
