import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

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

}
