function Score(frames) {
  this.frames = frames;
  this.bonus = [];
}

Score.prototype.total = function() {
  var rolls = this._getRolls();
  var score = rolls.reduce(function(a, b) { return a + b; });
  var bonus = this.getBonus();

  return score + bonus;
};

Score.prototype.getBonus = function() {
  var bonus = this.bonus;
  var frames = this.frames;
  var rolls = this._getRolls();
 
  rolls.forEach(function(roll, index) {
    if(roll === 10) {
      bonus.push(rolls[index+1]);
      bonus.push(rolls[index+2]);
    }
  });

  this.frames.forEach(function(frame, index) {
    if(frame.rolls[0] + frame.rolls[1] === 10  && 
       frames[index + 1] !== undefined) {
         bonus.push(frames[index + 1].rolls[0]);
       }
  });

  return this.calculateBonus();
}

// PRIVATE METHODS

Score.prototype.calculateBonus = function() {
  if(this.bonus.length > 0 ) {
    return this.bonus.reduce(function(a, b) { return a + b; });
  } else {
    return 0; 
  }
}

Score.prototype._getRolls = function() {
  var rolls = [];

  this.frames.forEach(function(frame) {
    rolls.push(frame.rolls[0]);
    if(frame.rolls.length > 1) {
      rolls.push(frame.rolls[1]);  
    }
  });

  return rolls;
}
