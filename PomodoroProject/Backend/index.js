
const express = require('express')
const mysql = require('mysql2')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

const db = mysql.createPool({
    host: "localhost",
    // host: "127.0.0.1",
    user: 'root',
    password: 'qwer',
    database: 'pomodoro',
});
app.use(cors)
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.get('/api', (req, res) => {
    const sqlInsert = "INSERT INTO users(email, pw) VALUES (?,?);"
    const q = "INSERT INTO users(email, pw) VALUES ('Chris@gmail.com','qwewr');"
    db.query(q,(a,b) => {
        console.log("works!")
    })
    // res.json("hi")
    


});

app.post('/', (req, res) => {
    const sqlInsert = "INSERT INTO users(email, pw) VALUES (?,?);"
    const test = "INSERT INTO users(email, pw) VALUES ('Chris@gmail.com','qwewr');"
    const Email = req.body.a
    const Password = req.body.b
    db.query(test,(a,b) => {
    console.log("working")
    })
    db.query(sqlInsert,[Email, Password], (err, result) => {
        console.log(err)
    })
    


});


app.listen(5174, () =>{
    console.log("connected")
});