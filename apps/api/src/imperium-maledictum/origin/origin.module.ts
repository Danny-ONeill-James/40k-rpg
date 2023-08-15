import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OriginEntity } from './entities/origin.entity';
import { OriginService } from './origin.service';
import { OriginController } from './origin.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OriginEntity])],
  providers: [OriginService],
  controllers: [OriginController],
  exports: [OriginService],
})
export class OriginModule {}
