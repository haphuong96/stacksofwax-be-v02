import { Migration } from '@mikro-orm/migrations';

export class Migration20230518001833 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `artist` modify `artist_name` varchar(255), modify `img_path` varchar(255);');

    this.addSql('alter table `country` modify `country_name` varchar(255);');

    this.addSql('alter table `album` modify `album_title` varchar(255), modify `release_year` int, modify `img_path` varchar(255);');

    this.addSql('alter table `genre` modify `genre_name` varchar(255);');

    this.addSql('alter table `track` modify `track_title` varchar(255), modify `duration` varchar(255);');

    this.addSql('alter table `user` modify `username` varchar(255), modify `email_address` varchar(255), modify `img_path` varchar(255);');

    this.addSql('alter table `comment` modify `comment` text;');

    this.addSql('alter table `album_collection` modify `collection_name` varchar(255), modify `collection_desc` text, modify `img_path` varchar(255);');
  }

  async down(): Promise<void> {
    this.addSql('alter table `artist` modify `artist_name` varchar(255) default \'NULL\', modify `img_path` varchar(255) default \'NULL\';');

    this.addSql('alter table `country` modify `country_name` varchar(255) default \'NULL\';');

    this.addSql('alter table `album` modify `album_title` varchar(255) default \'NULL\', modify `release_year` int default NaN, modify `img_path` varchar(255) default \'NULL\';');

    this.addSql('alter table `genre` modify `genre_name` varchar(255) default \'NULL\';');

    this.addSql('alter table `track` modify `track_title` varchar(255) default \'NULL\', modify `duration` varchar(255) default \'NULL\';');

    this.addSql('alter table `user` modify `username` varchar(255) default \'NULL\', modify `email_address` varchar(255) default \'NULL\', modify `img_path` varchar(255) default \'NULL\';');

    this.addSql('alter table `comment` modify `comment` text default \'NULL\';');

    this.addSql('alter table `album_collection` modify `collection_name` varchar(255) default \'NULL\', modify `collection_desc` text default \'NULL\', modify `img_path` varchar(255) default \'NULL\';');
  }

}
