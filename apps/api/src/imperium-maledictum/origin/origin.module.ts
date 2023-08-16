import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OriginEntity } from './entities/origin.entity';
import { OriginService } from './origin.service';
import { OriginController } from './origin.controller';
import { OriginToFactionRollTable } from './entities/origin-to-faction-roll-table.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OriginEntity, OriginToFactionRollTable])],
  providers: [OriginService],
  controllers: [OriginController],
  exports: [OriginService],
})
export class OriginModule {}
