CREATE TABLE posts(
    post_id SERIAL PRIMARY KEY,
    user_id TEXT REFERENCES users,
    post TEXT
);

INSERT INTO posts(user_id, post)
VALUES(1, 'This is my post primero');
INSERT INTO posts(user_id, post)
VALUES(1, 'This is my second post');
