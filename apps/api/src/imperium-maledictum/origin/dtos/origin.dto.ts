export class CreateOriginDto {
  name: string;
  rollRange: number[];
}

export class GetOriginDto extends CreateOriginDto {
  id: string;
}
