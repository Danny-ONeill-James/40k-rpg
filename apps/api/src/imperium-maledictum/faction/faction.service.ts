import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FactionEntity } from './entities/faction.entity';
import { CreatefactionDto } from './dtos/faction.dto';
import { IFaction } from '../character/interfaces/faction.interface';

@Injectable()
export class FactionService {
  constructor(
    @InjectRepository(FactionEntity)
    private originRepository: Repository<FactionEntity>,
  ) {}

  async createNew(newFactions: CreatefactionDto[]): Promise<IFaction[]> {
    newFactions.forEach(async (newFaction) => {
      if (
        !(await this.originRepository.exist({
          where: { name: newFaction.name },
        }))
      )
        await this.originRepository.save(newFaction);
    });

    return newFactions;
  }
}
