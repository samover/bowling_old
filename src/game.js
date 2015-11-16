function Game() {
 this.PINS = 10;
 this._rolls = [];
}

Game.prototype.playFrame = function(roll1, roll2) {
  if(this._finished()) { throw new Error('Game Over'); }

  this._rolls.push(roll1 || this._rollBall(this.PINS));

  if(this._isLastFrame() && this.isStrike()) { return 'strike'; }
  else if(this._rolls.length === 21) { return; }
  else { this._rolls.push(roll2 || this._rollBall(this.PINS - this._lastRoll())); }
};


Game.prototype.score = function() {
  var score = this._rolls.reduce(function(a, b) { return a + b; });

};

// PRIVATE FUNCTIONS
Game.prototype._rollBall = function(pinsStanding) {
  return Math.floor(Math.random() * (pinsStanding + 1));
};

Game.prototype._finished = function() {
  return (this._rolls.length === 20 && this.scoreLastFrame() < 10) ||
         (this._rolls.length === 21);
};

Game.prototype._isLastFrame = function() {
  return this._rolls.length > 18;
};

Game.prototype._lastRoll = function() {
  return this._rolls[this._rolls.length - 1];
};

Game.prototype.isStrike = function() {
 return this._lastRoll() === 10; 
}

Game.prototype.isSpare = function(roll1, roll2) {
 return (roll1 + roll2) === 10;
}

Game.prototype.scoreLastFrame = function() {
  return (this._lastRoll() + this._rolls[this._rolls.length -2]);
};
