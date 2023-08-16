import { ICharacteristic } from '../../character/interfaces/characteristic.interface';
import { IFaction } from '../../character/interfaces/faction.interface';
import { IOrigin } from './origin.interface';

export interface IOriginFactionRollTable {
  id?: string;
  faction: IFaction;
  origin: IOrigin;
  rollRangeLow: number;
  rollRangeHigh: number;
}
