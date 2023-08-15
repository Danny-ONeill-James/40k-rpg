import { Injectable } from '@nestjs/common';
import { originsData } from '../../utilities/data/imperium-maledictum/origins.data';
import { IOriginOld } from '../origin/interfaces/origin.interface';
import { ICharacter } from './interfaces/character.interface';
import { ICharacteristic } from './interfaces/characteristic.interface';

@Injectable()
export class CharacterService {
  GenerateCharacter(): ICharacter {
    let newCharacter: ICharacter = {
      name: '',
      experience: 0,
      baseCharacteristics: {
        ws: 0,
        bs: 0,
        str: 0,
        tgh: 0,
        ag: 0,
        int: 0,
        per: 0,
        wil: 0,
        fel: 0,
      },
      modifiedCharacteristics: {
        ws: 0,
        bs: 0,
        str: 0,
        tgh: 0,
        ag: 0,
        int: 0,
        per: 0,
        wil: 0,
        fel: 0,
      },
      origin: '',
      faction: '',
    };

    newCharacter.name = 'Your Character';

    newCharacter = this.generateBaseCharacteristics(newCharacter);

    newCharacter = this.randomOrigin(newCharacter);

    newCharacter = this.randomFation(newCharacter);

    return newCharacter;
  }

  generateBaseCharacteristics(character: ICharacter): ICharacter {
    const baseCharacteristics: ICharacteristic = {
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

    character.baseCharacteristics = baseCharacteristics;
    character.modifiedCharacteristics = { ...baseCharacteristics };

    //TODO: will reduce if stats are moved will add this functionality in future update
    character.experience = 50;

    return character;
  }

  generateIndividualCharacteristic(): number {
    const dice = 10;

    const dice1 = Math.floor(Math.random() * dice) + 1;
    const dice2 = Math.floor(Math.random() * dice) + 1;
    const newCharacteristic: number = dice1 + dice2 + 20;

    return newCharacteristic;
  }

  randomOrigin(character: ICharacter): ICharacter {
    const dice = 100;
    const dice1 = Math.floor(Math.random() * dice) + 1;

    const origin: IOriginOld | undefined = originsData.find(
      (origin) => origin.minRoll <= dice1 && dice1 <= origin.maxRoll,
    );

    if (origin !== undefined) {
      character.origin = origin.name;
    } else {
      character.origin = originsData[5].name;
      //TODO: produce an Error
      //Workaround, set to voidborn as most prominent
    }

    character.modifiedCharacteristics = this.updateModifiedCharacteristics(
      character.modifiedCharacteristics,
      origin!.primaryCharacteristicModifier,
    );

    const randSecondary = Math.floor(Math.random() * 3) + 1;

    const secondaryCharacteristicModifier =
      origin!.secondaryCharacteristicModifier1;

    if (randSecondary == 2) {
      const secondaryCharacteristicModifier =
        origin!.secondaryCharacteristicModifier2;
    } else {
      const secondaryCharacteristicModifier =
        origin!.secondaryCharacteristicModifier3;
    }

    character.modifiedCharacteristics = this.updateModifiedCharacteristics(
      character.modifiedCharacteristics,
      secondaryCharacteristicModifier,
    );

    //TODO: Add item listed in rules

    return character;
  }

  updateModifiedCharacteristics(
    character: ICharacteristic,
    modifiers: ICharacteristic,
  ): ICharacteristic {
    character.ws = character.ws + modifiers.ws;
    character.bs += modifiers.bs;
    character.str += modifiers.str;
    character.tgh += modifiers.tgh;
    character.ag += modifiers.ag;
    character.int += modifiers.int;
    character.per += modifiers.per;
    character.wil += modifiers.wil;
    character.fel += modifiers.fel;

    return character;
  }

  randomFation(character: ICharacter): ICharacter {
    const dice = 100;
    const dice1 = Math.floor(Math.random() * dice) + 1;

    const origin: IOriginOld | undefined = originsData.find(
      (origin) => origin.name == character.origin,
    );

    return character;
  }
}
