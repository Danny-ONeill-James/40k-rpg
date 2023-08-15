import { Controller, Get } from '@nestjs/common';
import { ICharacter } from './interfaces/character.interface';
import { CharacterService } from './character.service';

@Controller('character')
export class CharacterController {
  constructor(private characterService: CharacterService) {}

  @Get('generateCharacter')
  GenerateCharacter(): ICharacter {
    return this.characterService.GenerateCharacter();
  }
}
