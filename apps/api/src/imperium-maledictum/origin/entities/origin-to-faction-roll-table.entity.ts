import { FactionEntity } from 'src/imperium-maledictum/faction/entities/faction.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OriginEntity } from './origin.entity';

@Entity()
export class OriginToFactionRollTable {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  RollRangeLow: number;

  @Column()
  RollRangeHigh: number;

  @ManyToOne(() => OriginEntity, (originEntity) => originEntity.faction)
  faction: OriginEntity;

  @ManyToOne(() => FactionEntity, (factionEntity) => factionEntity.origin)
  origin: FactionEntity;
}
