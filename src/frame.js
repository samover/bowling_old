function Frame(options) {
  this.frameIndex = options.frameIndex;
  this.rollIndex = options.rollIndex;
  this.pins = 0;
  this.turns = 0;
}

Frame.prototype.isOver = function() {
  if(this.isLastFrame()) {
    return this.isLastFrameOver();
  } else {
    return (this.turns === 2 || this.isStrike());
  }
};

Frame.prototype.isLastFrameOver = function() {
  return (this.turns === 2 && !this.isSpare()) && this.pins !== 20 ||
          this.turns === 3;
}

Frame.prototype.addRoll = function(roll) {
  this.pins += roll;
  this.turns ++;
}

Frame.prototype.bonus = function() {
  if(this.isStrike()) { return [ this.rollIndex + 1, this.rollIndex + 2]; }
  if(this.isSpare()) { return [this.rollIndex + 2] }
}

Frame.prototype.isStrike = function() {
  return (this.turns === 1 && this.pins === 10);
}

Frame.prototype.isSpare = function() {
  return (this.turns === 2 && this.pins === 10);
}

Frame.prototype.isLastFrame = function () {
  return this.frameIndex === 9;
}
