import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICharacter } from '../character/interfaces/character.interface';
import { CreateRoleDto } from './dtos/role.dto';
import { RoleEntity } from './entities/role.entity';
import { IRole } from './interfaces/role.interface';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private roleRepository: Repository<RoleEntity>,
  ) {}

  async createNew(newRoles: CreateRoleDto[]): Promise<IRole[]> {
    newRoles.forEach(async (newRole) => {
      if (
        !(await this.roleRepository.exist({
          where: { name: newRole.name },
        }))
      ) {
        await this.roleRepository.save(newRole);
      }
    });

    return newRoles;
  }

  async getRandomRole(character: ICharacter, roll: number): Promise<IRole> {
    const role = await this.roleRepository.findOne({
      where: { rollNumber: roll },
    });

    if (!role) {
      throw new Error('Role not found');
    }

    return role as unknown as IRole;
  }
}
