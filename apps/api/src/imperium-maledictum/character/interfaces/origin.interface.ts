import { ICharacteristic } from './characteristic.interface';

export interface IOrigin {
  name: string;
  minRoll: number;
  maxRoll: number;
  primaryCharacteristicModifier: ICharacteristic;
  secondaryCharacteristicModifier1: ICharacteristic;
  secondaryCharacteristicModifier2: ICharacteristic;
  secondaryCharacteristicModifier3: ICharacteristic;
}
