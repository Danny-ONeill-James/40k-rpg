import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { FactionService } from '../faction/faction.service';
import {
  CreateOriginFactionRollTableDto,
  InputOriginFactionRollTableDto,
} from './dtos/origin-faction-roll-table.dto';
import { CreateOriginDto } from './dtos/origin.dto';
import { OriginToFactionRollTableEntity } from './entities/origin-to-faction-roll-table.entity';
import { OriginEntity } from './entities/origin.entity';
import { IOrigin } from './interfaces/origin.interface';
import { IOriginFactionRollTable } from './interfaces/originFactionRollTable.interface';

@Injectable()
export class OriginService {
  constructor(
    @InjectRepository(OriginEntity)
    private originRepository: Repository<OriginEntity>,
    @InjectRepository(OriginToFactionRollTableEntity)
    private originFactionRollTableRepository: Repository<OriginToFactionRollTableEntity>,
    private factionService: FactionService,
  ) {}

  async createNew(newOrigins: CreateOriginDto[]): Promise<IOrigin[]> {
    newOrigins.forEach(async (newOrigin) => {
      if (
        !(await this.originRepository.exist({
          where: { name: newOrigin.name },
        }))
      ) {
        await this.originRepository.save(newOrigin);
      }
    });

    return newOrigins;
  }

  async createOriginFactionRollTable(
    neworiginFactionolls: InputOriginFactionRollTableDto[],
  ): Promise<IOriginFactionRollTable[]> {
    const createdOriginFactionRollTables: CreateOriginFactionRollTableDto[] =
      [];

    neworiginFactionolls.forEach(async (neworiginFactionoll) => {
      const origin = await this.findOriginByName(neworiginFactionoll.origin);
      const faction = await this.factionService.findFactionByName(
        neworiginFactionoll.faction,
      );

      const factionToAdd: IOriginFactionRollTable = {
        faction: faction,
        origin: origin,
        rollRangeLow: neworiginFactionoll.rollRangeLow,
        rollRangeHigh: neworiginFactionoll.rollRangeHigh,
      };

      if (
        !(await this.originFactionRollTableRepository.exist({
          where: { faction: faction, origin: origin },
        }))
      ) {
        await this.originFactionRollTableRepository.save(factionToAdd);
        createdOriginFactionRollTables.push(factionToAdd);
      }
    });

    return createdOriginFactionRollTables;
  }

  returnOriginFromDatabase(roll: number): IOrigin {
    const origin = this.originRepository.findOneBy({
      rollRangeLow: LessThanOrEqual(roll),
      rollRangeHigh: MoreThanOrEqual(roll),
    });

    if (!origin) {
      throw new Error('Origin not found');
    }

    return origin as unknown as IOrigin;
  }

  async findOriginByName(originName: string): Promise<IOrigin> {
    const returnedOrigin = await this.originRepository.findOne({
      where: { name: originName },
    });

    if (!returnedOrigin) {
      throw new Error('Origin not found');
    }

    const foundOrigin: IOrigin = {
      id: returnedOrigin!.id,
      name: returnedOrigin!.name,
      rollRangeLow: returnedOrigin!.rollRangeLow,
      rollRangeHigh: returnedOrigin!.rollRangeHigh,
      primaryCharacteristic: returnedOrigin!.primaryCharacteristic,
      secondaryCharacteristic1: returnedOrigin!.secondaryCharacteristic1,
      secondaryCharacteristic2: returnedOrigin!.secondaryCharacteristic2,
      secondaryCharacteristic3: returnedOrigin!.secondaryCharacteristic3,
    };

    return foundOrigin;
  }
}
