import { Albums } from 'src/albums/entities/album.entity';
export declare class Songs {
    id: number;
    title: string;
    duration: number;
    year: string;
    artistId: number;
    genre: string;
    albums: Albums[];
}
