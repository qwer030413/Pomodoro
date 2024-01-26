
const express = require('express')
const mysql = require('mysql')
const app = express();

const db = mysql.createPool({
    host: "localhost",
    user: 'root',
    password: 'qwer',
    database: 'PomodoroDatabase',
});
app.get('/', (req, res) => {
    const sqlInsert = "INSERT INTO users(id, email) VALUES (2, 'br@gmail.com');"
    
    
    db.query(sqlInsert, (err, result) => {
        res.send("hello worldaa");
    })
    
});
// db.connect((err) => {
//     if (err) return console.error(err.message);
//     let sqlInsert = "INSERT INTO users(id, email) VALUES (1, 'ar@gmail.com');"
    
  
//     // execute the insert statment
//     connection.query(sqlInsert);
  
//     // close the database connection
//     connection.end();
//   });


app.listen(5174, () =>{
    console.log("yay");
});