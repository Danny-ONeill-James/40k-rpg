import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OriginModule } from '../origin/origin.module';
import { FactionEntity } from './entities/faction.entity';
import { FactionController } from './faction.controller';
import { FactionService } from './faction.service';
import { OriginToFactionRollTableEntity } from '../origin/entities/origin-to-faction-roll-table.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FactionEntity, OriginToFactionRollTableEntity]),
    OriginModule,
  ],
  providers: [FactionService],
  controllers: [FactionController],
  exports: [FactionModule],
})
export class FactionModule {}
