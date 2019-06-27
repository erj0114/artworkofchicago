
const express = require('express')
var cors = require('cors')
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const usersTable = require('./users')

app.use(cors({
  origin: "http://localhost:8080",
  credentials: true
}))

app.use(
    session({
        secret: 'whateveryouwanttodohereisfine1234',
        saveUninitialized: false,
        resave: false
    })
)
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', usersTable.getUsers)
app.get('/users/:id', usersTable.getUserById)
app.post('/users', usersTable.createUser)
app.put('/users/:id', usersTable.updateUser)
app.delete('/users/:id', usersTable.deleteUser)
app.post('/checkLogin', usersTable.authenticateUser)
  
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })