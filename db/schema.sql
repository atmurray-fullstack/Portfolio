
CREATE DATABASE andrewPortfolio_db;

USE andrewPortfolio_db;

CREATE TABLE Comments(
    id  INT(30) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    comment VARCHAR(255),
    commentDate TIMESTAMP
);