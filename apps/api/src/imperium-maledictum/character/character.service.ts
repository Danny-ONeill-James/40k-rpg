import { Injectable } from '@nestjs/common';
import {
  ICharacter,
  ICharacterBaseCharacteristics,
} from './interfaces/character.interface';

@Injectable()
export class CharacterService {
  GenerateCharacter(): ICharacter {
    let newCharacter: ICharacter = {
      name: 'Your Character',
      baseCharacteristics: this.generateBaseCharacteristics(),
    };

    return newCharacter;
  }

  generateBaseCharacteristics(): ICharacterBaseCharacteristics {
    let newCharacterCharacteristics: ICharacterBaseCharacteristics = {
      ws: this.generateIndividualCharacteristic(),
      bs: this.generateIndividualCharacteristic(),
      str: this.generateIndividualCharacteristic(),
      tgh: this.generateIndividualCharacteristic(),
      ag: this.generateIndividualCharacteristic(),
      int: this.generateIndividualCharacteristic(),
      per: this.generateIndividualCharacteristic(),
      wil: this.generateIndividualCharacteristic(),
      fel: this.generateIndividualCharacteristic(),
    };
    return newCharacterCharacteristics;
  }

  generateIndividualCharacteristic(): number {
    const dice = 10;

    const dice1 = Math.floor(Math.random() * dice) + 1;
    const dice2 = Math.floor(Math.random() * dice) + 1;
    const newCharacteristic: number = dice1 + dice2 + 20;

    return newCharacteristic;
  }
}
