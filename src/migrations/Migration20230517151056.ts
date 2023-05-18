import { Migration } from '@mikro-orm/migrations';

export class Migration20230517151056 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `artist` (`id` int unsigned not null auto_increment primary key, `artist_name` varchar(255) null , `artist_description` text null, `img_path` varchar(255) null ) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `country` (`id` int unsigned not null auto_increment primary key, `country_name` varchar(255) null ) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `album` (`id` int unsigned not null auto_increment primary key, `album_title` varchar(255) null , `release_year` int null, `img_path` varchar(255) null , `country_id` int unsigned null default NULL, `created_datetime` datetime null default current_timestamp()) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `album` add index `country_id`(`country_id`);');

    this.addSql('create table `album_artist` (`id` int unsigned not null auto_increment primary key, `album_id` int unsigned not null, `artist_id` int unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `album_artist` add index `album_album_id`(`album_id`);');
    this.addSql('alter table `album_artist` add index `artist_artist_id`(`artist_id`);');
    this.addSql('alter table `album_artist` add unique `album_id`(`album_id`, `artist_id`);');

    this.addSql('create table `genre` (`id` int unsigned not null auto_increment primary key, `genre_name` varchar(255) null ) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `album_genre` (`id` int unsigned not null auto_increment primary key, `album_id` int unsigned null default NULL, `genre_id` int unsigned null default NULL) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `album_genre` add index `album_genre_ibfk_2`(`album_id`);');
    this.addSql('alter table `album_genre` add index `album_genre_ibfk_1`(`genre_id`);');
    this.addSql('alter table `album_genre` add unique `album_id_2`(`album_id`, `genre_id`);');
    this.addSql('alter table `album_genre` add unique `album_id`(`album_id`, `genre_id`);');

    this.addSql('create table `record_company` (`id` int unsigned not null auto_increment primary key, `company_name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `album_record_company` (`id` int unsigned not null auto_increment primary key, `album_id` int unsigned not null, `record_company_id` int unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `album_record_company` add index `album_album_id_2`(`album_id`);');
    this.addSql('alter table `album_record_company` add index `record_company_record_company_id`(`record_company_id`);');
    this.addSql('alter table `album_record_company` add unique `album_id`(`album_id`, `record_company_id`);');

    this.addSql('create table `track` (`id` int unsigned not null auto_increment primary key, `track_title` varchar(255) null , `duration` varchar(255) null , `album_id` int unsigned null default NULL) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `track` add index `vinyl_id`(`album_id`);');

    this.addSql('create table `user` (`id` int unsigned not null auto_increment primary key, `username` varchar(255) null , `email_address` varchar(255) null , `password` varbinary(255) not null, `img_path` varchar(255) null , `created_datetime` datetime null default current_timestamp(), `last_active` datetime not null default current_timestamp()) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `rating_album` (`id` int unsigned not null auto_increment primary key, `rating` tinyint(1) null default true, `album_id` int unsigned null default NULL, `user_id` int unsigned null default NULL, `created_datetime` datetime null default current_timestamp(), `last_updated_datetime` datetime not null default current_timestamp()) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `rating_album` add index `vinyl_id`(`album_id`);');
    this.addSql('alter table `rating_album` add index `user_id`(`user_id`);');
    this.addSql('alter table `rating_album` add unique `album_id`(`album_id`, `user_id`);');

    this.addSql('create table `comment` (`id` int unsigned not null auto_increment primary key, `user_id` int unsigned null default NULL, `comment` text null, `created_datetime` datetime null default current_timestamp(), `last_updated_datetime` datetime not null default current_timestamp()) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `comment` add index `user_id`(`user_id`);');

    this.addSql('create table `comment_album` (`id` int unsigned not null auto_increment primary key, `comment_id` int unsigned null default NULL, `album_id` int unsigned null default NULL) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `comment_album` add index `comment_id`(`comment_id`);');
    this.addSql('alter table `comment_album` add index `vinyl_id`(`album_id`);');

    this.addSql('create table `album_collection` (`id` int unsigned not null auto_increment primary key, `collection_name` varchar(255) null , `collection_desc` text null, `img_path` varchar(255) null , `created_by` int unsigned null default NULL, `last_updated_datetime` datetime not null default current_timestamp(), `created_datetime` datetime null default current_timestamp()) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `album_collection` add index `created_by`(`created_by`);');

    this.addSql('create table `comment_collection` (`id` int unsigned not null auto_increment primary key, `comment_id` int unsigned null default NULL, `collection_id` int unsigned null default NULL) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `comment_collection` add index `comment_id`(`comment_id`);');
    this.addSql('alter table `comment_collection` add unique `comment_id_2`(`comment_id`);');
    this.addSql('alter table `comment_collection` add index `collection_id`(`collection_id`);');

    this.addSql('create table `collection_like` (`id` int unsigned not null auto_increment primary key, `user_id` int unsigned null default NULL, `collection_id` int unsigned null default NULL, `created_datetime` datetime null default current_timestamp()) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `collection_like` add index `user_id`(`user_id`);');
    this.addSql('alter table `collection_like` add index `collection_id`(`collection_id`);');
    this.addSql('alter table `collection_like` add unique `user_id_2`(`user_id`, `collection_id`);');

    this.addSql('create table `album_album_collection` (`id` int unsigned not null auto_increment primary key, `album_id` int unsigned null default NULL, `album_collection_id` int unsigned null default NULL, `created_datetime` datetime not null default current_timestamp()) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `album_album_collection` add index `vinyl_id`(`album_id`);');
    this.addSql('alter table `album_album_collection` add index `vinyl_collection_id`(`album_collection_id`);');
    this.addSql('alter table `album_album_collection` add unique `album_id`(`album_id`, `album_collection_id`);');

    this.addSql('alter table `album` add constraint `album_country_id_foreign` foreign key (`country_id`) references `country` (`id`) on update cascade on delete set null;');

    this.addSql('alter table `album_artist` add constraint `album_artist_album_id_foreign` foreign key (`album_id`) references `album` (`id`) on update cascade;');
    this.addSql('alter table `album_artist` add constraint `album_artist_artist_id_foreign` foreign key (`artist_id`) references `artist` (`id`) on update cascade;');

    this.addSql('alter table `album_genre` add constraint `album_genre_album_id_foreign` foreign key (`album_id`) references `album` (`id`) on update cascade on delete set null;');
    this.addSql('alter table `album_genre` add constraint `album_genre_genre_id_foreign` foreign key (`genre_id`) references `genre` (`id`) on update cascade on delete set null;');

    this.addSql('alter table `album_record_company` add constraint `album_record_company_album_id_foreign` foreign key (`album_id`) references `album` (`id`) on update cascade;');
    this.addSql('alter table `album_record_company` add constraint `album_record_company_record_company_id_foreign` foreign key (`record_company_id`) references `record_company` (`id`) on update cascade;');

    this.addSql('alter table `track` add constraint `track_album_id_foreign` foreign key (`album_id`) references `album` (`id`) on update cascade on delete set null;');

    this.addSql('alter table `rating_album` add constraint `rating_album_album_id_foreign` foreign key (`album_id`) references `album` (`id`) on update cascade on delete set null;');
    this.addSql('alter table `rating_album` add constraint `rating_album_user_id_foreign` foreign key (`user_id`) references `user` (`id`) on update cascade on delete set null;');

    this.addSql('alter table `comment` add constraint `comment_user_id_foreign` foreign key (`user_id`) references `user` (`id`) on update cascade on delete set null;');

    this.addSql('alter table `comment_album` add constraint `comment_album_comment_id_foreign` foreign key (`comment_id`) references `comment` (`id`) on update cascade on delete set null;');
    this.addSql('alter table `comment_album` add constraint `comment_album_album_id_foreign` foreign key (`album_id`) references `album` (`id`) on update cascade on delete set null;');

    this.addSql('alter table `album_collection` add constraint `album_collection_created_by_foreign` foreign key (`created_by`) references `user` (`id`) on update cascade on delete set null;');

    this.addSql('alter table `comment_collection` add constraint `comment_collection_comment_id_foreign` foreign key (`comment_id`) references `comment` (`id`) on update cascade on delete set null;');
    this.addSql('alter table `comment_collection` add constraint `comment_collection_collection_id_foreign` foreign key (`collection_id`) references `album_collection` (`id`) on update cascade on delete cascade;');

    this.addSql('alter table `collection_like` add constraint `collection_like_user_id_foreign` foreign key (`user_id`) references `user` (`id`) on update cascade on delete set null;');
    this.addSql('alter table `collection_like` add constraint `collection_like_collection_id_foreign` foreign key (`collection_id`) references `album_collection` (`id`) on update cascade on delete cascade;');

    this.addSql('alter table `album_album_collection` add constraint `album_album_collection_album_id_foreign` foreign key (`album_id`) references `album` (`id`) on update cascade on delete set null;');
    this.addSql('alter table `album_album_collection` add constraint `album_album_collection_album_collection_id_foreign` foreign key (`album_collection_id`) references `album_collection` (`id`) on update cascade on delete cascade;');
  }
}
