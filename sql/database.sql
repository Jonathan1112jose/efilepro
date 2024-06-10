CREATE DATABASE usersdb

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    userName VARCHAR(150) UNIQUE,
    password VARCHAR(150),
    rol VARCHAR(150)
);
CREATE TABLE menu(
    id SERIAL PRIMARY KEY,
    rol VARCHAR(150),
    description VARCHAR(150),
    icon VARCHAR(150),
    url VARCHAR(150)
);