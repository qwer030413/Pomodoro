
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
app.use(bodyParser.urlencoded({extended:true}))

// app.get('/', (req, res) => {
//     const Email = req.body.a
//     const Password = req.body.b
//     console.log("Email")
//     const q = "INSERT INTO users(email, pw) VALUES ('Chris@gmail.com','qwewr');"
//     db.query(q,(err,result) => {
//         res.send("pls work")
//     })
    


// });

app.post('/login', (req, res) => {
    const sqlInsert = "INSERT INTO users(email, pw) VALUES (?,?);"
    const userFind = "SELECT * FROM users WHERE email = ? AND pw = ?;"

    const Email = req.body.email
    const Password = req.body.password

    db.query(userFind,[req.body.email, req.body.password], (err, result) => {
        if(err)
        {
            console.log("nuh uh")
        }
        if(result.length > 0)
        {
            console.log("user found!")
        }
        else
        {
            console.log("user not found")
        }
    })
    


});


app.listen(5172, () =>{
    console.log("running on port 5172")
});