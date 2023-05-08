import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Genre {

  @PrimaryKey()
  id!: number;

  @Property({ length: 255, nullable: true, default: 'NULL' })
  genreName?: string;

}
