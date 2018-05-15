class Player {

  constructor() {
    this.direction = 'forward';
    this.maxHealth = 20;
    this.prevHealth;
    this.rescued = false;
    this.isTakingDamage = false;
  }

  // am i taking damage? if no proceed
  // is there a captive near me? if yes, rescue
  // is there an enemy

  decideAction(warrior) {

    if (this.rescued) {
      warrior.walk();
    } else {
      this.rescue(warrior);
    }

  }

  rescue(warrior) {
    if (warrior.feel('backward').isCaptive()) {
      warrior.rescue('backward');
      this.rescued = true;
    } else if (warrior.feel('backward').isEmpty()) {
      warrior.walk('backward');
    }
  }

  // move(warrior) {
  //   warrior.walk(this.direction);
  // }


  playTurn(warrior) {
    // the base action goes here
    this.decideAction(warrior);
    
    this.prevHealth = warrior.health();
  }
}
