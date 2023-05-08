import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class RecordCompany {

  @PrimaryKey()
  id!: number;

  @Property({ length: 255 })
  companyName!: string;

}
