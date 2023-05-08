import { Entity, ManyToOne, PrimaryKey, Unique } from '@mikro-orm/core';
import { Album } from './Album';
import { Artist } from './Artist';

@Entity()
@Unique({ name: 'album_id', properties: ['album', 'artist'] })
export class AlbumArtist {

  @PrimaryKey()
  id!: number;

  @ManyToOne({ entity: () => Album, index: 'album_album_id' })
  album!: Album;

  @ManyToOne({ entity: () => Artist, index: 'artist_artist_id' })
  artist!: Artist;

}
