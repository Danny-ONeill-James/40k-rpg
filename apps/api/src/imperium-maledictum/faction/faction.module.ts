import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactionEntity } from './entities/faction.entity';

@Module({ imports: [TypeOrmModule.forFeature([FactionEntity])] })
export class FactionModule {}
