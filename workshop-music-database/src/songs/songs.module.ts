import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Songs } from './entities/song.entity';

@Module({
  controllers: [SongsController],
  providers: [SongsService],
  imports: [TypeOrmModule.forFeature([Songs])],
})
export class SongsModule {}
