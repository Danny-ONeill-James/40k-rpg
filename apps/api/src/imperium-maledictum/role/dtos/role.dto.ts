export class CreateRoleDto {
  name: string;
}

export class GetRoleDto extends CreateRoleDto {
  id: string;
}
