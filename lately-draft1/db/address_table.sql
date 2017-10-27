CREATE TABLE addresses (
id SERIAL PRIMARY KEY,
firstName TEXT,
lastName TEXT,
address TEXT,
city TEXT,
state TEXT,
zip TEXT,
address_id SERIAL REFERENCES users(id)
);