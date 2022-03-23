const http = require('http')
const express = require('express')
const { ppid } = require('process')
const { uuid } = require('uuidv4')
const app = express()
const porta = 3001


app.use(express.json())

app.get('/usuarios', (req, res)=>{
    const users = [
        {nome: 'Ana', idade: 21},
        {nome: 'Henrique', idade: 21},
        {nome: 'Cassio', idade: 30},
        {nome: 'Jéssica', idade: 26}
    ]
    res.send(users)

app.post('/usuarios/:id', (req, res)=>{
})

}).listen(porta)