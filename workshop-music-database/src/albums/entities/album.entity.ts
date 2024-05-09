import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Albums {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  artistId: number;
  @Column()
  genre: string;
  @Column()
  year: string;
  @Column()
  numberOfSales: number;
}
