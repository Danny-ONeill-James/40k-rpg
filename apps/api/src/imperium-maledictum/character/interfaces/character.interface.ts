import { ICharacteristic } from './characteristic.interface';

export interface ICharacter {
  name: string;
  baseCharacteristics: ICharacteristic;
  modifiedCharacteristics: ICharacteristic;
  origin: string;
}
