CREATE DATABASE usersdb

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    userName VARCHAR(150) UNIQUE,
    password VARCHAR(150),
    rol VARCHAR(150)
);

CREATE TABLE menu (
    id serial PRIMARY KEY,
    rol character varying(50),
    description character varying(255),
    icon character varying(150),
    url character varying(255),
    padre integer
);

CREATE TABLE bitacora(
    id SERIAL PRIMARY KEY,
    username VARCHAR(150),
    date VARCHAR(250),
    action VARCHAR(250),
    path VARCHAR(250),
    description VARCHAR(300)
);



