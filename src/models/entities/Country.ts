import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Country {

  @PrimaryKey()
  id!: number;

  @Property({ length: 255, nullable: true })
  countryName?: string;

}
