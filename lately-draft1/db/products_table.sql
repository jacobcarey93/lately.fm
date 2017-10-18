CREATE TABLE products (
product_id SERIAL PRIMARY KEY,
product_name VARCHAR (180),
product_price MONEY,
product_image TEXT,
product_description VARCHAR (180)
);