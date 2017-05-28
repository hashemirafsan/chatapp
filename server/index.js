const express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', (socket) => {
  console.log('user connect');

	socket.on('disconnect', () => {
    	console.log('user disconnected');
  	});

  	socket.on('chat', (msg,id) => {
      console.log(msg)
  		io.emit('chat', msg,id);
  	})

  	socket.on('typing', (msg,id) => {
  		io.emit('typing', msg,id);
  	})
}) 

http.listen(process.env.PORT || 3000, () => {
	console.log('app start')
})