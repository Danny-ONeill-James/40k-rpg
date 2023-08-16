import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactionEntity } from '../faction/entities/faction.entity';
import { FactionService } from '../faction/faction.service';
import { OriginToFactionRollTableEntity } from '../origin/entities/origin-to-faction-roll-table.entity';
import { OriginEntity } from '../origin/entities/origin.entity';
import { OriginService } from '../origin/origin.service';
import { RoleEntity } from '../role/entities/role.entity';
import { RoleService } from '../role/role.service';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OriginEntity,
      OriginToFactionRollTableEntity,
      FactionEntity,
      RoleEntity,
    ]),
  ],
  providers: [CharacterService, OriginService, FactionService, RoleService],
  controllers: [CharacterController],
})
export class CharacterModule {}
