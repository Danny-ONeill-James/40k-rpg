export class CreateOriginDto {
  name: string;
  rollRangeLow: number;
  rollRangeHigh: number;
  primaryCharacteristic: string;
  secondaryCharacteristic1: string;
  secondaryCharacteristic2: string;
  secondaryCharacteristic3: string;
}

export class GetOriginDto extends CreateOriginDto {
  id: string;
}
