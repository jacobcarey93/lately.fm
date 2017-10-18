INSERT INTO users
(user_name, email, img, is_admin, auth_id)
VALUES 
($1, $2, $3, false, $4)
RETURNING *;