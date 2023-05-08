import { Entity, ManyToOne, PrimaryKey, Unique } from '@mikro-orm/core';
import { Album } from './Album';
import { Genre } from './Genre';

@Entity()
@Unique({ name: 'album_id', properties: ['album', 'genre'] })
@Unique({ name: 'album_id_2', properties: ['album', 'genre'] })
export class AlbumGenre {

  @PrimaryKey()
  id!: number;

  @ManyToOne({ entity: () => Album, nullable: true, defaultRaw: `NULL`, index: 'album_genre_ibfk_2' })
  album?: Album;

  @ManyToOne({ entity: () => Genre, nullable: true, defaultRaw: `NULL`, index: 'album_genre_ibfk_1' })
  genre?: Genre;

}
