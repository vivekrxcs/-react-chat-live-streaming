const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: true }));
//app.use(require('./utils/cors'));
app.use(express.json());
//app.use('/',require('./routes'));

const userOperation=require('./database');


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/chat/index.html');
});

app.post('/add-user',(req,res)=>{
  userOperation.addUser(req.body,res);
})
app.get('/users',(req,res)=>{
  userOperation.getUsers(res);
})

app.post('/one-user',(req,res)=>{
  userOperation.getOneUser(req.body,res);
})

// this connection is show message for one to one
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    //console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});



server.listen(3005, () => {
  console.log('listening on *:3000');
});


