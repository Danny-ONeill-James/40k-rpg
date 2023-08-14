import { IOrigin } from './origin.interface';

export interface ICharacter {
  name: string;
  baseCharacteristics: ICharacterBaseCharacteristics;
  origin: string;
}

export interface ICharacterBaseCharacteristics {
  ws: number;
  bs: number;
  str: number;
  tgh: number;
  ag: number;
  int: number;
  per: number;
  wil: number;
  fel: number;
}
