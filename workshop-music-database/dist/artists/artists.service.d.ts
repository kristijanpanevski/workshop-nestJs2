import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
export declare class ArtistsService {
    create(createArtistDto: CreateArtistDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateArtistDto: UpdateArtistDto): string;
    remove(id: number): string;
}
