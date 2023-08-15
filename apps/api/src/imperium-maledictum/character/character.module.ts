import { Module } from '@nestjs/common';
import { OriginModule } from '../origin/origin.module';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';

@Module({
  imports: [OriginModule],
  providers: [CharacterService],
  controllers: [CharacterController],
})
export class CharacterModule {}
