const { Console } = require('console')
const { Socket } = require('dgram')
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(http)

app.use(express.static(path.resolve('public')))

io.on('connection', (Socket) => {
    Console.log ('a user connected')

    Socket.on ('message', (message) => {
        io.emit('message', message)
    })

    Socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

http.listen(4242, () => {
    console.log('listening on 4242')
})