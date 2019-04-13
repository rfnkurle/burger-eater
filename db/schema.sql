CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(50) not null,
devoured boolean default false,
primary key (id)

);