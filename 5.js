class Player {

  constructor() {
    this.direction = 'forward';
    this.maxHealth = 20;
  }

  walk(warrior) {
    warrior.walk();
  }

  navigate(warrior) {
    if (warrior.feel().isEmpty()) {
      this.walk(warrior);
    } else if (warrior.feel().isCaptive()) {
      warrior.rescue();
    } else {
      warrior.attack();
    }
  }

  checkHealth(warrior) {
    if (warrior.health() === this.maxHealth) {
      this.navigate(warrior);
    } else if (warrior.health() < this.prevHealth) {
      this.navigate(warrior);
    } else if (warrior.health() === this.prevHealth) {
      warrior.rest();
    }
  }

  playTurn(warrior) {
    this.checkHealth(warrior);
    this.prevHealth = warrior.health();
  }
}
