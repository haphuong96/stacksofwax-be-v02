import { Entity, ManyToOne, OneToOne, PrimaryKey } from '@mikro-orm/core';
import { AlbumCollection } from './AlbumCollection';
import { Comment } from './Comment';

@Entity()
export class CommentCollection {

  @PrimaryKey()
  id!: number;

  @OneToOne({ entity: () => Comment, nullable: true, defaultRaw: `NULL`, index: 'comment_id', unique: 'comment_id_2' })
  comment?: Comment;

  @ManyToOne({ entity: () => AlbumCollection, onUpdateIntegrity: 'cascade', onDelete: 'cascade', nullable: true, defaultRaw: `NULL`, index: 'collection_id' })
  collection?: AlbumCollection;

}
