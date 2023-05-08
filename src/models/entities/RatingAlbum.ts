import { Entity, ManyToOne, OptionalProps, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { Album } from './Album';
import { User } from './User';

@Entity()
@Unique({ name: 'album_id', properties: ['album', 'user'] })
export class RatingAlbum {

  [OptionalProps]?: 'lastUpdatedDatetime';

  @PrimaryKey()
  id!: number;

  @Property({ nullable: true, default: true })
  rating?: boolean = true;

  @ManyToOne({ entity: () => Album, nullable: true, defaultRaw: `NULL`, index: 'vinyl_id' })
  album?: Album;

  @ManyToOne({ entity: () => User, nullable: true, defaultRaw: `NULL`, index: 'user_id' })
  user?: User;

  @Property({ nullable: true, defaultRaw: `current_timestamp()` })
  createdDatetime?: Date;

  @Property({ defaultRaw: `current_timestamp()` })
  lastUpdatedDatetime!: Date;

}
