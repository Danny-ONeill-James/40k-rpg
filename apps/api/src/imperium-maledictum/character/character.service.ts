import { Injectable } from '@nestjs/common';
import {
  ICharacter,
  ICharacterBaseStats,
} from './interfaces/character.interface';

@Injectable()
export class CharacterService {
  GenerateCharacter(): ICharacter {
    let newCharacter: ICharacter = {
      name: 'Your Character',
      baseStats: this.generateBaseStats(),
    };

    return newCharacter;
  }

  generateBaseStats(): ICharacterBaseStats {
    let newCharacterStats: ICharacterBaseStats = {
      ws: this.generateIndividualStat(),
      bs: this.generateIndividualStat(),
      str: this.generateIndividualStat(),
      tgh: this.generateIndividualStat(),
      ag: this.generateIndividualStat(),
      int: this.generateIndividualStat(),
      per: this.generateIndividualStat(),
      wil: this.generateIndividualStat(),
      fel: this.generateIndividualStat(),
    };
    return newCharacterStats;
  }

  generateIndividualStat(): number {
    const dice = 10;

    const dice1 = Math.floor(Math.random() * dice) + 1;
    const dice2 = Math.floor(Math.random() * dice) + 1;
    const newStat: number = dice1 + dice2 + 20;

    return newStat;
  }
}
