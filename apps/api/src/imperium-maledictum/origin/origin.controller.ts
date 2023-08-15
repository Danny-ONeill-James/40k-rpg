import { Body, Controller, Post } from '@nestjs/common';
import { CreateOriginDto } from './dtos/origin.dto';
import { IOrigin } from './interfaces/origin.interface';
import { OriginService } from './origin.service';

@Controller('origin')
export class OriginController {
  constructor(private originService: OriginService) {}

  @Post()
  CreateNew(@Body() originDetails: CreateOriginDto[]): Promise<IOrigin[]> {
    return this.originService.createNew(originDetails);
  }
}
