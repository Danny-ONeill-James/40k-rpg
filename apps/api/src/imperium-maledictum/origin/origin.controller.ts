import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateOriginDto } from './dtos/origin.dto';
import { IOrigin } from './interfaces/origin.interface';
import { OriginService } from './origin.service';
import { InputOriginFactionRollTableDto } from './dtos/origin-faction-roll-table.dto';

@Controller('origin')
export class OriginController {
  constructor(private originService: OriginService) {}

  @Get('/:roll')
  getOrigin(@Param('roll') roll: number) {
    return this.originService.returnOriginFromDatabase(roll);
  }

  @Post()
  CreateNew(@Body() originDetails: CreateOriginDto[]): Promise<IOrigin[]> {
    return this.originService.createNew(originDetails);
  }

  @Post('/originFactionRollTable')
  CreateNewOrigonFactionRollTable(
    @Body() originFactionDetails: InputOriginFactionRollTableDto[],
  ): Promise<InputOriginFactionRollTableDto[]> {
    return this.originService.createOriginFactionRollTable(
      originFactionDetails,
    );
  }
}
