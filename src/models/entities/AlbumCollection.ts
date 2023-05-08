import { Entity, ManyToOne, OptionalProps, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from './User';

@Entity()
export class AlbumCollection {

  [OptionalProps]?: 'lastUpdatedDatetime';

  @PrimaryKey()
  id!: number;

  @Property({ length: 255, nullable: true, default: 'NULL' })
  collectionName?: string;

  @Property({ columnType: 'text', length: 65535, nullable: true, default: 'NULL' })
  collectionDesc?: string;

  @Property({ length: 255, nullable: true, default: 'NULL' })
  imgPath?: string;

  @ManyToOne({ entity: () => User, fieldName: 'created_by', nullable: true, defaultRaw: `NULL`, index: 'created_by' })
  createdBy?: User;

  @Property({ defaultRaw: `current_timestamp()` })
  lastUpdatedDatetime!: Date;

  @Property({ nullable: true, defaultRaw: `current_timestamp()` })
  createdDatetime?: Date;

}
