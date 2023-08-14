import { ICharacteristic } from './characteristic.interface';

export interface ICharacter {
  name: string;
  experience: number;
  baseCharacteristics: ICharacteristic;
  modifiedCharacteristics: ICharacteristic;
  origin: string;
}
