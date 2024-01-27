
const express = require('express')
const mysql = require('mysql2')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

const db = mysql.createPool({
    // host: "localhost",
    host: "127.0.0.1",
    user: 'root',
    password: 'qwer',
    database: 'pomodoro',
});
app.use(cors)
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.get('/api', (req, res) => {
    const sqlInsert = "INSERT INTO users(email, pw) VALUES (?,?);"
    const q = "SELECT * FROM users"
    db.query(q,(a,b) => {
        if(a) return res.json(a)
        return res.json(b)
    })
    // res.json("hi")
    


});

// app.post('/api', (req, res) => {
//     const sqlInsert = "INSERT INTO users(email, pw) VALUES (?,?);"
//     const Email = req.body.Email
//     const Password = req.body.Password

//     db.query(sqlInsert,[ Email, Password], (err, result) => {
//         console.log(err)
//     })
    


// });


app.listen(5000, () =>{
    console.log("connected")
});