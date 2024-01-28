-- @block
CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT, 
    email VARCHAR(255) NOT NULL UNIQUE,
    pw VARCHAR(255) NOT NULL,
    
);

-- @block
INSERT INTO users(email, pw) VALUES ('ar@gmail.caom', 'password!');








-- @block
select CURRENT_USER();

-- @block
ALTER TABLE users
ADD userName VARCHAR(255) NOT NULL;
