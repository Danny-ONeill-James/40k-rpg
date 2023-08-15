import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
