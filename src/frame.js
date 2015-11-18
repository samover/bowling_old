function Frame(roll1, roll2) {
  this.rolls = [roll1];
  if(roll2 !== undefined) { this.rolls.push(roll2); }
}

Frame.prototype.isOver = function() {
  return (this.rolls.length === 2 || this.isStrike());
};

Frame.prototype.isStrike = function() {
  return (this.rolls.length === 1 && this.rolls[0] === 10);
};

Frame.prototype.isSpare = function() {
  return (this.rolls.length === 2 && this.sum() === 10);
};

Frame.prototype.sum = function() {
  return this.rolls.reduce(function(a, b) { return a + b; });
};
