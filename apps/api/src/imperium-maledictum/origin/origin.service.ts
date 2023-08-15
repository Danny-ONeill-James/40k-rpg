import { Injectable } from '@nestjs/common';
import { CreateOriginDto } from './dtos/origin.dto';
import { IOrigin } from './interfaces/origin.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { OriginEntity } from './entities/origin.entity';
import { Repository } from 'typeorm';

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
}
