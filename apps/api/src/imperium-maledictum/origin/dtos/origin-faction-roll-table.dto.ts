import { IFaction } from 'src/imperium-maledictum/faction/interfaces/faction.interface';
import { IOrigin } from '../interfaces/origin.interface';

export class InputOriginFactionRollTableDto {
  faction: string;
  origin: string;
  rollRangeLow: number;
  rollRangeHigh: number;
}

export class CreateOriginFactionRollTableDto {
  faction: IFaction;
  origin: IOrigin;
  rollRangeLow: number;
  rollRangeHigh: number;
}

export class GetOriginFactionRollTableDto extends CreateOriginFactionRollTableDto {
  id: string;
}
