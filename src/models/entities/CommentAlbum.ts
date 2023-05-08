import { Entity, ManyToOne, PrimaryKey } from '@mikro-orm/core';
import { Album } from './Album';
import { Comment } from './Comment';

@Entity()
export class CommentAlbum {

  @PrimaryKey()
  id!: number;

  @ManyToOne({ entity: () => Comment, nullable: true, defaultRaw: `NULL`, index: 'comment_id' })
  comment?: Comment;

  @ManyToOne({ entity: () => Album, nullable: true, defaultRaw: `NULL`, index: 'vinyl_id' })
  album?: Album;

}
