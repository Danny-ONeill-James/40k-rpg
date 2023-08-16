import { Body, Controller, Post } from '@nestjs/common';
import { CreateRoleDto } from './dtos/role.dto';
import { IRole } from './interfaces/role.interface';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post()
  CreateNew(@Body() roleDetails: CreateRoleDto[]): Promise<IRole[]> {
    return this.roleService.createNew(roleDetails);
  }
}
