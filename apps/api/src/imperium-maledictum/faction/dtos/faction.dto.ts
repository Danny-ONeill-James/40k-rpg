export class CreatefactionDto {
  name: string;
  primaryCharacteristic: string;
  secondaryCharacteristic1: string;
  secondaryCharacteristic2: string;
  secondaryCharacteristic3: string;
}

export class GetFactionDto extends CreatefactionDto {
  id: string;
}
