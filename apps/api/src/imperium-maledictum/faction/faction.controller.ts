import { Body, Controller, Post } from '@nestjs/common';
import { IFaction } from '../character/interfaces/faction.interface';
import { CreatefactionDto } from './dtos/faction.dto';
import { FactionService } from './faction.service';

@Controller('faction')
export class FactionController {
  constructor(private factionService: FactionService) {}

  @Post()
  CreateNew(@Body() factionDetails: CreatefactionDto[]): Promise<IFaction[]> {
    return this.factionService.createNew(factionDetails);
  }
}
