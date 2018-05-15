class Player {

  constructor() {
    this.direction = 'forward';
    this.maxHealth = 20;
    this.prevHealth;
    this.rescued = false;
    this.isTakingDamage = false;
    this.archerDangerHealthThreshold = 6;
  }
  // this works
  // decideAction(warrior) {
  //
  //   if (this.rescued && !warrior.feel().isEmpty()) {
  //     warrior.attack();
  //   } else if (this.rescued && warrior.feel().isEmpty()) {
  //     warrior.walk();
  //   } else {
  //     this.rescue(warrior);
  //   }
  // }

  decideAction(warrior) {
    if (this.rescued) {
      this.safeToAttack(warrior);
    } else {
      this.rescue(warrior);
    }
  }

  // explore(warrior) {
  //   if (!warrior.feel().isEmpty()) {
  //     // warrior.attack();
  //     // determine if ok to attack
  //     this.safeToAttack(warrior);
  //   } else if (warrior.feel().isEmpty()) {
  //     warrior.walk();
  //   }
  // }

  rescue(warrior) {
    if (warrior.feel('backward').isCaptive()) {
      warrior.rescue('backward');
      this.rescued = true;
    } else if (warrior.feel('backward').isEmpty()) {
      warrior.walk('backward');
    }
  }

  safeToAttack(warrior) {
    if (warrior.health() === this.maxHealth || warrior.health() > this.archerDangerHealthThreshold) {
      warrior.walk();
    } else if (warrior.health() === this.prevHealth && warrior.health() < this.maxHealth) {
      warrior.rest();
    } else if (warrior.health() < this.archerDangerHealthThreshold) {
      warrior.walk('backward');
    } else {
      warrior.attack();
    }
  }

  // safeToAttack(warrior) {
  //   if (warrior.health() < this.prevHealth && warrior.health() < this.archerDangerHealthThreshold) {
  //     warrior.walk('backward');
  //     // this runs forever if all you do is check against the 6 HP threshold
  //     // warrior.health() < this.prevHealth && warrior.health() < this.archerDangerHealthThreshold
  //   } else if (warrior.health() === this.maxHealth) {
  //     warrior.walk();
  //   } else if (warrior.health() === this.prevHealth) {
  //     warrior.rest();
  //   } else {
  //     warrior.attack();
  //   }
  // }

  // safeToAttack(warrior) {
  //   if (warrior.health() < this.prevHealth) {
  //     warrior.walk('backward');
  //   } else if (warrior.health() === this.maxHealth) {
  //     warrior.walk();
  //   } else if (warrior.health() === this.prevHealth) {
  //     warrior.rest();
  //   } else {
  //     warrior.attack();
  //   }
  // }

  // retreat(warrior) {
  //   if (warrior.health() < this.prevHealth) {
  //     warrior.walk('backward');
  //   } else if (warrior.health() >= this.prevHealth) {
  //     warrior.walk();
  //   } else {
  //     warrior.rest();
  //   }
  // }

  // move(warrior) {
  //   warrior.walk(this.direction);
  // }


  playTurn(warrior) {
    // the base action goes here
    this.decideAction(warrior);

    this.prevHealth = warrior.health();
  }
}
