function Game() {
  this.frames = [];
  this.score = new Score(this.frames);
}

Game.prototype.playFrame = function(roll1, roll2) {
 this.frames.push(new Frame(roll1, roll2)); 
};

Game.prototype.playerScore = function() {
  return this.score.total();
};
