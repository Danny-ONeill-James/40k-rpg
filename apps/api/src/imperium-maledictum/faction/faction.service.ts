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
    private factionRepository: Repository<FactionEntity>,
  ) {}

  async createNew(newFactions: CreatefactionDto[]): Promise<IFaction[]> {
    newFactions.forEach(async (newFaction) => {
      if (
        !(await this.factionRepository.exist({
          where: { name: newFaction.name },
        }))
      )
        await this.factionRepository.save(newFaction);
    });

    return newFactions;
  }

  async findFactionByName(factionName: string): Promise<IFaction> {
    const returnedFaction = await this.factionRepository.findOne({
      where: { name: factionName },
    });

    if (!returnedFaction) {
      throw new Error('Faction not found');
    }

    const foundfaction: IFaction = {
      id: returnedFaction!.id,
      name: returnedFaction!.name,
    };

    return foundfaction;
  }
}
