create schema db_fruteria;
use db_fruteria;
create table frutas(
id int primary key auto_increment,
name varchar(45),
price double
)ENGINE= InnoDB;
insert into frutas values (null, "apple", 3.5);