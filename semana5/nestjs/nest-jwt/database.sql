CREATE DATABASE jwt_app;

CREATE TABLE clients (
    client_uid UUID NOT NULL PRIMARY KEY,
    client_name VARCHAR(100) NOT NULL,
    client_email VARCHAR(100) NOT NULL,
    client_password VARCHAR(255) NOT NULL
);