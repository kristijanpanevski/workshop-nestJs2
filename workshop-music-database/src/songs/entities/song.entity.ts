import { Albums } from 'src/albums/entities/album.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Songs {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  duration: number;
  @Column()
  year: string;
  @Column()
  artistId: number;
  @Column()
  genre: string;

  @ManyToMany(() => Albums, (albums) => albums.artistId)
  albums: Albums[];
}
