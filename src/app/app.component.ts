import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'lejeu';

  constructor() {

  }

  ngOnInit(): void {
  }
  /*
  diceThrow() {
    return this.diceFaces[Math.floor(Math.random() * 6)];
  }

  rethrowDices() {
    this.blockReroll = true;
    const intervals: number[] = [];
    let symbol: DiceFaceNames[] = [];
    let unlockedDices = this.dices.filter(dice => !dice.locked)
    for (let index = 0; index < unlockedDices.length; index++) {
      symbol[index] = this.diceThrow();
      intervals[index] = window.setInterval(() => {
        this.turnDiceFaces(unlockedDices[index])
      }, 50);
    }
    setTimeout(() => {
      for (let index = 0; index < unlockedDices.length; index++) {
        clearInterval(intervals[index]);
        unlockedDices[index].symbol = symbol[index]
      }
      this.checkDices(false);
      this.blockReroll = false;
    }, 1000)
  }

  turnDiceFaces(dice: DiceInterface) {
    dice.symbol = this.diceThrow();
  }

  toggleDice(dice: DiceInterface, locked: boolean) {
    if (locked) {
      if (dice.symbol === 'X') {
        return;
      }
      dice.locked = false;
      return this.checkDices(false);
    }
    dice.locked = true;
    return this.checkDices(false);
  }

  checkDices(first: boolean) {
    this.lockedDiceFaces = {};
    for (const dice of this.dices) {
      if (dice.symbol === 'X') {
        dice.locked = true;
      }
      if(dice.locked) {
        if (!this.lockedDiceFaces[dice.symbol]) {
          this.lockedDiceFaces[dice.symbol] = [dice.symbol]
        }
        else {
          this.lockedDiceFaces[dice.symbol].push(dice.symbol)
        }
      }
    }
    if (this.lockedDiceFaces['X'] && this.lockedDiceFaces['X'].length > 3 ) {
      this.combatState.doomed = true;
    }
    this.diceEffects = this.diceEffectService.getDiceEffects(this.dices.filter(dice => dice.locked));
  }*/
}

