import { OriginToFactionRollTableEntity } from 'src/imperium-maledictum/origin/entities/origin-to-faction-roll-table.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FactionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

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
    (originToFactionRollTable) => originToFactionRollTable.faction,
  )
  origin: OriginToFactionRollTableEntity[];
}
