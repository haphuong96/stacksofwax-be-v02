import { Entity, ManyToMany, PrimaryKey, Property, Collection } from '@mikro-orm/core';
import { Album } from './Album';

@Entity()
export class Artist {

  @PrimaryKey()
  id!: number;

  @Property({ length: 255, nullable: true, default: 'NULL' })
  artistName?: string;

  @Property({ columnType: 'text', length: 65535, nullable: true, default: 'NULL' })
  artistDescription?: string;

  @Property({ length: 255, nullable: true, default: 'NULL' })
  imgPath?: string;

  @ManyToMany({ entity: () => Album, mappedBy: 'artists'})
  albums = new Collection<Album>(this)
}
