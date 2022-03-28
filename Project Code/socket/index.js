const io = require("socket.io")(8900,{
  cors:{
    origin:"http://localhost:3000"
  }
};
                                
let users = [];

const addUser = (userId,socketId) =>{
  !users.some(user=>user.userId === userId) &&
    users.push({userId, socketId });
};
const removeUser = (socketId) =>{
  users = users.filter((user) => user.socketId !== socketId);
};

socket.on("sendMessage", ({userId,receiverId,text})=>{
  const user = getUser(userId);
  io.to(user.socketId.emit("getMessage", {
    userId,
    text,
  })
});

io.on("connection", (socket) => {
  console.log("a user connected.")
  socket.on("addUser",(userId) =>{
     addUser(userID, socket.id);      
    io.emit("getUsers", users);
  });
  
  socket.on("disconnect",()=>{
    console.log("a user disconnected")
    removeUser(socket.id);
    io.emit("getUsers", users);
  })
})
