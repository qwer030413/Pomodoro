-- @block
CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT, 
    email VARCHAR(255) NOT NULL UNIQUE
    
    
);

-- @block
INSERT INTO users(id, email) VALUES (1, 'ar@gmail.com');