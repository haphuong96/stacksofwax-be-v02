import { EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Album } from 'src/models/entities/Album';

export class AlbumService {
    constructor(
        @InjectRepository(Album)
        private readonly albumRepository: EntityRepository<Album>,
    ) {}

    async findAll(): Promise<Album[]> {
        return this.albumRepository.findAll({populate: ['artists']});
    }
}