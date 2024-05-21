CREATE DATABASE usersdb

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    userName VARCHAR(150) UNIQUE,
    password VARCHAR(150),
    rol VARCHAR(150)
);