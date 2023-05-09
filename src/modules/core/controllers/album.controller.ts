import { Controller, Get } from "@nestjs/common";
import { AlbumService } from "../services/album.service";
import { Album } from "src/models/entities/Album";

@Controller('albums')
export class AlbumController {
    constructor(
        private albumService: AlbumService
    ){}

    @Get()
    async findAll(): Promise<Album[]> {
        return this.albumService.findAll();
    }
}