import { Inject, Injectable } from '@nestjs/common';
import { OriginService } from '../origin/origin.service';
import { ICharacter } from './interfaces/character.interface';
import { ICharacteristic } from './interfaces/characteristic.interface';

@Injectable()
export class CharacterService {
  @Inject(OriginService)
  private readonly originService: OriginService;

  async GenerateCharacter(): Promise<ICharacter> {
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
      faction: '',
      origin: {
        name: '',
        rollRangeLow: 0,
        rollRangeHigh: 0,
        primaryCharacteristic: '',
        secondaryCharacteristic1: '',
        secondaryCharacteristic2: '',
        secondaryCharacteristic3: '',
      },
    };

    newCharacter.name = 'Your Character';

    newCharacter = this.generateBaseCharacteristics(newCharacter);

    newCharacter = await this.randomOrigin(newCharacter);

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

  async randomOrigin(character: ICharacter): Promise<ICharacter> {
    const dice = 100;
    const dice1 = Math.floor(Math.random() * dice) + 1;

    character.origin = await this.originService.returnOriginFromDatabase(dice1);

    character.modifiedCharacteristics;

    const characterModifier = {
      characteristic: character.origin.primaryCharacteristic,
      modifier: 5,
    };

    character = this.updateModifiedCharacteristics(
      character,
      characterModifier,
    );

    const randSecondary = Math.floor(Math.random() * 3) + 1;

    if (randSecondary == 1) {
      characterModifier.characteristic =
        character.origin.secondaryCharacteristic1;
    } else if (randSecondary == 2) {
      characterModifier.characteristic =
        character.origin.secondaryCharacteristic1;
    } else {
      characterModifier.characteristic =
        character.origin.secondaryCharacteristic1;
    }

    character = this.updateModifiedCharacteristics(
      character,
      characterModifier,
    );

    return character;
  }

  updateModifiedCharacteristicsOld(
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

  updateModifiedCharacteristics(
    character: ICharacter,
    characteristicModifier: { characteristic: string; modifier: number },
  ): ICharacter {
    if (characteristicModifier.characteristic == 'ws') {
      character.modifiedCharacteristics.ws += characteristicModifier.modifier;
    } else if (characteristicModifier.characteristic == 'bs') {
      character.modifiedCharacteristics.bs += characteristicModifier.modifier;
    } else if (characteristicModifier.characteristic == 'str') {
      character.modifiedCharacteristics.ws += characteristicModifier.modifier;
    } else if (characteristicModifier.characteristic == 'tgh') {
      character.modifiedCharacteristics.tgh += characteristicModifier.modifier;
    } else if (characteristicModifier.characteristic == 'ag') {
      character.modifiedCharacteristics.ag += characteristicModifier.modifier;
    } else if (characteristicModifier.characteristic == 'int') {
      character.modifiedCharacteristics.int += characteristicModifier.modifier;
    } else if (characteristicModifier.characteristic == 'per') {
      character.modifiedCharacteristics.per += characteristicModifier.modifier;
    } else if (characteristicModifier.characteristic == 'wil') {
      character.modifiedCharacteristics.wil += characteristicModifier.modifier;
    } else if (characteristicModifier.characteristic == 'fel') {
      character.modifiedCharacteristics.fel += characteristicModifier.modifier;
    }

    return character;
  }

  // 'character' in character;

  // character.modifiedCharacteristics.

  randomFation(character: ICharacter): ICharacter {
    return character;
  }
}
