import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactionEntity } from './entities/faction.entity';
import { FactionService } from './faction.service';
import { FactionController } from './faction.controller';
import { OriginEntity } from '../origin/entities/origin.entity';
import { OriginService } from '../origin/origin.service';
import { OriginModule } from '../origin/origin.module';

@Module({
  imports: [TypeOrmModule.forFeature([FactionEntity]), OriginModule],
  providers: [FactionService],
  controllers: [FactionController],
})
export class FactionModule {}
