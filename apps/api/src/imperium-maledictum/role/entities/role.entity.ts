import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RoleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  rollNumber: number;
}
