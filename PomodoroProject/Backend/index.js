
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

app.use(cors())
app.use(express.json())
// app.use(express.static('../vite-project'))
app.use(bodyParser.urlencoded({extended:true}))

// app.get('/login', (req, res) => {
//     res.status(200).send()
    


// });

app.post('/login', (req, res) => {
    const userFind = "SELECT * FROM users WHERE email = ? AND pw = ?;"

    db.query(userFind,[req.body.email, req.body.password], (err, result) => {
        if(err)
        {
            console.log(err)
        }
        else if(result.length > 0)
        {
            console.log(result)
            return res.json(result)
        }
        else
        {
            console.log(err)
            return res.json(err)
        }
    })
    


});
app.post('/signUp', (req, res) => {
    const signUp = "INSERT INTO users(email, pw, userName) VALUES (?,?,?);"
    db.query(signUp,[req.body.newEmail, req.body.newPassword, req.body.newName], (err, result) => {
        if(err)
        {
            console.log(err)
            return res.status(404).json(err)
        }
        else if(result.length > 0)
        {
            console.log(result.insertId)
            return res.json(result)
        }
        else
        {
            console.log(result)
            return res.json(err)
        }
    })
    


});


app.listen(5172, () =>{
    console.log("running on port 5172")
});