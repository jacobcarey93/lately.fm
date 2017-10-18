CREATE TABLE reviews (
  review_id SERIAL PRIMARY KEY,
  artist_name VARCHAR (180),
  album_image TEXT,
  review_content TEXT,
  review_date TEXT
  );