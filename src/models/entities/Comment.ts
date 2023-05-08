import { Entity, ManyToOne, OptionalProps, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from './User';

@Entity()
export class Comment {

  [OptionalProps]?: 'lastUpdatedDatetime';

  @PrimaryKey()
  id!: number;

  @ManyToOne({ entity: () => User, nullable: true, defaultRaw: `NULL`, index: 'user_id' })
  user?: User;

  @Property({ columnType: 'text', length: 65535, nullable: true, default: 'NULL' })
  comment?: string;

  @Property({ nullable: true, defaultRaw: `current_timestamp()` })
  createdDatetime?: Date;

  @Property({ defaultRaw: `current_timestamp()` })
  lastUpdatedDatetime!: Date;

}
