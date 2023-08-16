export class CreatefactionDto {
  name: string;
}

export class GetFactionDto extends CreatefactionDto {
  id: string;
}
