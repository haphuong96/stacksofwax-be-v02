import { Entity, OptionalProps, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {

  [OptionalProps]?: 'lastActive';

  @PrimaryKey()
  id!: number;

  @Property({ length: 255, nullable: true, default: 'NULL' })
  username?: string;

  @Property({ length: 255, nullable: true, default: 'NULL' })
  emailAddress?: string;

  @Property({ columnType: 'varbinary(255)', length: 255 })
  password!: unknown;

  @Property({ length: 255, nullable: true, default: 'NULL' })
  imgPath?: string;

  @Property({ nullable: true, defaultRaw: `current_timestamp()` })
  createdDatetime?: Date;

  @Property({ defaultRaw: `current_timestamp()` })
  lastActive!: Date;

}
