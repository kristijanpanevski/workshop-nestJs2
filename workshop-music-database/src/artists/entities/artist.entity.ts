import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Artists {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  stageName: string;
  @Column()
  age: number;
}
