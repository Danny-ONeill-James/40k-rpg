import { OriginToFactionRollTableEntity } from 'src/imperium-maledictum/origin/entities/origin-to-faction-roll-table.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FactionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @OneToMany(
    () => OriginToFactionRollTableEntity,
    (originToFactionRollTable) => originToFactionRollTable.faction,
  )
  origin: OriginToFactionRollTableEntity[];
}
