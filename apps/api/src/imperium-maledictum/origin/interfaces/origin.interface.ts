import { ICharacteristic } from '../../character/interfaces/characteristic.interface';
import { IFaction } from '../../character/interfaces/faction.interface';

export interface IOrigin {
  id?: string;
  name: string;
  rollRangeLow: number;
  rollRangeHigh: number;
}

export interface IOriginOld {
  name: string;
  minRoll: number;
  maxRoll: number;
  primaryCharacteristicModifier: ICharacteristic;
  secondaryCharacteristicModifier1: ICharacteristic;
  secondaryCharacteristicModifier2: ICharacteristic;
  secondaryCharacteristicModifier3: ICharacteristic;
  factions: { faction: IFaction; minRoll: number; maxRoll: number };
}
