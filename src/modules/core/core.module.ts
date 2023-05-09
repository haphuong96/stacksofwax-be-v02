import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Album } from 'src/models/entities/Album';
import { AlbumService } from './services/album.service';
import { AlbumController } from './controllers/album.controller';
// import { Artist } from 'src/models/entities/Artist';

@Module({
    imports: [MikroOrmModule.forFeature([Album])],
    providers: [AlbumService],
    controllers: [AlbumController]
})
export class CoreModule {}