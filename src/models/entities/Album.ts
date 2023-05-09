import { Collection, Entity, ManyToMany, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Country } from './Country';
import { Artist } from './Artist';
import { AlbumArtist } from './AlbumArtist';

@Entity()
export class Album {

  @PrimaryKey()
  id!: number;

  @Property({ length: 255, nullable: true, default: 'NULL' })
  albumTitle?: string;

  @Property({ nullable: true, default: NaN })
  releaseYear?: number = NaN;

  @Property({ length: 255, nullable: true, default: 'NULL' })
  imgPath?: string;

  @ManyToOne({ entity: () => Country, nullable: true, defaultRaw: `NULL`, index: 'country_id' })
  country?: Country;

  @Property({ nullable: true, defaultRaw: `current_timestamp()` })
  createdDatetime?: Date;

  @ManyToMany({ entity: () => Artist, pivotEntity: () => AlbumArtist})
  artists = new Collection<Artist>(this)
}
