class Player {

  constructor() {
    this.direction = 'forward';
    this.prevHealth;
    this.maxHealth = 20;
  }

  walk(warrior) {
    warrior.walk();
  }

  attack(warrior) {
    if (warrior.feel().isEmpty()) {
      this.walk(warrior);
    } else {
      warrior.attack();
    }
  }

  checkHealth(warrior) {
    if (warrior.health() === this.maxHealth) {
      this.attack(warrior);
    } else if (warrior.health() < this.prevHealth) {
      this.attack(warrior);
    } else if (warrior.health() === this.prevHealth) {
      warrior.rest();
    }
  }

  playTurn(warrior) {
    this.checkHealth(warrior);

    this.prevHealth = warrior.health();
  }
}
//a lot of turns at the end, every other turn, i did nothing. why?
// in between rest periods.
