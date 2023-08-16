import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactionEntity } from '../faction/entities/faction.entity';
import { FactionService } from '../faction/faction.service';
import { OriginToFactionRollTableEntity } from './entities/origin-to-faction-roll-table.entity';
import { OriginEntity } from './entities/origin.entity';
import { OriginController } from './origin.controller';
import { OriginService } from './origin.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OriginEntity,
      OriginToFactionRollTableEntity,
      FactionEntity,
    ]),
  ],
  providers: [OriginService, FactionService],
  controllers: [OriginController],
  exports: [OriginModule],
})
export class OriginModule {}
