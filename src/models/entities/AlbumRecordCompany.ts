import { Entity, ManyToOne, PrimaryKey, Unique } from '@mikro-orm/core';
import { Album } from './Album';
import { RecordCompany } from './RecordCompany';

@Entity()
@Unique({ name: 'album_id', properties: ['album', 'recordCompany'] })
export class AlbumRecordCompany {

  @PrimaryKey()
  id!: number;

  @ManyToOne({ entity: () => Album, index: 'album_album_id_2' })
  album!: Album;

  @ManyToOne({ entity: () => RecordCompany, index: 'record_company_record_company_id' })
  recordCompany!: RecordCompany;

}
