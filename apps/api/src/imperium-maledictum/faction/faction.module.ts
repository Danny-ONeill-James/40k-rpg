import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactionEntity } from './entities/faction.entity';
import { FactionService } from './faction.service';
import { FactionController } from './faction.controller';

@Module({ imports: [TypeOrmModule.forFeature([FactionEntity])], providers: [FactionService], controllers: [FactionController] })
export class FactionModule {}
