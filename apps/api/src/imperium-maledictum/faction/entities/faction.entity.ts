import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FactionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;
}
