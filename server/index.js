require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , controller = require('./controller')
    , massive = require('massive')
    
const app = express();

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env

massive(CONNECTION_STRING).then( db => {
    app.set('db', db);
    app.listen( SERVER_PORT, () => console.log(`Listening to all the good tunes on port: ${SERVER_PORT}`))
})

app.use( bodyParser.json())

app.post('/register', (req, res, next) =>{
    console.log(req.body)
    const dbInstance = req.app.get('db')
    const {username, password} = req.body

    dbInstance.create_user([username, password])
        .then( user => {
            console.log(user)
            res.status(200).send(user);
            
        })
} )
app.post('/login', (req, res, next) => {
    console.log(req.body)
    const dbInstance = req.app.get('db')
    const {username, password} = req.body

    console.log(username, password);
    dbInstance.get_user([username, password])
        .then( user => {
            res.status(200).send(user)
        })
})


