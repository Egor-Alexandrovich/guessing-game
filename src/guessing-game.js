class GuessingGame {
    constructor() {
      this.numbr = 0;
    }
  
    setRange(min, max) {
      this.min = min;
      this.max = max;
    }
  
    guess() {
      this.numbr = Math.round((this.min+this.max)/2);
        return this.numbr
    }
  
    lower() {
      this.max = this.numbr;
      return this.max 
    }
  
    greater() {
      this.min = this.numbr;
      return this.min
    }
  }

module.exports = GuessingGame;
