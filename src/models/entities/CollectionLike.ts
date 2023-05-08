import { Entity, ManyToOne, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { AlbumCollection } from './AlbumCollection';
import { User } from './User';

@Entity()
@Unique({ name: 'user_id_2', properties: ['user', 'collection'] })
export class CollectionLike {

  @PrimaryKey()
  id!: number;

  @ManyToOne({ entity: () => User, nullable: true, defaultRaw: `NULL`, index: 'user_id' })
  user?: User;

  @ManyToOne({ entity: () => AlbumCollection, onUpdateIntegrity: 'cascade', onDelete: 'cascade', nullable: true, defaultRaw: `NULL`, index: 'collection_id' })
  collection?: AlbumCollection;

  @Property({ nullable: true, defaultRaw: `current_timestamp()` })
  createdDatetime?: Date;

}
