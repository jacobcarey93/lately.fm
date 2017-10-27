CREATE TABLE users (
id SERIAL PRIMARY KEY,
user_name VARCHAR(180),
email VARCHAR(180),
img TEXT,
is_admin BOOLEAN,
auth_id TEXT,
);
