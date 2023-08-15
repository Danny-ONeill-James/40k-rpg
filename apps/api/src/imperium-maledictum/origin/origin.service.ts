import { Injectable } from '@nestjs/common';
import { CreateOriginDto } from './dtos/origin.dto';
import { IOrigin } from './interfaces/origin.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { OriginEntity } from './entities/origin.entity';
import { LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class OriginService {
  constructor(
    @InjectRepository(OriginEntity)
    private originRepository: Repository<OriginEntity>,
  ) {}

  async createNew(newOrigins: CreateOriginDto[]): Promise<IOrigin[]> {
    newOrigins.forEach(async (newOrigin) => {
      await this.originRepository.save(newOrigin);
    });

    return newOrigins;
  }

  returnOriginFromDatabase(roll: number): IOrigin {
    console.log('Roll: ' + roll);
    const origin = this.originRepository.findOneBy({
      rollRangeLow: LessThanOrEqual(roll),
      rollRangeHigh: MoreThanOrEqual(roll),
    });

    if (!origin) {
      throw new Error('Origin not found');
    }

    return origin as unknown as IOrigin;
  }
}
