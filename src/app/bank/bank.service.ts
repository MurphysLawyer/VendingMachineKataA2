import { Injectable } from '@angular/core';

import { CoinsBalance } from '../models/coins-balance';
import { CoinsEnum } from '../shared/coins.enum';
import { InitialBankCoins } from './initial-bank-coins';

@Injectable()
export class BankService extends CoinsBalance {

  constructor(initialBankCoins: InitialBankCoins) {
    super(initialBankCoins.nickles, initialBankCoins.dimes, initialBankCoins.quarters);
  }

  get CanMakeChange(): boolean {
    // Based on valid coins being nickle, dime, and quarter, the most change that will ever be
    // needed is 20 cents. 
    if (this.getCoinBalance(CoinsEnum.NICKLE) >= 4) {
      return true;
    } else {
      if (this.getCoinBalance(CoinsEnum.NICKLE) >= 2 && this.getCoinBalance(CoinsEnum.DIME) >= 1) {
        return true;
      } else {
        if (this.getCoinBalance(CoinsEnum.NICKLE) >= 1 && this.getCoinBalance(CoinsEnum.DIME) >= 2) {
          return true;
        } else { 
          return false;
        }
      }
    }
  }
}
