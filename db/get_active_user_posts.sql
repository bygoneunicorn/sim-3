SELECT * FROM users
JOIN posts ON users.user_id = posts.user_id
WHERE users.user_id = $1;