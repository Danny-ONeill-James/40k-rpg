import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { IFaction } from '../character/interfaces/faction.interface';
import { CreatefactionDto } from './dtos/faction.dto';
import { FactionEntity } from './entities/faction.entity';
import { OriginToFactionRollTableEntity } from '../origin/entities/origin-to-faction-roll-table.entity';
import { IOrigin } from '../origin/interfaces/origin.interface';

@Injectable()
export class FactionService {
  constructor(
    @InjectRepository(FactionEntity)
    private factionRepository: Repository<FactionEntity>,
    @InjectRepository(OriginToFactionRollTableEntity)
    private originToFactionRollTableRepository: Repository<OriginToFactionRollTableEntity>,
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

  async returnFactionFromDatabase(
    origin: IOrigin,
    roll: number,
  ): Promise<IFaction> {
    const returnedFaction =
      await this.originToFactionRollTableRepository.findOne({
        where: {
          origin: { id: origin.id },
          rollRangeLow: LessThanOrEqual(roll),
          rollRangeHigh: MoreThanOrEqual(roll),
        },
        relations: { faction: true },
      });

    return returnedFaction!.faction;
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
      primaryCharacteristic: returnedFaction!.primaryCharacteristic,
      secondaryCharacteristic1: returnedFaction!.secondaryCharacteristic1,
      secondaryCharacteristic2: returnedFaction!.secondaryCharacteristic2,
      secondaryCharacteristic3: returnedFaction!.secondaryCharacteristic3,
    };

    return foundfaction;
  }
}
