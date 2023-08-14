export interface ICharacter {
  name: string;
  baseStats?: ICharacterBaseStats;
}

export interface ICharacterBaseStats {
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
