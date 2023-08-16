import { IOrigin } from 'src/imperium-maledictum/origin/interfaces/origin.interface';
import { ICharacteristic } from './characteristic.interface';
import { IFaction } from '../../faction/interfaces/faction.interface';

export interface ICharacter {
  name: string;
  experience: number;
  baseCharacteristics: ICharacteristic;
  modifiedCharacteristics: ICharacteristic;
  origin: IOrigin;
  faction: IFaction;
}
