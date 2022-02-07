CREATE DATABASE login_authentication;

--\c into login_authentication

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_email VARCHAR(255),
    user_password VARCHAR(255)
);
    
