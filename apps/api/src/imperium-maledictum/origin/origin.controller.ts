import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InputOriginFactionRollTableDto } from './dtos/origin-faction-roll-table.dto';
import { CreateOriginDto } from './dtos/origin.dto';
import { IOrigin } from './interfaces/origin.interface';
import { IOriginFactionRollTable } from './interfaces/originFactionRollTable.interface';
import { OriginService } from './origin.service';

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
  ): Promise<IOriginFactionRollTable[]> {
    return this.originService.createOriginFactionRollTable(
      originFactionDetails,
    );
  }
}
