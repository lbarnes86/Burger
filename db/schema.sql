DROP DATABASE IF EXISTS burgers_db;
     CREATE DATABASE burgers_db;
     USE burgers_db;

     CREATE table burgers 
     (
     id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
     burger_name VARCHAR(50) NOT NULL,
     devoured boolean DEFAULT FALSE
     );