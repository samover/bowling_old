function Game() {
 this.rolls = [];
  // this.scoreCard = this.createScoreCard();
}

Game.prototype.playFrame = function(roll1, roll2) {
  if(this.finished()) { throw new Error('Game Over'); }
  var rollOne = roll1 || this.rollBall(10);
  var rollTwo = roll2 || this.rollBall(10 - rollOne);
  this.rolls.push(rollOne);
  this.rolls.push(rollTwo);
};

Game.prototype.rollBall = function(pinsStanding) {
  return Math.floor(Math.random() * pinsStanding + 1);
};

Game.prototype.score = function() {
  return this.rolls.reduce(function(a, b) {
    return a + b;
  });
};

Game.prototype.finished = function() {
  return this.rolls.length === 20;
};
