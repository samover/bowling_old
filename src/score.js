function Score(frames) {
  this.frames = frames;
  this.bonus = [];
}

Score.prototype.total = function() {
  var score = 0;

  this.frames.forEach(function(frame) {
    score += frame.rolls.reduce(function(a, b) { return a + b; });
    this.setBonus(11);
  });

  return score; 
};

Score.prototype.setBonus = function(frame) {
  this.bonus.push(1);
}

// PRIVATE METHODS

//Score.prototype.getBonus = function(frame) {
  //this.frames.forEach(function(frame) {
    //var index = this.frames.indexOf(frame);
    //if(frame.isStrike()) { 
      //if(index <= this.frames.length) {
        //this.bonus.push(this.frames[index + 1].rolls[0]);
        //this.bonus.push(this.frames[index + 1].rolls[1]);
      //}
    //});
  //});
  //return this.calculateBonus();
  //return frame.sum();
//};

//Score.prototype.calculateBonus = function(frame) {
  //return this.bonus.reduce(function(a, b) { return a + b; });
//}
