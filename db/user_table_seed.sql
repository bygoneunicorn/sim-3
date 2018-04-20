CREATE TABLE users(
    user_id SERIAL PRIMARY KEY, 
    username TEXT, 
    password TEXT 
);

INSERT INTO users(username, password)
VALUES('el primero usero', 'el passwordo');