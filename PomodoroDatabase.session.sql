-- @block
CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT, 
    email VARCHAR(255) NOT NULL UNIQUE,
    pw VARCHAR(255) NOT NULL
    
);

-- @block
INSERT INTO users(email, pw) VALUES ('ar@gmail.caom', 'password!');








-- @block
select CURRENT_USER();

-- @block
ALTER TABLE users
ADD userName VARCHAR(255) NOT NULL;



-- @block
CREATE TABLE todolist(
    email VARCHAR(255) NOT NULL UNIQUE,
    todoid INT,
    content VARCHAR(255),
    completed BOOLEAN,
    editing BOOLEAN,
    workingon BOOLEAN
    

    
);


-- @block
ALTER TABLE todolist DROP COLUMN id;

-- @block
ALTER TABLE todolist
ADD email VARCHAR(255) NOT NULL;