# TrApp

#Backend

-move backend/trapp folder to the www or htdocs folder in wampp or xampp server

Create a DATABASE in mysql

-database name: trapp

Create tables

CREATE TABLE users (
   id int(11) NOT NULL AUTO_INCREMENT,
   user_name varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
   user_email varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
    PRIMARY KEY (id)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 
 CREATE TABLE posts (
   id int(11) NOT NULL AUTO_INCREMENT,
   title varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
   description varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
   image varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
    PRIMARY KEY (id)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 
 #Frontend
 
 -run yarn in frontend folder
 -create .env file and add path server in VITE_BASE_URL=
 
 
