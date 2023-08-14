import { Injectable } from '@nestjs/common';
import { originsData } from '../../utilities/data/imperium-maledictum/origins.data';
import {
  ICharacter,
  ICharacterBaseCharacteristics,
} from './interfaces/character.interface';
import { IOrigin } from './interfaces/origin.interface';

@Injectable()
export class CharacterService {
  GenerateCharacter(): ICharacter {
    let newCharacter: ICharacter = {
      name: 'Your Character',
      baseCharacteristics: this.generateBaseCharacteristics(),
      origin: this.randomOrigin(),
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

  randomOrigin(): string {
    const dice = 100;
    const dice1 = Math.floor(Math.random() * dice) + 1;
    console.log('Roll: ' + dice1);

    const origin: IOrigin | undefined = originsData.find(
      (origin) => origin.minRoll <= dice1 && dice1 <= origin.maxRoll,
    );

    if (origin !== undefined) {
      return origin.name;
    } else {
      return originsData[5].name;
    }
  }
}
