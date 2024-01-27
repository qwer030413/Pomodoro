-- @block
CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT, 
    email VARCHAR(255) NOT NULL UNIQUE,
    pw VARCHAR(255) NOT NULL
    
);

-- @block
INSERT INTO users(email, pw) VALUES ('ar@gmail.com', 'password!');

-- @block
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'qwer';


-- @block
DROP TABLE users;

-- @block
UPDATE mysql.user SET Host='127.0.0.1' WHERE Host='localhost' AND User='root';
UPDATE mysql.db SET Host='127.0.0.1' WHERE Host='localhost' AND User='root';
FLUSH PRIVILEGES;


-- @block
select CURRENT_USER();

-- @block
mysql
