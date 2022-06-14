const { response } = require('express')
const express = require('express')
const { request } = require('http')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(http)
const port = process.env.PORT || 1337

app.get('/', (request,Response) => {
    Response.send('welcome to the Chatroom!');
})

app.use(express.static(path.resolve('public')))

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('message', (message) => {
    io.emit('message', message)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

const port = process.env.PORT || '5000';
app.listen(port,() => console.log('server started on port {port}'))