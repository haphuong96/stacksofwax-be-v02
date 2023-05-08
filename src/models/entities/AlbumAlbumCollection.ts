import { Entity, ManyToOne, OptionalProps, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { Album } from './Album';
import { AlbumCollection } from './AlbumCollection';

@Entity()
@Unique({ name: 'album_id', properties: ['album', 'albumCollection'] })
export class AlbumAlbumCollection {

  [OptionalProps]?: 'createdDatetime';

  @PrimaryKey()
  id!: number;

  @ManyToOne({ entity: () => Album, nullable: true, defaultRaw: `NULL`, index: 'vinyl_id' })
  album?: Album;

  @ManyToOne({ entity: () => AlbumCollection, onUpdateIntegrity: 'cascade', onDelete: 'cascade', nullable: true, defaultRaw: `NULL`, index: 'vinyl_collection_id' })
  albumCollection?: AlbumCollection;

  @Property({ defaultRaw: `current_timestamp()` })
  createdDatetime!: Date;

}
