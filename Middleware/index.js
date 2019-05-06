const express = require('express')
const myMiddleware = require('./middlewore')
const app = express();


//app.use('/users',myMiddleware.locoMiddlewre)

app.get('/', (req, res) => {
    res.end("Hello")
})

app.get('/users',[myMiddleware.locoMiddlewre] ,(req, res) => {
    res.end('Pedro')
})


app.listen(3000, () => {
    console.log('http://localhost:3000')
})


