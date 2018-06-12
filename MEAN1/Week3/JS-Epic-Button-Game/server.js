const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, "./views")));
const server = app.listen(1337);
const io = require('socket.io')(server);
var counter = 0;
    
io.on('connection', function (socket) { 
  io.emit('updated_message', counter);
  socket.on('button_pressed', function() {
    counter++;
    io.emit('updated_message', counter);
  }); 
    
});