import { Entity, ManyToMany, PrimaryKey, Property, Collection } from '@mikro-orm/core';
import { Album } from './Album';

@Entity()
export class Artist {

  @PrimaryKey()
  id!: number;

  @Property({ length: 255, nullable: true })
  artistName?: string;

  @Property({ columnType: 'text', length: 65535, nullable: true})
  artistDescription?: string;

  @Property({ length: 255, nullable: true })
  imgPath?: string;

  @ManyToMany({ entity: () => Album, mappedBy: 'artists'})
  albums = new Collection<Album>(this)
}
