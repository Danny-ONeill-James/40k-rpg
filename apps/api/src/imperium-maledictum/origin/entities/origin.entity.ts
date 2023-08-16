import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OriginToFactionRollTableEntity } from './origin-to-faction-roll-table.entity';

@Entity()
export class OriginEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  rollRangeLow: number;

  @Column({ nullable: false })
  rollRangeHigh: number;

  @Column({ nullable: false })
  primaryCharacteristic: string;

  @Column({ nullable: false })
  secondaryCharacteristic1: string;

  @Column({ nullable: false })
  secondaryCharacteristic2: string;

  @Column({ nullable: false })
  secondaryCharacteristic3: string;

  @OneToMany(
    () => OriginToFactionRollTableEntity,
    (originToFactionRollTableEntity) => originToFactionRollTableEntity.origin,
  )
  faction: OriginToFactionRollTableEntity[];
}
