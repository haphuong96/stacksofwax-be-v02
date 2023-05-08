import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Album } from './Album';

@Entity()
export class Track {

  @PrimaryKey()
  id!: number;

  @Property({ length: 255, nullable: true, default: 'NULL' })
  trackTitle?: string;

  @Property({ length: 255, nullable: true, default: 'NULL' })
  duration?: string;

  @ManyToOne({ entity: () => Album, nullable: true, defaultRaw: `NULL`, index: 'vinyl_id' })
  album?: Album;

}
