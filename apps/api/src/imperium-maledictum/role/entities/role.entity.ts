import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class RoleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;
}
