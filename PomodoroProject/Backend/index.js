
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

app.post('/home', (req, res) => {
    const userToDoList = "SELECT * FROM todolist WHERE email = ?;"
    db.query(userToDoList,[req.body.email], (err, result) => {
        if(err)
        {
            console.log(err)
        }
        else{
            return res.json(result)
        }
    })


});

app.post('/login', (req, res) => {
    const userFind = "SELECT * FROM users WHERE email = ? AND pw = ?;"

    db.query(userFind,[req.body.email, req.body.password], (err, result) => {
        if(err)
        {
            console.log(err)
        }
        else if(result.length > 0)
        {
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
    const add = "INSERT INTO timecomplete(email,sec,min,hr) VALUES (?,?,?,?);"
    db.query(add,[req.body.newEmail,0,0,0], (err, result) => {
        if(err)
        {
            console.log(err)
        }
    })
    db.query(signUp,[req.body.newEmail, req.body.newPassword, req.body.newName], (err, result) => {
        if(err)
        {
            return res.status(404).json(err)
        }
        else if(result.length > 0)
        {
            return res.json(result)
        }
        else
        {
            return res.json(err)
        }
    })
    


});
app.post('/ClearAll', (req, res) => {
    const clear = "DELETE FROM todolist WHERE email=?;"
    

    db.query(clear,[req.body.email], (err, result) => {
        if(err)
        {
            console.log(err)
        }
    })
});
app.post('/addToDo', (req, res) => {
    const add = "INSERT INTO todolist(email, todoid, content, completed, editing, workingon) VALUES (?,?,?,?,?,?);"
    db.query(add,[req.body.email, req.body.todoid, req.body.content, req.body.completed,req.body.editing,req.body.workingon,], (err, result) => {
        if(err)
        {
            console.log(err)
        }
        else if(result.length > 0)
        {
            return res.json(result)
        }
        else
        {
            return res.json(err)
        }
    })

});

app.post('/deleteToDo', (req, res) => {
    const deleteToDo = "DELETE FROM todolist WHERE email=? AND todoid=? AND content=?;"
    db.query(deleteToDo,[req.body.email, req.body.todoid, req.body.content], (err, result) => {
        if(err)
        {
            console.log(err)
        }
        
    })
});
app.post('/History', (req, res) => {
    const updateSeconds = "UPDATE timecomplete SET sec = sec + 1, min = sec / 60, hr = sec / 3600 WHERE email = ?;"
    const getSeconds = "SELECT * FROM timecomplete where email = ?;"
    let tempSec = 0;

    db.query(updateSeconds,[req.body.email], (err, result) => {
        if(err)
        {
            console.log(err)
        }
        else{
            db.query(getSeconds,[req.body.email], (error, data) => {
                if(error)
                {
                    console.log(error)
                }
                else{
                    return res.json(data)
                }
            })
        }
        
    })
   
    
});

app.listen(5172, () =>{
    console.log("running on port 5172")
});