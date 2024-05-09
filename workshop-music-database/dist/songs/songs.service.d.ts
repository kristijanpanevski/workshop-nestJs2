import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
export declare class SongsService {
    create(createSongDto: CreateSongDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSongDto: UpdateSongDto): string;
    remove(id: number): string;
}
