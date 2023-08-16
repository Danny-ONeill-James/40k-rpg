import { IOrigin } from 'src/imperium-maledictum/origin/interfaces/origin.interface';
import { IRole } from 'src/imperium-maledictum/role/interfaces/role.interface';
import { IFaction } from '../../faction/interfaces/faction.interface';
import { ICharacteristic } from './characteristic.interface';

export interface ICharacter {
  name: string;
  experience: number;
  baseCharacteristics: ICharacteristic;
  modifiedCharacteristics: ICharacteristic;
  origin: IOrigin;
  faction: IFaction;
  role: IRole;
}
