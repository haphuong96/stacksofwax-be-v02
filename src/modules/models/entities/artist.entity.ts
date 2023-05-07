import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Artist {
    @PrimaryKey()
    id: number;

    @Property()
    artist_name: string;

}