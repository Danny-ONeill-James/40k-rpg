import { Injectable } from '@nestjs/common';
import { CreateOriginDto } from './dtos/origin.dto';
import { IOrigin } from './interfaces/origin.interface';

@Injectable()
export class OriginService {
  createNew(originDetails: CreateOriginDto[]): IOrigin[] {
    console.log('Will Create new Origin');

    return originDetails;
  }
}
