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
    } else if (warrior.health() < this.maxHealth && warrior.feel().isEmpty()) {
      warrior.rest();
    } else {
      warrior.attack();
    }
    // if (warrior.health() < this.prevHealth && warrior.feel().isEmpty()) {
    //   warrior.rest();
    // } else if (warrior.health() = this.maxHealth){
    //   this.attack(warrior);
    // }
  }

  playTurn(warrior) {
    this.checkHealth(warrior);

    this.prevHealth = warrior.health();
  }
}
