export class CreateOriginDto {
  name: string;
  rollRangeLow: number;
  rollRangeHigh: number;
}

export class GetOriginDto extends CreateOriginDto {
  id: string;
}
